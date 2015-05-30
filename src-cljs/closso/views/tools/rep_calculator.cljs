(ns closso.views.tools.rep-calculator
  (:require [closso.views.util :as util]
            [closso.session :as session]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]))

(session/global-put! :rep-calc nil)

(def form (util/form [(util/text-input :reps "Reps" :numeric "1 - 12")
                      (util/text-input :weight "Weight" :numeric)]))

(defn rep-handler [response]
  (.log js/console "Resp: " (pr-str response))
  (session/global-put! :rep-calc response))

(defn rep-error-handler [x]
  (.log js/console (str "rep-calc: something bad happened: " x)))

(defn rep-table [info]
  [util/table ["Reps" "Weight"]
   info
   {:class "table table-striped"}])

(defn rep-data-format
  "Format rep data passed in. If data is invalid, return blank data."
  ;TODO use prismatic/schema
  ([data] (rep-data-format data 1))
  ([data max-reps]
   (sort-by first (if data
                    data
                    (map (fn [x] [x ""]) (range 1 (inc max-reps)))))))

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
       [:div.col-md-6 [rep-table (rep-data-format (session/global-state :rep-calc) 12)]]])))
