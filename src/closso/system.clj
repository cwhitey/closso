(ns closso.system
  (:require [com.stuartsierra.component :as component]
            [closso.db.core :as db :refer [new-db]]
            [closso.handler :as web :refer [new-web app]]))

(defn get-system []
  (component/system-map
   :db (db/new-db)
   :web (component/using (web/new-web {:app web/app})
                         [:db])))

(def system (get-system))

(defn -main [& args]
  (alter-var-root #'system component/start))
