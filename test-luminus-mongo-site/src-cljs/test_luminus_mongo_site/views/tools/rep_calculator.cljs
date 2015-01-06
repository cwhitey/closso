(ns test-luminus-mongo-site.views.tools.rep-calculator
  (:require [test-luminus-mongo-site.views.util :as util]
            [test-luminus-mongo-site.session :as session]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]))

(session/global-put! :rep-calc nil)

#_(defn save-doc
  "use Ajax to hit the /save endpoint on the backend"
  [doc]
  (fn []
    (.log js/console "Doc: " @doc)
    (POST "/save"
          {:params {:doc @doc}
           :handler (fn [_] (session/global-put! :saved? true))})))

(defn rep-handler [response]
  (.log js/console "Resp: " response)
  (session/global-put! :rep-calc response))

(defn rep-error-handler [x]
  (.log js/console (str "rep-calc: something bad happened: " x)))

(def form (util/form [(util/text-input :reps "Reps" :numeric "1 - 12")
                      (util/text-input :weight "Weight" :numeric)]))

(defn rep-table [info]
  [util/table ["Reps" "Weight"]
   info
   {:class "table table-striped"}])

(defn rep-table-fill []
  (sort-by first (if (session/global-state :rep-calc)
                   (session/global-state :rep-calc)
                   (map (fn [x] [x ""]) (conj (range 1 13) 15)))))

(defn rep-calculator []
  (let [info (atom {})]
    (fn []
      [:div
       [:div.col-md-6
        [:h1 "Rep Calculator"]
        [:p "Enter the number of reps (between 1 and 12) and the weight you did in the form below. The amount of weight you should (probably) be able to lift will be propogated in the table."]
        [:div.well
         [bind-fields form info
          (fn [_ _ _] (session/global-put! :rep-calc nil) nil)]
         [:button.col-md-offset-2 {:class "btn btn-default"
                                   :type "submit"
                                   :onClick #(util/ajax-post info
                                                             "tools/rep-calc"
                                                             rep-handler
                                                             rep-error-handler)}
          "Calculate"]]]
       [:div.col-md-6 [rep-table (rep-table-fill)]]])))
