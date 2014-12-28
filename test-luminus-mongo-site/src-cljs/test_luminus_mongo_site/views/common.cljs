(ns test-luminus-mongo-site.views.common
  (:require [test-luminus-mongo-site.session :as session :refer [global-state]]
            [test-luminus-mongo-site.views.pages :refer [pages]]))

(defn active? [page]
  (if (= page (global-state :current-page)) "active" ""))

;; Navigation Bar
(defn header []
  [:div.navbar.navbar-default.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [:a.navbar-brand {:href "#/"} "Closso"]]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li.dropdown
       [:a.dropdown-toggle {:href "#/"
                            :data-toggle "dropdown"
                            :role "button"
                            :aria-expanded "false"}
        "Tools" [:span.caret]]
       [:ul.dropdown-menu {:role :menu}
        [:li [:a {:href "#/"} "BMI"]]]]
      [:li {:class (active? (:about pages))}
       [:a {:href "#/about"} "About"]]
      [:li {:class (active? (:about pages))}
       [:a {:href "#/about"} "Contact"]]]]]])
