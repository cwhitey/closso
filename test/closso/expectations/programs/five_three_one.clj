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

; Multiple one rep maxes
(expect {:test 1}
        (fto/get-one-rms {:test {:reps 1, :weight 1}}))

(expect {:test  1
         :test2 2}
        (fto/get-one-rms {:test  {:reps 1, :weight 1}
                          :test2 {:reps 1, :weight 2}}))

(expect {:test  57
         :test2 398/5}
        (fto/get-one-rms {:test  {:reps 5,  :weight 50}
                          :test2 {:reps 12, :weight 60}}))

; Weeks
(expect [[10 1]]
        (fto/transform-week 100 [[0.1 1]]))

(expect [[10 1][10 1][10 1]]
        (fto/transform-week 100 [[0.1 1][0.1 1][0.1 1]]))

(expect [[10 10][10 11][10 12]]
        (fto/transform-week 100 [[0.1 10][0.1 11][0.1 12]]))

(expect [[75 1][80 3][85 5]]
        (fto/transform-week 100 [[0.75 1][0.8 3][0.85 5]]))

; Routines
(expect [[[10 1]]]
        (fto/transform-routine 100 [[[0.1 1]]]))

;; Multiple weeks in routine
(expect [[[10 1]]
         [[10 1]]
         [[10 1]]]
        (fto/transform-routine 100 [[[0.1 1]]
                                    [[0.1 1]]
                                    [[0.1 1]]]))

;; Uneven weeks
(expect [[[10 1][10 1][10 1]]
         [[10 1]]
         [[10 1]]]
        (fto/transform-routine 100 [[[0.1 1][0.1 1][0.1 1]]
                                    [[0.1 1]]
                                    [[0.1 1]]]))

(expect [[[10 1][10 1][10 1]]
         [[10 1][10 1][10 1]]
         [[10 1][10 1][10 1]]]
        (fto/transform-routine 100 [[[0.1 1][0.1 1][0.1 1]]
                                    [[0.1 1][0.1 1][0.1 1]]
                                    [[0.1 1][0.1 1][0.1 1]]]))

#_(expect fto-data1-result
        (fto/generate-five-three-one fto-data1))
