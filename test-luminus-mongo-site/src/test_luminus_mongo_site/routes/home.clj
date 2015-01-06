(ns test-luminus-mongo-site.routes.home
            (:require [test-luminus-mongo-site.layout :as layout]
                      [test-luminus-mongo-site.util :as util]
                      [test-luminus-mongo-site.logging :as log]
                      [test-luminus-mongo-site.templates.base :as base]
                      [test-luminus-mongo-site.rep-calculator :refer [rep-calculator]]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]
                      [taoensso.timbre :as timbre]))



(defn base []
  (layout/render base/base {:title "Loading..."}))

(defn save-document [doc]
      (timbre/info doc)
      {:status 200})

(defroutes home-routes
  (GET "/" [] (base))
  (POST "/save" {:keys [body-params]}
        (edn (save-document body-params)))
  (POST "/tools/rep-calc" {{data :transit} :body-params}
        (timbre/info data)
        (rep-calculator (:reps data)
                        (:weight data)))
  (POST "/programs/531" {{data :transit} :body-params}
        (timbre/info data)
        ;insert 531 program calculation stuff here
        ))
