(ns test-luminus-mongo-site.routes
  (:require [test-luminus-mongo-site.views.pages :refer [pages]]
            [test-luminus-mongo-site.session :as session :refer [change-page!]]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as EventType])
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History))

;; ----------
;; History
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))
;; need to run this after routes have been defined

;; ----------
;; Routes

(defn app-routes []
  ;(secretary/set-config! :prefix "#")
  (defroute (:route (:home pages)) []
    (change-page! (:home pages)))

  (let [tools (:tools pages)]
    (defroute (:route (:bmi tools)) []
      (change-page! (:bmi tools)))

    (defroute (:route (:rep-calculator tools)) []
      (change-page! (:rep-calculator tools))))

  (defroute (:route (:about pages)) []
    (change-page! (:about pages)))

  (defroute (:route (:contact pages)) []
    (change-page! (:contact pages)))

  (defroute (:route (:not-found pages)) []
    (change-page! (:not-found pages)))

  (hook-browser-navigation!))
