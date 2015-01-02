(ns test-luminus-mongo-site.views.tools.rep-calculator
  (:require [test-luminus-mongo-site.views.util :as util]
            [test-luminus-mongo-site.session :as session]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]))

(set! (.-title js/document) "Rep Calculator")

(session/global-put! :one-rm nil)

(def form
  [:div
   (util/text-input-group "Rep Calculator"
                          [[:weight "Weight" :numeric]
                           [:reps "Reps" :numeric]])])

#_(defn save-doc
  "use Ajax to hit the /save endpoint on the backend"
  [doc]
  (fn []
    (.log js/console "Doc: " @doc)
    (POST "/save"
          {:params {:doc @doc}
           :handler (fn [_] (session/global-put! :saved? true))})))

(defn one-rm-handler [response]
  (.log js/console "Resp: " response)
  (session/global-put! :one-rm response))

(defn one-rm-error-handler [{:keys [status status-text]}]
  (.log js/console (str "one-rm: something bad happened: " status " " status-text)))

(defn get-one-rm
  [info]
  (fn []
    (.log js/console "Val: " @info)
    (POST "/one-rm"
          {:params {:transit @info}
           :handler one-rm-handler
           :error-handler one-rm-error-handler
           :response-format :json
           :keywords? true})))

(defn rep-calculator []
  (let [info (atom {})]
    (fn []
      [:div
       [bind-fields form info
        (fn [_ _ _] (session/global-put! :one-rm nil) nil)]
       [:button {:type "submit"
                 :class "btn btn-default"
                 :onClick (get-one-rm info)}
        "Calculate"]
       (if (session/global-state :one-rm)
         [:p [:span.label.label-success (str (session/global-state :one-rm))]]
         [:p ""])])))
