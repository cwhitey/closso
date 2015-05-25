(ns closso.expectations.my-test
  (:require [expectations :refer-macros [expect]]))

(expect nil? nil)
(expect 1 1)
