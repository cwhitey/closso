(ns closso.db.couch
  (:require [com.ashafa.clutch :as couch]
            [taoensso.timbre :as log]
            [closso.util :as util]
            [closso.protocols :as protocols]
            [com.stuartsierra.component :as component]))

(defrecord Db [instance config]

  component/Lifecycle
  (start [component]
    (log/info "Starting DB component")
    (assoc component :instance {})
    (assoc component :instance (couch/get-database (:name config))))

  (stop [component]
    (log/info "Stopping DB component")
    component)

  protocols/UserStorage
  (create-user [component user]
    (couch/put-document instance {:users user}))

  (update-user [component id first-name last-name email]
    true)

  (get-user [component id]
    {:name "John"}))

(defn new-db [config]
  (Db. nil config))
