(ns closso.protocols)

(defprotocol UserStorage
  "A protocol which should be implemented by storage services that need
  to support user functions"

  (create-user [component user])
  (update-user [component id first-name last-name email])
  (get-user [component id]))
