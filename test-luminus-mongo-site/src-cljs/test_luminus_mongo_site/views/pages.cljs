(ns test-luminus-mongo-site.views.pages
  (:require [test-luminus-mongo-site.views.home-page :refer [home-page]]
            [test-luminus-mongo-site.views.about-page :refer [about-page]]))

(def pages {:home-page  home-page
            :about-page about-page})
