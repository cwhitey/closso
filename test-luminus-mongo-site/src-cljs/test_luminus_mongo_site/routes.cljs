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
    (change-page! (pages :home) "Welcome to Closso"))

  (defroute "/tools/bmi" []
    (change-page! (:bmi (pages :tools)) "BMI"))

  (defroute "/tools/rep-calculator" []
    (change-page! (:rep-calculator (pages :tools)) "Rep Calculator"))

  (defroute "/programs/531" []
    (change-page! (:five-three-one (pages :programs)) "5/3/1"))

  (defroute "/about" []
    (change-page! (pages :about) "About"))

  (defroute "/contact" []
    (change-page! (pages :contact) "Contact"))

  ;this is probably bad
  (defroute "*" []
    (change-page! (pages :not-found) "404 Not Found"))

  (hook-browser-navigation!))
