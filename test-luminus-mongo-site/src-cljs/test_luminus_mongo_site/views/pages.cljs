(ns test-luminus-mongo-site.views.pages
  (:require [test-luminus-mongo-site.views.home :refer [home]]
            [test-luminus-mongo-site.views.tools.bmi :refer [bmi]]
            [test-luminus-mongo-site.views.tools.rep-calculator :refer [rep-calculator]]
            [test-luminus-mongo-site.views.about :refer [about]]
            [test-luminus-mongo-site.views.contact :refer [contact]]
            [test-luminus-mongo-site.views.not-found :refer [not-found]]))

(def pages {:home home
            :tools {:bmi bmi
                    :rep-calculator rep-calculator}
            :about about
            :contact contact
            :not-found not-found})
