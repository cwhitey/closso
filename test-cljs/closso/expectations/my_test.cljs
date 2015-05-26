(ns closso.expectations.my-test
  (:require [expectations :refer-macros [expect]]
            [cemerick.cljs.test] ; Necessary for `lein cljsbuild test` calls
            ))

(expect nil? nil)
(expect 1 1)
