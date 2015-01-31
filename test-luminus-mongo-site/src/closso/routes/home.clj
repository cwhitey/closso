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
  (POST "/programs/five-three-one" {{data :transit} :body-params}
        (timbre/info data)
        (five-three-one data)))
