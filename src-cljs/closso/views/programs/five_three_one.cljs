(ns closso.views.programs.five-three-one
  (:require [closso.views.util :as util]
            [closso.session :as session]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]))

(session/global-put! :program-531 nil)

(defn program-handler [response]
  (.log js/console "Resp: " (pr-str response))
  (session/global-put! :program-531 response))

(defn program-error-handler [x]
  (.log js/console (str "five-three-one: something bad happened: " x)))

(def form (util/form [[:legend "Squat"]
                      [:div.col-md-6 (util/text-input :squat.reps "Reps" :numeric "1 - 12")]
                      [:div.col-md-6 (util/text-input :squat.weight "Weight" :numeric)]
                      [:legend "Deadlift"]
                      [:div.col-md-6 (util/text-input :deadlift.reps "Reps" :numeric "1 - 12")]
                      [:div.col-md-6 (util/text-input :deadlift.weight "Weight" :numeric)]
                      [:legend "Bench Press"]
                      [:div.col-md-6 (util/text-input :bench-press.reps "Reps" :numeric "1 - 12")]
                      [:div.col-md-6 (util/text-input :bench-press.weight "Weight" :numeric)]
                      [:legend "Overhead Press"]
                      [:div.col-md-6 (util/text-input :overhead-press.reps "Reps" :numeric "1 - 12")]
                      [:div.col-md-6 (util/text-input :overhead-press.weight "Weight" :numeric)]]))

(defn get-sets-from-week [week]
  (map (fn [[weight reps]] (str weight " x " reps)) week))

(defn get-training-week-from-data [data week]
  (map (fn [[k v]] (let [gen-week (get v (- week 1))
                         sets (get-sets-from-week gen-week)
                         training-week (into [(name k)] sets)]
                     (.log js/console (str "Week" week ":" (pr-str
                                                            training-week)))
                     training-week)) data))

(defn program-tables []
  (let [data (session/global-state :program-531)]
    [:div
     [:h2 "Week 1"]
     [:div [util/table ["Exercises" "Set 1" "Set 2" "Set 3"]
            (get-training-week-from-data data 1)
            {:class "table table-striped"}]]
     [:h2 "Week 2"]
     [:div [util/table ["Exercises" "Set 1" "Set 2" "Set 3"]
            (get-training-week-from-data data 2)
            {:class "table table-striped"}]]
     [:h2 "Week 3"]
     [:div [util/table ["Exercises" "Set 1" "Set 2" "Set 3"]
            (get-training-week-from-data data 3)
            {:class "table table-striped"}]]
     [:h2 "Week 4 (Deload)"]
     [:div [util/table ["Exercises" "Set 1" "Set 2" "Set 3"]
            (get-training-week-from-data data 4)
            {:class "table table-striped"}]]]
    ))

(defn get-program [info]
  (util/ajax-post info
                  "/programs/five-three-one"
                  #_(.log js/console "hi") program-handler
                  program-error-handler))

(defn five-three-one []
  (let [info (atom {})]
    (fn []
      [:div
       [:h1 "5/3/1"]
       [:p "Enter your current lifting stats to generate your next 5/3/1 4-week cycle."]
       [:div.well
        [bind-fields form info
         (fn [_ _ _] (session/global-put! :program-531 nil) nil)]
        [:button {:class "btn btn-default"
                  :type "submit"
                  :onClick #(get-program info)}
         "Calculate"]]
       (when (session/global-state :program-531)
         [program-tables])])))
