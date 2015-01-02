(ns test-luminus-mongo-site.core
  (:require [test-luminus-mongo-site.routes :as routes]
            [test-luminus-mongo-site.session :as session]
            [test-luminus-mongo-site.views.common :as common]
            [test-luminus-mongo-site.views.pages :refer [pages]]
            [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [POST]]))

; render page
(defn page-render []
  [:div.container
   [common/header]
   [(session/global-state :current-page)]])

(defn page-component []
  (reagent/create-class {:component-will-mount routes/app-routes
                         :render page-render}))

(routes/app-routes)

;; initialize app
(defn init! []
  (session/global-put! :current-page (:page (:home pages)))
  (reagent/render-component [page-component]
                           (.getElementById js/document "app")))
;render this entire app (this gets compiled to "app.js" as defined in project.clj)
