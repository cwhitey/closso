(ns closso.session
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

(defn change-page!
  ([page]
   (change-page! page "Untitled"))
  ([page title]
   (global-put! :current-page page)
   (set! (.-title js/document) title)))
