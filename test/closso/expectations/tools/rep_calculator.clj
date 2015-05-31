(ns closso.expectations.tools.rep-calculator
  (:require [closso.tools.rep-calculator :as rep]
            [closso.web :as web]
            [peridot.core :as req]
            [expectations :refer :all]
            [cheshire.core :refer [generate-string] :as json]))


; Test 1RM generation
(expect 1 (rep/get-one-rm 1 1))
(expect 2 (rep/get-one-rm 1 2))
(expect clojure.lang.Ratio (rep/get-one-rm 2 5))
(expect 171/2 (rep/get-one-rm 5 75))

;; Error when more than 12 reps
(expect Exception (rep/get-one-rm 13 1))

; Test web interface
(let [response (-> (req/session web/handler)
                   (req/content-type "application/json")
                   (req/request "/tools/rep-calc"
                                :request-method :post
                                :body (json/generate-string {:transit {:reps 5 :weight 10}}))
                   :response)]
  (expect 200 (:status response)))

(let [response (-> (req/session web/handler)
                   (req/content-type "application/json")
                   (req/request "/tools/rep-calc"
                                :request-method :post
                                :body (json/generate-string {:transit {:reps 13 :weight 10}}))
                   :response)]
  (expect 400 (:status response))
  (expect "Reps can only be 1-12." (:body response)))
