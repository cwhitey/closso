(ns test-luminus-mongo-site.views.common
  (:require [test-luminus-mongo-site.session :as session :refer [global-state]]))

(defn active? [state val]
  (if (= state val) "active" ""))

;; Navigation Bar
(defn header []
  [:div.navbar.navbar-default.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [:a.navbar-brand {:href "#/"} "Closso"]]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li {:class (active? (global-state :nav) "home")}
       [:a {:href "#/"} "Home"]]
      [:li {:class (active? (global-state :nav) "about")}
       [:a {:href "#/about"} "About"]]]]]])
