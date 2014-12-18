(ns test-luminus-mongo-site.db.core
    (:require [monger.core :as mg]
              [monger.collection :as mc]
              [monger.operators :refer :all]
              [taoensso.timbre :as timbre]
              [test-luminus-mongo-site.logging :as log]))

;; Tries to get the Mongo URI from the environment variable
;; MONGOHQ_URL, otherwise default it to localhost
(defonce db (let [uri (get (System/getenv)
                           "MONGOHQ_URL"
                           "mongodb://127.0.0.1/test-luminus-mongo-site")
                  connection (mg/connect-via-uri uri)
                  {:keys [conn db]} connection]
              (timbre/info (str "Mongo connection: " connection))
              db))

(defn create-user [user]
  (mc/insert db "users" user))

(defn update-user [id first-name last-name email]
  (mc/update db "users" {:id id}
             {$set {:first_name first-name
                    :last_name last-name
                    :email email}}))

(defn get-user [id]
  (mc/find-one-as-map db "users" {:id id}))
