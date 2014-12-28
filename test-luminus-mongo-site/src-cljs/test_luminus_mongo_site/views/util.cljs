(ns test-luminus-mongo-site.views.util
  (:require [reagent.core :as reagent]))

(defn input-row [label body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]])

(defn text-input
  [id label]
  (input-row
   [:label.control-label {:for id} label]
   [:input.form-control {:field :text :id id}]))

(defn text-input-group
  [name inputs]
  [:h2 name]
  (into [:div]
        (for [[id label] inputs]
          (text-input id label))))

(defn selection-list [label id & items]
  (input-row label
             [:div.btn-group {:field :multi-select :id id}
              (for [[k label] items]
                [:button.btn.btn-default {:key k} label])]))
