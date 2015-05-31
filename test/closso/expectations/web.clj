(ns closso.expectations.web
  (:require [closso.web :as web]
            [expectations :refer :all]
            [peridot.core :as req]))

; basic endpoints
(let [response (-> (req/session web/handler)
                   (req/request "/")
                   :response)]
  (expect 200 (:status response)))

(let [response (-> (req/session web/handler)
                   (req/request "/invalid-web-url")
                   :response)]
  (expect 404 (:status response)))
