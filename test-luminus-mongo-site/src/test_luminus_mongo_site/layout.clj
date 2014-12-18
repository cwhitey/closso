(ns test-luminus-mongo-site.layout
  (:require [selmer.parser :as parser]
            [clojure.string :as s]
            [ring.util.response :refer [content-type response]]
            [compojure.response :refer [Renderable]]
            [environ.core :refer [env]]
            [noir.session :as session]))

(def template-path "templates/")

(defn get-context [request]
  (if-let [context (:servlet-context request)]
             (try
               (.getContextPath context)
               (catch IllegalArgumentException _ context))))

(deftype
  RenderableTemplate
  [template params]
  Renderable
  (render
    [this request]
    (content-type
      (->>
        (conj
          params
          {(keyword
            (s/replace template #".html" "-selected")) "active"
           :dev             (env :dev)
           :servlet-context (get-context request)
           :user-id         (session/get :user-id)})
        (parser/render-file (str template-path template))
        response)
      "text/html; charset=utf-8")))

(defn render
  "construct a response for supplied template
   file and params."
  [template & [params]]
  (RenderableTemplate. template params))
