(ns test-luminus-mongo-site.views.pages
  (:require [test-luminus-mongo-site.views.home :refer [home]]
            [test-luminus-mongo-site.views.tools.bmi :refer [bmi]]
            [test-luminus-mongo-site.views.tools.rep-calculator :refer [rep-calculator]]
            [test-luminus-mongo-site.views.about :refer [about]]
            [test-luminus-mongo-site.views.contact :refer [contact]]
            [test-luminus-mongo-site.views.not-found :refer [not-found]]))

(def pages {:home {:page home
                   :route "#/"
                   :title "Home"}
            :tools {:bmi {:page bmi
                          :route "#/tools/bmi"
                          :title "BMI calculator"}
                    :rep-calculator {:page rep-calculator
                                     :route "#/tools/rep-calculator"
                                     :title "Rep Calculator"}}
            :about {:page about
                    :route "#/about"
                    :title "About"}
            :contact {:page contact
                      :route "#/contact"
                      :title "Contact"}
            :not-found {:page not-found
                        :route "#/*"
                        :title "404 Not Found"}})
