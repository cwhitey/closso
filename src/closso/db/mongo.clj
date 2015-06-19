(ns closso.db.mongo
    (:require [monger.core :as mg]
              [monger.collection :as mc]
              [monger.operators :refer :all]
              [taoensso.timbre :as timbre]
              [closso.logging :as log]
              [closso.util :as util]
              [closso.protocols :as protocols]
              [com.stuartsierra.component :as component]))


(defrecord Db [instance config]

  component/Lifecycle
  (start [component]
    ;; Tries to get the Mongo URI from the environment variable
    ;; MONGOHQ_URL, otherwise default it to localhost
    (let [uri (get (System/getenv) "MONGOHQ_URL" "mongodb://127.0.0.1/closso")
        {:keys [conn db]} (mg/connect-via-uri uri)]
      (assoc component :instance db)))

  (stop [component]
    component)

  protocols/UserStorage
  (create-user [component user]
    (mc/insert instance "users" user))

  (update-user [component id first-name last-name email]
    (mc/update instance "users" {:id id}
               {$set {:first_name first-name
                      :last_name last-name
                      :email email}}))

  (get-user [component id]
    (mc/find-one-as-map instance "users" {:id id})))

(defn new-db [config]
  (Db. nil config))
