(ns test-luminus-mongo-site.templates.base
  (:use [hiccup.page :only (html5 include-css include-js)]))

(defn base [contents]
  (html5
   [:head
    [:meta
     {:content "text/html; charset=UTF-8", :http-equiv "Content-Type"}]
    [:title (:title contents)]]
   [:body
    [:div#navbar]
    [:div.container
     [:div.row-fluid
      [:div#app
       [:p "Loading..."]]]

     [:div.row-fluid
      (:body contents)]]


    ; scripts and styles
    ;; bootstrap themes
    ;(include-css "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css")
    ;(include-css "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css")
    ;(include-css "//maxcdn.bootstrapcdn.com/bootswatch/3.3.1/cerulean/bootstrap.min.css")
    (include-css "//maxcdn.bootstrapcdn.com/bootswatch/3.3.1/flatly/bootstrap.min.css")
    ;(include-css "//maxcdn.bootstrapcdn.com/bootswatch/3.3.1/simplex/bootstrap.min.css")
    ;(include-css "//maxcdn.bootstrapcdn.com/bootswatch/3.3.1/superhero/bootstrap.min.css")
    ;(include-css "//maxcdn.bootstrapcdn.com/bootswatch/3.3.1/yeti/bootstrap.min.css")
    ;(include-css "//maxcdn.bootstrapcdn.com/bootswatch/3.3.1/sandstone/bootstrap.min.css")

    (include-css "css/screen.css")

    ;; font awesome
    ;(include-css "//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css")

    (include-js "//code.jquery.com/jquery-2.0.3.min.js")
    (include-js "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js")

    (if (:dev contents)
      (for [x  [(include-js "//cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react.js")
                (include-js "js/out/goog/base.js")
                (include-js "js/app.js")
                [:script {:type "text/javascript"}
                         "goog.require(\"test_luminus_mongo_site.app\");"]]]
        x)
      (for [x [(include-js "//cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react.min.js")
               (include-js "js/app.js")]]
        x))]))
