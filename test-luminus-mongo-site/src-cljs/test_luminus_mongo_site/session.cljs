(ns test-luminus-mongo-site.session
  (:require [reagent.core :as reagent :refer [atom]]))

;; ----------
;; State
(defonce app-state (atom {}))

;; ----------
;; Helper Functions
(defn global-state [k & [default]]
  (get @app-state k default))

(defn global-put! [k v]
  (swap! app-state assoc k v))

(defn local-put! [a k v]
  (swap! a assoc k v))

(defn change-page! [page]
  (global-put! :current-page page))
