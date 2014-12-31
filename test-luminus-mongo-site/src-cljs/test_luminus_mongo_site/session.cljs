(ns test-luminus-mongo-site.session
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]))

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

(defn change-page! [info]
  (global-put! :current-page (:page info))
  (set! (.-title js/document) (if (:title info) (:title info) "Untitled")))
