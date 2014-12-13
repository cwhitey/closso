(ns test-luminus-h2.test.handler
  (:use clojure.test
        ring.mock.request
        test-luminus-h2.handler))

(deftest test-app
  (testing "main route"
    (let [response (app (request :get "/"))]
      (is (= 200 (:status response)))))

  (testing "not-found route"
    (let [response (app (request :get "/invalid"))]
      (is (= 404 (:status response))))))
