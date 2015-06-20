(ns closso.expectations.db.couch
  (:require [expectations :refer :all]
            [com.stuartsierra.component :as component]
            [com.ashafa.clutch :as couch]
            [closso.db.couch :refer [new-db]]
            [closso.system :refer :all]))

(def db-instance "couch-test")

(expect map? (couch/get-database db-instance))

(expect map? (couch/database-info db-instance))

(expect (:ok (couch/delete-database db-instance)))
