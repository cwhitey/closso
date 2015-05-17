(ns closso.expectations.handler
  (:require [closso.handler :as h]
            [expectations :refer :all]
            [peridot.core :as req]))

; basic endpoints
(let [response (-> (req/session h/app)
                   (req/request "/")
                   :response)]
  (expect 200 (:status response)))

(let [response (-> (req/session h/app)
                   (req/request "/invalid-web-url")
                   :response)]
  (expect 404 (:status response)))
