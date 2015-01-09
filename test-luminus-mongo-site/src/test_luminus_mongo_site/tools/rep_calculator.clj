(ns test-luminus-mongo-site.tools.rep-calculator
  (:require [taoensso.timbre :as timbre]))

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

(def avg #(/ (reduce + %) (count %)))
(def perc #(/ % 100))

(defn get-one-rm [reps weight]
  (/ weight (- 1.0278 (* 0.0278 reps))))

(defn get-rep-vals
  [one-rm]
  (map (fn [[k v]] [k (Math/round (* one-rm (perc (avg v))))]) rep-data))

(defn rep-calculator [reps weight]
  (if (< 12 reps)
    {:status 400
     :body "Reps must be between 0 and 10."}
    {:status 200
     :body (get-rep-vals (get-one-rm reps weight))}))
