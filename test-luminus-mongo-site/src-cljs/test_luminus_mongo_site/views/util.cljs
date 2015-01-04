(ns test-luminus-mongo-site.views.util
  (:require [reagent.core :as reagent]))

(defn apply-multiple-classes [existing addon-list]
  (str existing " " (when (not-empty addon-list)
                      (apply str (interpose " " (map name addon-list))))))

(defn input-row [label body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-10 body]])

(defn text-input
  [id label type]
  [:div.form-group
   [:label.control-label.col-md-2 {:for id} label]
   [:div.col-md-10
    [:input.form-control {:field type :id id}]]])

(defn text-input-group
  [inputs & name]
  [:div
   [:form.form-horizontal
    [:fieldset
     (when (not-empty name) [:div.page-heading [:h2 (first name)]])
     (into [:div]
           (for [[id label type] inputs]
             (text-input id label type)))]]])

(defn selection-list [label id & items]
  (input-row label
             [:div.btn-group {:field :multi-select :id id}
              (for [[k label] items]
                [:button.btn.btn-default {:key k} label])]))

(defn table [column-names info & class]
  [:div [:table {:class (apply-multiple-classes "table" class)}
         [:thead
          (into [:tr] (for [data column-names]
                        [:th data]))]
         (into [:tbody] (for [row info]
                          (into [:tr] (for [data row]
                                        [:td data]))))]])
