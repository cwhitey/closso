(ns test-web.view.settings
  (:require [compojure.core :refer [defroutes GET]]
            [stencil.core :as stencil]
            [test-web.view.common :refer [restricted authenticated? wrap-layout]]))

(defn- page-body []
  (stencil/render-file
   "test_web/view/templates/settings"
   {}))

(defn- render-page [request]
  (wrap-layout "Settings"
               (page-body)))

(defroutes settings-routes
  (GET "/settings" request (restricted authenticated? render-page request)))
