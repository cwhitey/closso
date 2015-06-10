(ns closso.system
  (:require [com.stuartsierra.component :as component]
            #_[closso.db.core :as db :refer [new-db]]
            [closso.db.couch :as db :refer [new-db]]
            [closso.web :as web :refer [new-web handler]]
            [closso.util :as util]))

(def config (util/get-config "config.edn"))

(defn get-system []
  (component/system-map
   :db (db/new-db (:db config))
   :web (component/using (web/new-web (:web config))
                         [:db])))

(def system (get-system))

(defn -main [& args]
  (alter-var-root #'system component/start))
