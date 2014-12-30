(ns test-luminus-mongo-site.views.home
  (:require [test-luminus-mongo-site.views.util :as util]
            [test-luminus-mongo-site.session :as session]
            [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]]))

(defn home []
  [:div
   [:h1 "Home Page"]])
