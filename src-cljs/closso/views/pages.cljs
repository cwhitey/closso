(ns closso.views.pages
  (:require [closso.views.home :refer [home]]
            [closso.views.tools.bmi :refer [bmi]]
            [closso.views.tools.rep-calculator :refer [rep-calculator]]
            [closso.views.programs.five-three-one :refer [five-three-one]]
            [closso.views.about :refer [about]]
            [closso.views.contact :refer [contact]]
            [closso.views.not-found :refer [not-found]]))

(def pages {:home home
            :tools {:bmi bmi
                    :rep-calculator rep-calculator}
            :programs {:five-three-one five-three-one}
            :about about
            :contact contact
            :not-found not-found})
