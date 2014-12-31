(ns test-luminus-mongo-site.views.common
  (:require [test-luminus-mongo-site.session :as session :refer [global-state]]
            [test-luminus-mongo-site.views.pages :refer [pages]]))

(defn active? [page]
  (if (= page (global-state :current-page)) "active" ""))

;; Navigation Bar
(defn header []
  (let [tools (:tools pages)]
    [:div.navbar.navbar-default.navbar-fixed-top
     [:div.container
      [:div.navbar-header
       [:a.navbar-brand {:href (:route (:home pages))} "Closso"]]
      [:div.navbar-collapse.collapse
       [:ul.nav.navbar-nav
        [:li.dropdown
         [:a.dropdown-toggle {:href (:route (:home pages))
                              :data-toggle "dropdown"
                              :role "button"
                              :aria-expanded "false"}
          "Tools" [:span.caret]]
         [:ul.dropdown-menu {:role :menu}
          [:li {:class (active? (:page (:bmi tools)))}
           [:a {:href (:route (:bmi tools))} "BMI"]]
          [:li {:class (active? (:page (:rep-calculator tools)))}
           [:a {:href (:route (:rep-calculator tools))} "Rep Calculator"]]]]
        [:li {:class (active? (:page (:about pages)))}
         [:a {:href (:route (:about pages))} "About"]]
        [:li {:class (active? (:page (:contact pages)))}
         [:a {:href (:route (:contact pages))} "Contact"]]]
       [:ul.nav.navbar-nav.navbar-right
        [:li
         [:button.btn.btn-default.navbar-btn "Sign in"]]]]]]))
