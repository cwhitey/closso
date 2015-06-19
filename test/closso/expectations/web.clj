(ns closso.expectations.web
  (:require [closso.web :as web]
            [closso.system :refer :all]
            [expectations :refer :all]
            [peridot.core :as req]
            [com.stuartsierra.component :refer [start-system stop-system]]
            #_[clj-http.client :as client]))

;TODO mock out db


(defn test-app []
  (-> (get-system)
      (start-system)))

(def ^:dynamic *the-system* (test-app))

;TODO hit actual endpoints
#_(prn (client/get "http://www.google.com" #_"http://localhost:3000/"))



; basic endpoints
(let [response (-> (req/session (web/handler nil))
                   (req/request "/")
                   :response)]
  (expect 200 (:status response)))

(let [response (-> (req/session (web/handler nil))
                   (req/request "/invalid-web-url")
                   :response)]
  (expect 404 (:status response)))

(stop-system @#'*the-system*)
