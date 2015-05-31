(ns closso.system
  (:require [com.stuartsierra.component :as component]
            [closso.db.core :as db :refer [new-db]]
            [closso.web :as web :refer [new-web handler]]))

(defn get-system []
  (component/system-map
   :db (db/new-db)
   :web (component/using (web/new-web {:app {:handler web/handler} :port 3000})
                         [:db])))

(def system (get-system))

(defn -main [& args]
  (alter-var-root #'system component/start))
