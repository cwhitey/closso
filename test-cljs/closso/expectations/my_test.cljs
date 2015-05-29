(ns closso.expectations.my-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require #_[expectations :refer-macros [expect]]
            [cemerick.cljs.test] ; Necessary for `lein cljsbuild test` calls
            ))

(deftest please-work
  (is (= 1 1)))

(deftest please-dont-work
  (is (= 1 2)))

#_(expect nil? nil)
#_(expect 1 1)
