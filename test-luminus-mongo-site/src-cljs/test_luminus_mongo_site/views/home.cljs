(ns test-luminus-mongo-site.views.home
  (:require [test-luminus-mongo-site.views.util :as util]
            [test-luminus-mongo-site.session :as session]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]))

(session/global-put! :saved? false)

(def form
  [:div
   (util/text-input-group "BMI"
                          [[:person.height "Height" :numeric]
                           [:person.weight "Weight" :numeric]
                           [:person.first-name "First name" :text]
                           [:person.last-name "Last name" :text]])])

(defn save-doc
  "use Ajax to hit the /save endpoint on the backend"
  [doc]
  (fn []
    (.log js/console "Doc: " @doc)
    (POST "/save"
          {:params {:doc @doc}
           :handler (fn [_] (session/global-put! :saved? true))})))

(defn home []
  (let [doc (atom {})]
    (fn []
      [:div
       [:h1 "Home Page"]
       [bind-fields form doc
        (fn [_ _ _] (session/global-put! :saved? false) nil)]
       (if (session/global-state :saved?)
         [:p "Saved"]
         [:button {:type "submit"
                   :class "btn btn-default"
                   :onClick (save-doc doc)}
          "Submit"])])))

(.log js/console "Code: " form)
