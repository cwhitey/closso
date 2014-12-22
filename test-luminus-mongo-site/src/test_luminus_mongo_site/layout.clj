(ns test-luminus-mongo-site.layout
  (:require #_[selmer.parser :as parser]
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

;; We want to return a RenderableTemplate object here so that Compojure can pass us the request
(deftype
    RenderableTemplate
    [template-fn params]
  Renderable
  (render
    [this request]
    (content-type
     (->>
      (conj
       params
       {:dev             (env :dev)
        :servlet-context (get-context request)
        :user-id         (session/get :user-id)})
      (template-fn)
      response)
     "text/html; charset=utf-8")))

(defn render
  "construct a response for supplied template
  file and params."
  [template-fn & [params]]
  (RenderableTemplate. template-fn params))


#_(deftype
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

#_(defn render
  "construct a response for supplied template
   file and params."
  [template & [params]]
  (RenderableTemplate. template params))
