(ns closso.programs.five-three-one
  (:require [closso.tools.rep-calculator :refer [get-one-rm]]
            [flatland.useful.map :refer [map-vals]]
            [taoensso.timbre :as timbre]))


;;;;; Routine outline
;; Wave A. Warmup, 75% x 5, 80% x 5, 85% x 5
;; Wave B. Warmup, 80% x 3, 85% x 3, 90% x 3
;; Wave C. Warmup, 75% x 5, 85% x 3, 95% x 1
;; Wave D. Deload: 60% x 5, 65% x 5, 70% x 5

;; Format:
;; [[<wave1> [<set1> perc reps] [<set2> perc reps] [<set3> perc reps]]
;;  [<wave2> ...]]

(def fto-routine
  [[[0.75 5][0.8  5][0.85 5]]
   [[0.8  3][0.85 3][0.9  3]]
   [[0.75 5][0.85 3][0.95 1]]
   [[0.6  5][0.65 5][0.7  5]]])

(defn get-one-rms [lifts]
  (map-vals lifts #(get-one-rm (:reps %) (:weight %))))

(defn transform-week
  "Take a week in routine format and return the calculated weight and rep scheme"
  [one-rm week]
  (vec (map (fn [[perc reps]] [(Math/round (* one-rm perc)) reps]) week)))

(defn transform-routine
  "Take a routine and return the entire weight and rep scheme"
  [one-rm routine]
  (vec (map #(transform-week one-rm %) routine)))

(defn generate
  "Generate routine weight and rep scheme"
  [one-rms routine]
  (map-vals one-rms #(transform-routine % routine)))

(defn generate-five-three-one [lifts]
  (let [rms (get-one-rms lifts)
        complete (generate rms fto-routine)]
    (timbre/info rms)
    (timbre/info complete)
    complete))

(defn five-three-one [lifts]
  {:status 200
   :body (generate-five-three-one lifts)})
