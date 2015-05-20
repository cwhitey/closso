(ns closso.views.programs.five-three-one
  (:require [closso.views.util :as util]
            [closso.session :as session]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]))

(session/global-put! :program-531 nil)

(def capitalize #(clojure.string/capitalize %))

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

(defn get-sets-from-week
  "Stringify sets"
  [week]
  (map (fn [[weight reps]] (str weight " x " reps)) week))

(defn get-training-week-from-data
  "Pick out a single weeks worth of training from each key"
  [data week]
  (let-fn [format-week (let [gen-week (get v (- week 1))
                             sets (get-sets-from-week gen-week)
                             training-week (into [(capitalize (name k))] sets)]
                         (.log js/console (str "Week" week ": " (pr-str training-week)))
                         training-week)]
          (map format-week data)))

(defn generate-tables
  "Generate tables for the program, using the response from backend"
  []
  (let [data (session/global-state :program-531)]
    (into [:div] (for [c (range 1 5)]
                   [:div
                    [:h2 (str "Week " c (when (= c 4) " (deload)"))]
                    [util/table ["Workouts" "Set 1" "Set 2" "Set 3"]
                     (get-training-week-from-data data c)
                     {:class "table table-striped"}]]))))

(defn post-handler [response]
  (.log js/console "Resp: " (pr-str response))
  (session/global-put! :program-531 response))

(defn post-error-handler [x]
  (.log js/console (str "five-three-one: something bad happened: " x)))

(defn get-program [info]
  (util/ajax-post info
                  "/programs/five-three-one"
                  post-handler
                  post-error-handler))

(defn calculate-button [info]
  [:button {:class "btn btn-default"
            :type "submit"
            :onClick #(get-program info)}
   "Calculate"])

(defn calculate-next-button []
  [:button.btn.btn-default "Calculate next"])

(defn five-three-one []
  (let [info (atom {})]
    (fn []
      [:div
       [:h1 "5/3/1"]
       [:p "Enter your current lifting stats to generate your next 5/3/1 4-week cycle."]
       [:div.well
        [bind-fields form info
         (fn [_ _ _] (session/global-put! :program-531 nil) nil)]
        [calculate-button info]]
       (when (session/global-state :program-531)
         [generate-tables])])))
