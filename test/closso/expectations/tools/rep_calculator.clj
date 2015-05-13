(ns closso.expectations.tools.rep-calculator
  (:require [closso.tools.rep-calculator :as rep]
            [expectations :refer :all]))

(expect 1 (rep/get-one-rm 1 1))
