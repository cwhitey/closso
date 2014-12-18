(ns test-luminus-mongo-site.handler
  (:require [compojure.core :refer [defroutes]]
            [test-luminus-mongo-site.routes.home :refer [home-routes]]
            [test-luminus-mongo-site.middleware :refer [load-middleware]]
            [test-luminus-mongo-site.session-manager :as session-manager]
            [noir.response :refer [redirect]]
            [noir.util.middleware :refer [app-handler]]
            [ring.middleware.defaults :refer [site-defaults]]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.rotor :as rotor]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [cronj.core :as cronj]
            [test-luminus-mongo-site.routes.auth :refer [auth-routes]]))

(defroutes
  base-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defn init
  "initialisation code.
   called once when app is deployed."
  []
  (timbre/set-config!
    [:appenders :rotor]
    {:min-level :info,
     :enabled? true,
     :async? false,
     :max-message-per-msecs nil,
     :fn rotor/appender-fn})
  (timbre/set-config!
    [:shared-appender-config :rotor]
    {:path "test_luminus_mongo_site.log",
     :max-size (* 512 1024),
     :backlog 10})
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
