(ns closso.tools.rep-calculator
  (:require [closso.util :as util]
            [taoensso.timbre :as timbre]
            [slingshot.slingshot :refer [throw+]]))

;info drawn from http://www.exrx.net/Calculators/OneRepMax.html

(def rep-data {1  [100]
               2  [95 95 92]
               3  [90 93 90]
               4  [88 90 87]
               5  [86 87 85]
               6  [83 85 82]
               7  [80 83]
               8  [78 80 75]
               9  [76 77]
               10 [75 75 70]
               11 [72]
               12 [70 67 65]})

(defn get-one-rm [reps weight]
  (if (< 12 reps)
    (throw+ {:type :reps-too-high})
    (let [perc (util/perc (util/avg (rep-data reps)))
          one-rm (* weight (inc (- 1 perc)))]
      one-rm)))

(defn get-rep-vals
  [one-rm]
  (timbre/debug (str "get-rep-vals one-rm param: " one-rm))
  (let [get-avg (fn [vals] (util/perc (util/avg vals)))]
    (map (fn [[reps avg-vals]] [reps (Math/round (double (* one-rm (get-avg avg-vals))))])
         rep-data)))

(defn rep-calculator [reps weight]
  (get-rep-vals (get-one-rm reps weight)))
