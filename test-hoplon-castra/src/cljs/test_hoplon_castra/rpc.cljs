(ns test-hoplon-castra.rpc
  (:require-macros
    [tailrecursion.javelin :refer [defc defc=]])
  (:require
   [tailrecursion.javelin]
   [tailrecursion.castra :refer [mkremote]]))

(defc state {:random nil})
(defc error nil)
(defc loading [])

(defc= random-number (get state :random))

(def get-state
  (mkremote 'test-hoplon-castra.api/get-state state error loading))

(defn init []
  (get-state)
  (js/setInterval get-state 1000))
