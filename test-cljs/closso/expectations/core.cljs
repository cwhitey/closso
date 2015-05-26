(ns closso.expectations.core
  (:require-macros [expectations.cljs :as e])
  (:require [expectations]
            [cemerick.cljs.test] ; Necessary for `lein cljsbuild test` calls
            [closso.expectations.my-test]))

(defn -main []
  (println "Running ClojureScript tests!")
  (e/run-all-tests))

(enable-console-print!)
(set! *main-cli-fn* -main)
