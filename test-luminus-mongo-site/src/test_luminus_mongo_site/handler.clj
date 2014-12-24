(ns test-luminus-mongo-site.handler
  (:require [compojure.core :refer [defroutes]]
            [test-luminus-mongo-site.routes.home :refer [home-routes]]
            [test-luminus-mongo-site.middleware :refer [load-middleware]]
            [test-luminus-mongo-site.session-manager :as session-manager]
            [test-luminus-mongo-site.routes.auth :refer [auth-routes]]
            [test-luminus-mongo-site.logging :as log]
            [test-luminus-mongo-site.layout :as layout]
            [test-luminus-mongo-site.templates.base :as base]
            [test-luminus-mongo-site.templates.notfound :as nf]
            [noir.response :refer [redirect]]
            [noir.util.middleware :refer [app-handler]]
            [ring.middleware.defaults :refer [site-defaults]]
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
