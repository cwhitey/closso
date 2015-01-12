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
        "Programs" [:span.caret]]
       [:ul.dropdown-menu {:role :menu}
        [:li.dropdown-header "Powerlifting"]
        [:li {:class (active? (:five-three-one (:programs pages)))}
         [:a {:href "#/programs/531"} "5/3/1"]]
        [:li.disabled {:class (active? (:madcow (:programs pages)))}
         [:a {:href "#/programs/madcow"} "Madcow"]]
        [:li.divider]
        [:li.dropdown-header "Hybrid"]
        [:li.disabled {:class (active? (:phat (:programs pages)))}
         [:a {:href "#/programs/phat"} "PHAT"]]]]
      [:li.dropdown
       [:a.dropdown-toggle {:href "#/"
                            :data-toggle "dropdown"
                            :role "button"
                            :aria-expanded "false"}
        "Tools" [:span.caret]]
       [:ul.dropdown-menu {:role :menu}
        [:li {:class (active? (:bmi (:tools pages)))}
         [:a {:href "#/tools/bmi"} "BMI Calculator"]]
        [:li {:class (active? (:rep-calculator (:tools pages)))}
         [:a {:href "#/tools/rep-calculator"} "Rep Calculator"]]]]
      [:li {:class (active? (:about pages))}
       [:a {:href "#/about"} "About"]]
      [:li {:class (active? (:contact pages))}
       [:a {:href "#/contact"} "Contact"]]]
     [:ul.nav.navbar-nav.navbar-right
      [:li
       [:button.btn.btn-default.navbar-btn.disabled "Sign in"]]]]]])
