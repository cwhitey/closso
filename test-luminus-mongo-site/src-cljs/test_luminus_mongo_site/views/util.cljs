(ns test-luminus-mongo-site.views.util
  (:require [reagent.core :as reagent]))

(defn input-row [label body]
  [:div.row
   [:div.col-md-4 [:span label]]
   [:div.col-md-8 body]])

(defn text-input
  [id label type]
  (input-row
   [:label.control-label {:for id} label]
   [:input.form-control {:field type :id id}]))

(defn text-input-group
  [inputs & name]
  [:div
   (when (not-empty name) [:div.page-heading [:h2 (first name)]])
   (into [:div]
         (for [[id label type] inputs]
           (text-input id label type)))])

(defn selection-list [label id & items]
  (input-row label
             [:div.btn-group {:field :multi-select :id id}
              (for [[k label] items]
                [:button.btn.btn-default {:key k} label])]))

(defn table [column-names info & class]
  [:div [:table {:class (str "table " (when (not-empty class)
                                        (apply str (interpose " " (map name class)))))}
         [:thead
          (into [:tr] (for [data column-names]
                        [:th data]))]
         (into [:tbody] (for [row info]
                          (into [:tr] (for [data row]
                                        [:td data]))))]])
