(ns test-luminus-mongo-site.routes.home
            (:require [test-luminus-mongo-site.layout :as layout]
                      [test-luminus-mongo-site.util :as util]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]
                      [taoensso.timbre :as timbre]
                      [test-luminus-mongo-site.logging :as log]))

(defn home-page []
      (layout/render
        "app.html" {} #_{:docs (util/md->html "/md/docs.md")}))

(defn save-document [doc]
      (timbre/info doc)
      {:status "ok"})

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
