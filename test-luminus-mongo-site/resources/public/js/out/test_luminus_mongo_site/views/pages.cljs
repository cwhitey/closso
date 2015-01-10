(ns test-luminus-mongo-site.views.pages
  (:require [test-luminus-mongo-site.views.home :refer [home]]
            [test-luminus-mongo-site.views.tools.bmi :refer [bmi]]
            [test-luminus-mongo-site.views.tools.rep-calculator :refer [rep-calculator]]
            [test-luminus-mongo-site.views.programs.five-three-one :refer [five-three-one]]
            [test-luminus-mongo-site.views.about :refer [about]]
            [test-luminus-mongo-site.views.contact :refer [contact]]
            [test-luminus-mongo-site.views.not-found :refer [not-found]]))

(def pages {:home home
            :tools {:bmi bmi
                    :rep-calculator rep-calculator}
            :programs {:five-three-one five-three-one}
            :about about
            :contact contact
            :not-found not-found})
