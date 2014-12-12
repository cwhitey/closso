(ns test-web.app
  (:require [clojure.core.cache :as cache]
            [compojure.core :refer [defroutes routes]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [stencil.loader :as stencil]
            [test-web.middleware.session :as session-manager]
            [test-web.middleware.context :as context-manager]))

;;; Initialization
;; Add required code here (database, etc.)
(stencil/set-cache (cache/ttl-cache-factory {}))
;;(stencil/set-cache (cache/lru-cache-factory {}))


;;; Load public routes
(require '[test-web.view.home :refer [home-routes]]
         '[test-web.view.about :refer [about-routes]])

;;; Load registration and authentication routes
(require '[test-web.view.auth :refer [auth-routes]])

;;; Load generic routes
(require '[test-web.view.profile :refer [profile-routes]]
         '[test-web.view.settings :refer [settings-routes]]
         '[test-web.view.admin :refer [admin-routes]])

;;; Load website routes
;; Add your routes here


;; Ring handler definition
(defroutes site-handler
  (-> (routes home-routes
              about-routes
              auth-routes
              profile-routes
              settings-routes
              admin-routes
              (route/resources "/")
              (route/not-found "<h1>Page not found.</h1>"))
      (session-manager/wrap-session)
      (context-manager/wrap-context-root)
      (handler/site)))
