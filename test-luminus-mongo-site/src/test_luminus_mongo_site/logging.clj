(ns test-luminus-mongo-site.logging
  "Must be required in namespaces which display logging.
  Requiring this namespace pulls timbre's state which is defined
  in the init method below."
  (:require [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.rotor :as rotor]))

(defn init
  "initialisation code for logging."
  []
  (timbre/set-config!
    [:appenders :rotor]
    {:min-level :info,
     :enabled? true,
     :async? false,
     :max-message-per-msecs nil,
     :fn rotor/appender-fn})
  (timbre/set-config!
    [:shared-appender-config :rotor]
    {:path "test_luminus_mongo_site.log",
     :max-size (* 512 1024),
     :backlog 10}))
