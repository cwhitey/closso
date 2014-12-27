(ns test-luminus-mongo-site.core
  (:require [test-luminus-mongo-site.routes :as routes]
            [test-luminus-mongo-site.session :as session]
            [test-luminus-mongo-site.views.common :as common]
            [test-luminus-mongo-site.views.pages :refer [pages]]
            [test-luminus-mongo-site.views.util :as util]
            [reagent.core :as reagent :refer [atom]]
            #_[reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]))

#_(session/global-put! :saved? false)


#_(def form
  [:div
   [:div.page-header [:h1 "Reagent Form"]]
   (util/text-input :first-name "First name")
   (util/text-input :last-name "Last name")
   (util/selection-list "Favorite drinks" :favorite-drinks
                   [:coffee "Coffee"]
                   [:beer "Beer"]
                   [:crab-juice "Crab juice"])])

#_(defn save-doc
  "use Ajax to hit the /save endpoint on the backend"
  [doc]
  (fn []
    (POST (str js/context "/save")
          {:params {:doc @doc}
           :handler (fn [_] (session/global-put! :saved? true))})))

#_(defn home []
  (let [doc (atom {})]
    (fn []
      [:div
       [bind-fields form doc
        (fn [_ _ _] (session/global-put! :saved? false) nil)]
       (if (session/global-state :saved?)
         [:p "Saved"]
         [:button {:type "submit"
                   :class "btn btn-default"
                   :onClick (save-doc doc)}
          "Submit"])])))

; render page
(defn page-render []
  [:div.container
   [common/header]
   [(session/global-state :current-page)]])

(defn page-component []
  (reagent/create-class {:component-will-mount routes/app-routes
                         :render page-render}))

;; initialize app
(defn init! []
  (session/global-put! :current-page (pages :home))
  (reagent/render-component [page-component]
                            (.getElementById js/document "app")))



#_(defn init! []
  (session/global-put! :current-page home)
  (reagent/render-component [navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [page] (.getElementById js/document "app"))) ;render this entire app (this gets compiled to "app.js" as defined in project.clj)
