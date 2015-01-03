(ns test-luminus-mongo-site.views.tools.rep-calculator
  (:require [test-luminus-mongo-site.views.util :as util]
            [test-luminus-mongo-site.session :as session]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]))

(session/global-put! :one-rm nil)

(def form
  [:div
   (util/text-input-group "Rep Calculator"
                          [[:reps "Reps" :numeric]
                           [:weight "Weight" :numeric]])])

#_(defn save-doc
  "use Ajax to hit the /save endpoint on the backend"
  [doc]
  (fn []
    (.log js/console "Doc: " @doc)
    (POST "/save"
          {:params {:doc @doc}
           :handler (fn [_] (session/global-put! :saved? true))})))

(defn rep-handler [response]
  (.log js/console "Resp: " response)
  (session/global-put! :one-rm response))

(defn rep-error-handler [{:keys [status status-text]}]
  (.log js/console (str "one-rm: something bad happened: " status " " status-text)))

(defn get-rep-vals
  [info]
  (fn []
    (.log js/console "Val: " @info)
    (POST "/rep-calc"
          {:params {:transit @info}
           :handler rep-handler
           :error-handler rep-error-handler
           :response-format :json
           :keywords? true})))

(defn rep-table [info]
  (util/table ["Reps" "Weight"]
              info
              :table-striped))

(defn rep-table-fill []
  (sort-by first (if (session/global-state :one-rm)
                   (session/global-state :one-rm)
                   (map (fn [x] [x ""]) (conj (range 1 13) 15)))))

(defn rep-calculator []
  (let [info (atom {})]
    (fn []
      [:div.col-md-12
       [:div.col-md-6
        [bind-fields form info
         (fn [_ _ _] (session/global-put! :one-rm nil) nil)]
        [:p [:button {:type "submit"
                      :class "btn btn-default"
                      :onClick (get-rep-vals info)}
             "Calculate"]]]
       [:div.col-md-6 [rep-table (rep-table-fill)]]])))
