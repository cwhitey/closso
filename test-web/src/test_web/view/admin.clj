(ns test-web.view.admin
  (:require [compojure.core :refer [defroutes GET]]
            [stencil.core :as stencil]
            [test-web.view.common :refer [restricted admin? wrap-layout]]))

(defn- page-body []
  (stencil/render-file
   "test_web/view/templates/admin"
   {}))

(defn- render-page [request]
  (wrap-layout "Admin"
               (page-body)))

(defroutes admin-routes
  (GET "/admin" request (restricted admin? render-page request)))
