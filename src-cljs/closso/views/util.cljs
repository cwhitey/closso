(ns closso.views.util
  (:require [reagent.core :as reagent]
            [ajax.core :refer [POST]]))

(defn apply-multiple-classes
  "Probably deprecated"
  [existing addon-list]
  (str existing " " (when (not-empty addon-list)
                      (apply str (interpose " " (map name addon-list))))))

(defn input-row [label body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-10 body]])

(defn text-input
  [id label type & placeholder]
  [:div.form-group
   [:label.control-label.col-md-2 {:for id} label]
   [:div.col-md-10
    [:input.form-control (conj {:field type :id id}
                               (if (first placeholder)
                                 {:placeholder (first placeholder)}
                                 {}))]]])

(defn form [inputs & class]
  [:div
   [:form {:class (if (not-empty class) (first class) "form-horizontal")
           :role "form"}
    (into [:div] (for [input inputs] input))]])

(defn selection-list [label id & items]
  (input-row label
             [:div.btn-group {:field :multi-select :id id}
              (for [[k label] items]
                [:button.btn.btn-default {:key k} label])]))

(defn table
  "column-names: supplied as array
  info: supplied as an array where each element is a new row
  conf: can be e.g. {:class 'table table-striped'}"
  [column-names info conf]
  [:div [:table conf
         [:thead
          (into [:tr] (for [data column-names]
                        [:th data]))]
         (into [:tbody] (for [row info]
                          (into [:tr] (for [data row]
                                        [:td (str data)]))))]])

(defn ajax-post
  [info url handler & error-handler]
  (if (not-empty @info)
    (do
      (.log js/console "Posting  " (pr-str @info) " to " url)
      (POST url
            (conj {:params {:transit @info}
                   :handler handler
                   :response-format :json
                   :keywords? true}
                  (if (not-empty error-handler) {:error-handler error-handler} {}))))
    (.log js/console "Tried to post empty info to " url)))
