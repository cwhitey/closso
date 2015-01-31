(ns closso.core
  (:require [closso.routes :as routes]
            [closso.session :as session]
            [closso.views.common :as common]
            [closso.views.pages :refer [pages]]
            [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [POST]]))



; render page
(defn page-render []
  [:div.container
   [common/header]
   [:div.col-md-offset-1.col-md-10 [(session/global-state :current-page)]]])

(defn page-component []
  (reagent/create-class {:component-will-mount routes/app-routes
                         :render page-render}))

(routes/app-routes)

;; initialize app
(defn init! []
  (session/global-put! :current-page (pages :home))
  (reagent/render-component [page-component]
                           (.getElementById js/document "app")))
;render this entire app (this gets compiled to "app.js" as defined in project.clj)
