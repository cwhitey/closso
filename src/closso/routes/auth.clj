(ns closso.routes.auth
  (:use compojure.core)
  (:require [closso.layout :as layout]
            [closso.protocols :refer :all]
            [noir.session :as session]
            [noir.response :as resp]
            [noir.validation :as vali]
            [noir.util.crypt :as crypt])
  (:import javax.xml.bind.DatatypeConverter))

(defn valid? [db id pass pass1]
  (vali/rule (vali/has-value? id)
             [:id "user ID is required"])
  (vali/rule (not (get-user db id))
             [:id "duplicated user ID"])
  (vali/rule (vali/min-length? pass 5)
             [:pass "password must be at least 5 characters"])
  (vali/rule (= pass pass1)
             [:pass1 "entered passwords do not match"])
  (not (vali/errors? :id :pass :pass1)))

(defn register [& [id]]
  (layout/render
    "registration.html"
    {:id id
     :id-error (vali/on-error :id first)
     :pass-error (vali/on-error :pass first)
     :pass1-error (vali/on-error :pass1 first)}))

(defn handle-registration [db id pass pass1]
  (if (valid? db id pass pass1)
    (try
      (do
        (create-user db {:id id :pass (crypt/encrypt pass)})
        (session/put! :user-id id)
        (resp/redirect "/"))
      (catch Exception ex
        (vali/rule false [:id (.getMessage ex)])
        (register)))
    (register id)))

(defn profile [db]
  (layout/render
    "profile.html"
    {:user (get-user db (session/get :user-id))}))

(defn update-profile [db {:keys [first-name last-name email]}]
  (update-user db (session/get :user-id) first-name last-name email)
  (profile db))

(defn parse-creds [auth]
  (when-let [basic-creds (second (re-matches #"\QBasic\E\s+(.*)" auth))]
    (->> (String. (DatatypeConverter/parseBase64Binary basic-creds) "UTF-8")
         (re-matches #"(.*):(.*)")
         rest)))

(defn handle-login [db auth]
  (when auth
    (let [[user pass] (parse-creds auth)
          account (get-user db user)]
      (if (and account (crypt/compare pass (:pass account)))
        (do (session/put! :user-id user)
            (resp/empty))
        (resp/status 401 (resp/empty))))))

;TODO investigate this
(defn logout []
  (session/clear!)
  (resp/redirect "/"))

(defn auth-routes [db-component]
  (routes
   (GET "/register" []
        (register))

   (POST "/register" [id pass pass1]
         (handle-registration db-component id pass pass1))

   (GET "/profile" [] (profile))

   (POST "/update-profile" {params :params} (update-profile db-component params))

   (GET "/login" req
        (handle-login db-component (get-in req [:headers "authorization"])))

   (GET "/logout" []
        (logout))))
