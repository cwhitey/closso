(ns closso.expectations.db.user-tests
  (:require [expectations :refer :all]
            [com.stuartsierra.component :as component]
            [com.ashafa.clutch :as couch]
            [closso.db.couch :refer :all]
            [closso.protocols :refer :all]
            [closso.system :refer :all]))

(def test-conf {:name "user-tests"})

(def db (component/start (new-db test-conf)))
(def db-instance (:instance db))

(create-user db {:name "Callum"})


(expect {:ok true} (couch/delete-database (:db_name db-instance)))
(component/stop db)
