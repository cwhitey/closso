(ns closso.expectations.programs.five-three-one
  (:require [closso.programs.five-three-one :as fto]
            [expectations :refer :all]))

(def fto-data1
  {:squat          {:reps 1, :weight 100}
   :deadlift       {:reps 2, :weight 200}
   :bench-press    {:reps 3, :weight 300}
   :overhead-press {:reps 4, :weight 400}})

(def fto-data1-result
  {:bench-press    [[[245 5] [262 5] [278 5]]
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

(expect {:test 1.0}
        (fto/get-one-rms {:test {:reps 1, :weight 1}}))

(expect {:test  1.0
         :test2 2.0}
        (fto/get-one-rms {:test  {:reps 1, :weight 1}
                          :test2 {:reps 1, :weight 2}}))

(expect {:test  57.0
         :test2 (float 79.6)}
        (fto/get-one-rms {:test  {:reps 5,  :weight 50}
                          :test2 {:reps 12, :weight 60}}))

#_(expect fto-data1-result
        (fto/generate-five-three-one fto-data1))
