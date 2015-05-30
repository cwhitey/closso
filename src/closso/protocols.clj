(ns closso.protocols)

(defprotocol UserStorage
  "A protocol which should be implemented by storage services that need
  to support user functions"

  (create-user [user])
  (update-user [id first-name last-name email])
  (get-user [id]))
