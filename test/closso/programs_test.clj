(ns closso.programs-test
  (:require [closso.programs.five-three-one :as fto])
  (:use expectations))


(def fto-data1
  {:squat          {:reps 1, :weight 100}
   :deadlift       {:reps 2, :weight 200}
   :bench-press    {:reps 3, :weight 300}
   :overhead-press {:reps 4, :weight 400}})

(def fto-data1-result
  {:bench-press    [[[238 5] [254 5] [270 5]]
                    [[254 3] [270 3] [286 3]]
                    [[238 5] [270 3] [302 1]]
                    [[191 5] [206 5] [222 5]]],
   :squat          [[[75 5] [80 5] [85 5]]
                    [[80 3] [85 3] [90 3]]
                    [[75 5] [85 3] [95 1]]
                    [[60 5] [65 5] [70 5]]],
   :deadlift       [[[154 5] [165 5] [175 5]]
                    [[165 3] [175 3] [185 3]]
                    [[154 5] [175 3] [195 1]]
                    [[123 5] [134 5] [144 5]]],
   :overhead-press [[[327 5] [349 5] [371 5]]
                    [[349 3] [371 3] [393 3]]
                    [[327 5] [371 3] [415 1]]
                    [[262 5] [284 5] [305 5]]]})

;; five three one
(expect fto-data1-result
        (fto/generate-five-three-one fto-data1))
