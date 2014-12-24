(ns test-luminus-mongo-site.templates.notfound
  (:use [hiccup.page :only (html5 include-css include-js)]))

(defn notfound []
  [:div.jumbotron
      [:h1 "Page not found"]
      [:p "Whoops! Better luck next time."]])
