(ns closso.web
  (:import org.eclipse.jetty.server.Server)
  (:require [compojure.core :refer [defroutes]]
            [closso.routes.home :refer [home-routes]]
            [closso.middleware :refer [load-middleware]]
            [closso.session-manager :as session-manager]
            [closso.routes.auth :refer [auth-routes]]
            [closso.logging :as log-init]
            [com.stuartsierra.component :as component]
            [noir.response :refer [redirect]]
            [noir.util.middleware :refer [app-handler]]
            [ring.middleware.defaults :refer [site-defaults]]
            [ring.adapter.jetty :as jetty]
            [compojure.route :as route]
            [taoensso.timbre :as log]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [cronj.core :as cronj]))

;; TODO Clean up dependencies
(defroutes base-routes
  (route/resources "/")
  (route/not-found "<p>Not Found</p>"))

(defn init
  "initialisation code.
   called once when app is deployed."
  []
  #_(log-init/init)
  (when (env :dev)
    (parser/cache-off!)
    (log/info "Using development profile"))
  (cronj/start! session-manager/cleanup-job))

(defn destroy
  "runs when the application shuts down.
  put any clean up code here."
  []
  (log/info "Shutting down...")
  (cronj/shutdown! session-manager/cleanup-job)
  (log/info "Shutdown complete!"))

(def session-defaults
 {:timeout (* 60 30), :timeout-response (redirect "/")})

(defn- mk-defaults
  "set to true to enable XSS protection"
  [xss-protection?]
  (-> site-defaults
   (update-in [:session] merge session-defaults)
   (assoc-in [:security :anti-forgery] xss-protection?)))


;; TODO stop using noir (Can use latest version of Luminus for reference)
(defn handler [db-component]
  (app-handler
   [(auth-routes db-component) home-routes base-routes]
   :middleware    (load-middleware)
   :ring-defaults (mk-defaults false)
   :access-rules  []
   :formats       [:json-kw :edn :transit-json]))

(defrecord Web [db config]

  component/Lifecycle
  (start [component]
    (log/info "Starting Web component")
    (log/info "Web config:" config)
    (init)
    (let [options (:options config)
          handler (handler db)
          server  (jetty/run-jetty handler options)]
      (assoc component :server server)))

  (stop [component]
    (log/info "Stopping Web component")
    (destroy)
    (if-let [^Server server (:server component)]
      (do (.stop server)
          (.join server)
          (dissoc component :server)))))

(defn new-web [config]
  (Web. nil config))
