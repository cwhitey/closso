(ns closso.expectations.tools.rep-calculator
 (:require-macros [cemerick.cljs.test
                   :refer (is deftest with-test testing)])
 (:require [cemerick.cljs.test]
           [closso.views.tools.rep-calculator :refer [rep-data-format]]))

(deftest blank-data
  (is (= [[]] (rep-data-format [[]]))))

(deftest small-data
  (is (= [[1 2]] (rep-data-format [[1 2]]))))

(deftest nil-data
  (is (= [[1 ""]] (rep-data-format nil 1))))

(def ordered [[1 2]
              [2 3]
              [3 4]
              [4 5]])

(def unordered [[3 4]
                [1 2]
                [4 5]
                [2 3]])

(deftest unordered-data
  (is (= ordered (rep-data-format unordered (count unordered)))))

; TODO figure out how to mock out the functionality of clicking the button
; send back a response to the ajax post
