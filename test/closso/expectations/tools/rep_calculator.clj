(ns closso.expectations.tools.rep-calculator
  (:require [closso.tools.rep-calculator :as rep]
            [expectations :refer :all]))


;; Test 1RM generation
(expect 1.0 (rep/get-one-rm 1 1))
(expect 2.0 (rep/get-one-rm 1 2))
(expect 85.5 (rep/get-one-rm 5 75))

;;; Error when more than 12 reps
(expect Exception (rep/get-one-rm 13 1))
