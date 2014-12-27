(ns test-luminus-mongo-site.views.pages
  (:require [test-luminus-mongo-site.views.home :refer [home]]
            [test-luminus-mongo-site.views.about :refer [about]]
            [test-luminus-mongo-site.views.not-found :refer [not-found]]))

(def pages {:home home
            :about about
            :not-found not-found})
