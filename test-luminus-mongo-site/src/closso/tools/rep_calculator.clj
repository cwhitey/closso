(ns closso.tools.rep-calculator
  (:require [closso.util :as util]
            [taoensso.timbre :as timbre]))

;info drawn from http://www.exrx.net/Calculators/OneRepMax.html

(def rep-data {1 [100]
               2 [95 95 92]
               3 [90 93 90]
               4 [88 90 87]
               5 [86 87 85]
               6 [83 85 82]
               7 [80 83]
               8 [78 80 75]
               9 [76 77]
               10 [75 75 70]
               11 [72]
               12 [70 67 65]
               15 [65 60]})

(defn get-one-rm [reps weight]
  (/ weight (- 1.0278 (* 0.0278 reps))))

(defn get-rep-vals
  [one-rm]
  (map (fn [[k v]] [k (Math/round (* one-rm (util/perc (util/avg v))))]) rep-data))

(defn rep-calculator [reps weight]
  (if (< 12 reps)
    {:status 400
     :body "Reps can only be 1-12."}
    {:status 200
     :body (get-rep-vals (get-one-rm reps weight))}))
