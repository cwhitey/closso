(ns closso.expectations.my-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest)])
  (:require #_[expectations :refer-macros [expect]]
            [cemerick.cljs.test]
            ))

(deftest please-work
  (is (= 1 1)))

#_(deftest please-dont-work
  (is (= 1 2)))

#_(expect nil? nil)
#_(expect 1 1)
