(ns closso.expectations.programs.five-three-one
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test testing)])
  (:require [cemerick.cljs.test]
            [closso.views.programs.five-three-one :refer [get-sets-from-week
                                                          get-week]]))

(deftest get-sets-empty
  (is (= nil (-> (get-sets-from-week [[]])
                 (first)))))

(deftest get-sets-simple
  (is (= "1 x 100" (-> (get-sets-from-week [[1 100]])
                       (first)))))

(deftest get-sets-more
  (is (= ["1 x 100"
          "2 x 100"
          "3 x 100"] (get-sets-from-week [[1 100][2 100][3 100]]))))
