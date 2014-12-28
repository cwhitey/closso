(ns test-luminus-mongo-site.views.home
  (:require [test-luminus-mongo-site.views.util :as util]
            [test-luminus-mongo-site.session :as session]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]))

(session/global-put! :saved? false)

(def form
  [:div
   #_(util/text-input-group "Reagent Test"
                          [[:first-name "First name"]
                           [:last-name "Last name"]])
   (util/text-input :person.first-name "First name")
   (util/text-input :person.last-name "Last name")
   #_(util/selection-list "Favorite drinks" :favorite-drinks
                          [:coffee "Coffee"]
                          [:beer "Beer"]
                          [:crab-juice "Crab juice"])])

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
