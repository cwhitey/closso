(ns closso.expectations.core
  (:require-macros #_[expectations.cljs :as e])
  (:require #_[expectations]
            [cemerick.cljs.test :as t] ; Necessary for `lein cljsbuild test` calls
            [closso.expectations.my-test]))

(defn -main []
  (println "Running ClojureScript tests!")
  (t/run-all-tests))

(enable-console-print!)
(set! *main-cli-fn* -main)
