(ns closso.expectations.handler
  (:use expectations
        ring.mock.request
        closso.handler))

;; test statuses
(let [response (app (request :get "/"))]
  (expect 200 (:status response)))

(let [response (app (request :get "/invalid"))]
  (expect 404 (:status response)))
