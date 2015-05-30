(ns closso.handler
  (:import org.eclipse.jetty.server.Server)
  (:require [compojure.core :refer [defroutes]]
            [closso.routes.home :refer [home-routes]]
            [closso.middleware :refer [load-middleware]]
            [closso.session-manager :as session-manager]
            [closso.routes.auth :refer [auth-routes]]
            [closso.logging :as log]
            [closso.layout :as layout]
            [closso.templates.base :as base]
            [closso.templates.notfound :as nf]
            [com.stuartsierra.component :as component]
            [noir.response :refer [redirect]]
            [noir.util.middleware :refer [app-handler]]
            [ring.middleware.defaults :refer [site-defaults]]
            [ring.adapter.jetty :as jetty]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [cronj.core :as cronj]))

(defroutes base-routes
  (route/resources "/")
  (route/not-found (layout/render base/base {:title "Not Found"
                                             :body  (nf/notfound)})))

(defn init
  "initialisation code.
   called once when app is deployed."
  []
  (log/init)
  (if (env :dev) (parser/cache-off!))
  (cronj/start! session-manager/cleanup-job)
  (timbre/info
    "-=[Started successfully"
    (when (env :dev) "using the development profile")
    "]=-"))

(defn destroy
  "runs when the application shuts down.
  put any clean up code here."
  []
  (timbre/info "Shutting down...")
  (cronj/shutdown! session-manager/cleanup-job)
  (timbre/info "Shutdown complete!"))

(def session-defaults
 {:timeout (* 60 30), :timeout-response (redirect "/")})

(defn- mk-defaults
  "set to true to enable XSS protection"
  [xss-protection?]
  (-> site-defaults
   (update-in [:session] merge session-defaults)
   (assoc-in [:security :anti-forgery] xss-protection?)))

(def app
 (app-handler
   [auth-routes home-routes base-routes]
   :middleware    (load-middleware)
   :ring-defaults (mk-defaults false)
   :access-rules  []
   :formats       [:json-kw :edn :transit-json]))


(defrecord Web [app]
  component/Lifecycle

  (start [component]
    (if (:server component)
      component
      (do
        (init)
        (let [options (-> component (dissoc :app) (assoc :join? false))
              server  (jetty/run-jetty (:handler app) options)]
          (assoc component :server server)))))

  (stop [component]
    (destroy)
    (if-let [^Server server (:server component)]
      (do (.stop server)
          (.join server)
          (dissoc component :server))
      component)))

(defn new-web [options]
  (map->Web options))
