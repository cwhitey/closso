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
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (change-page! (pages :home)))

  (defroute "/tools/bmi" []
    (change-page! (pages :bmi)))

  (defroute "/about" []
    (change-page! (pages :about)))

  (defroute "/contact" []
    (change-page! (pages :contact)))

  (defroute "*" []
    (change-page! (pages :not-found)))

  (hook-browser-navigation!))
