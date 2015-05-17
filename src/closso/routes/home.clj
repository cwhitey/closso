(ns closso.routes.home
  (:require [closso.layout :as layout]
            [closso.util :as util]
            [closso.logging :as log]
            [closso.templates.base :as base]
            [closso.tools.rep-calculator :refer [rep-calculator]]
            [closso.programs.five-three-one :refer [five-three-one]]
            [compojure.core :refer :all]
            [noir.response :refer [edn]]
            [clojure.pprint :refer [pprint]]
            [taoensso.timbre :as timbre]
            [slingshot.slingshot :refer [try+]]
            [ring.util.response :refer [response]]))

(defn base []
  (layout/render base/base {:title "Loading..."}))


(def reps-too-high-error {:status 400
                          :body "Reps can only be 1-12."})

(defroutes home-routes
  (GET "/" [] (base))

  (POST "/tools/rep-calc" {{data :transit} :body-params}
        (timbre/info data)
        (try+
         (response (rep-calculator (:reps data)
                                   (:weight data)))
         (catch [:type :reps-too-high] _ reps-too-high-error)))

  (POST "/programs/five-three-one" {{data :transit} :body-params}
        (timbre/info data)
        (response (five-three-one data))))
