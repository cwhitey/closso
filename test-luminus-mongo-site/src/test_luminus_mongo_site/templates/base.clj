(ns test-luminus-mongo-site.templates.base
  (:use [hiccup.page :only (html5 include-css include-js)]))

(defn base [contents]
  (html5
   [:head
    [:meta
     {:content "text/html; charset=UTF-8", :http-equiv "Content-Type"}]
    [:title "Welcome to Closso"]]
   [:body
    [:div#navbar]
    [:div.container
     [:div.jumbotron
      [:h1 "Welcome to Closso"]
      [:p "Time to start building your site!"]
      [:p
       [:a.btn.btn-primary.btn-lg
        {:href "http://luminusweb.net"} "Learn more »"]]]
     [:div.row-fluid
      [:div#app.span9
       [:p "If you're seeing this message, that means you haven't yet compiled your ClojureScript!"]
       [:p "Please run "
        [:code "lein cljsbuild auto dev"]
        " to start the ClojureScript compiler and reload the page."]
       [:p "See "
        [:a {:href "http://www.luminusweb.net/docs/clojurescript.md"} "ClojureScript"]
        " documentation for further details."]]]]


                                        ;    <!-- scripts and styles -->
    (include-css "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css")
    (include-css "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css")
    (include-css "css/screen.css")
    (include-js "//code.jquery.com/jquery-2.0.3.min.js")
    (include-js "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js")

                                        ;if statement not working using hiccup
    (if (:dev contents)
      (for [x  [(include-js "//cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react.js")
                (include-js "js/app.js")
                (include-js "js/out/goog/base.js")
                [:script
                 {:type "text/javascript"}
                 "goog.require(\"test_luminus_mongo_site.app\");"]]]
        x)
      (for [x [(include-js "//cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react.min.js")
               (include-js "js/app.js")]]
        x))]))
