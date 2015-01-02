(ns test-luminus-mongo-site.routes.home
            (:require [test-luminus-mongo-site.layout :as layout]
                      [test-luminus-mongo-site.util :as util]
                      [test-luminus-mongo-site.logging :as log]
                      [test-luminus-mongo-site.templates.base :as base]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]
                      [taoensso.timbre :as timbre]))



(defn base []
  (layout/render base/base {:title "Welcome to Closso"}))

(defn save-document [doc]
      (timbre/info doc)
      {:status 200})

(defn get-one-rm [reps weight]
  (/ weight (- 1.0278 (* 0.0278 reps))))

(defn one-rm-calculator [reps weight]
  (timbre/info "Reps: " reps ". Weight: " weight)
  (if (< 10 reps)
    {:status 400
     :body "Reps must be between 0 and 10."}
    {:status 200
     :body (get-one-rm reps weight)}))

(defroutes home-routes
  (GET "/" [] (base))
  (POST "/save" {:keys [body-params]}
        (edn (save-document body-params)))
  (POST "/one-rm" {:keys [body-params]}
        (timbre/info body-params)
        (one-rm-calculator (:reps (:transit body-params))
                           (:weight (:transit body-params)))))
