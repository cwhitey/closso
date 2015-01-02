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
      {:status "ok"})

(defroutes home-routes
  (GET "/" [] (base))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
