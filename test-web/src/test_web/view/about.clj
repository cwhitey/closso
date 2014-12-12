(ns test-web.view.about
  (:require [clojure.java.io :as io]
            [compojure.core :refer [defroutes GET]]
            [test-web.view.common :refer [wrap-layout]]))

(defn- page-body [request]
  (slurp (io/resource "test_web/view/templates/about.html")))

(defn- render-page [request]
  (wrap-layout "About"
               (page-body request)))

(defroutes about-routes
  (GET "/about" request (render-page request)))

