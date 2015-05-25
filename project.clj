(defproject
  closso "0.1.0-SNAPSHOT"

  :description "Fitness related website currently in development"

  :url "http://localhost:3000/"

  :dependencies [[org.clojure/clojure "1.7.0-beta3"] ;[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3291"] ;[org.clojure/clojurescript "0.0-2665"]
                 [com.novemberain/monger "2.0.1"]
                 [selmer "0.8.2"]
                 [hiccup "1.0.5"]
                 [prone "0.8.2"]
                 [markdown-clj "0.9.66" :exclusions [com.keminglabs/cljx]]
                 [im.chit/cronj "1.4.3"]
                 [com.taoensso/timbre "3.4.0" :exclusions [org.clojure/tools.reader]]
                 [noir-exception "0.2.5"]
                 [lib-noir "0.9.9"]
                 [environ "1.0.0"]
                 [ring-server "0.4.0"]
                 [figwheel "0.3.3"]
                 [org.flatland/useful "0.11.3"]
                 [slingshot "0.12.2"]
                 [peridot "0.4.0"]
                 [cheshire "5.4.0"]
                 [metosin/ring-http-response "0.6.1"]
                 [prismatic/schema "0.4.2"]

                 ;;cljs
                 [secretary "1.2.3"]
                 [cljs-ajax "0.3.11"]
                 [reagent "0.5.0"]
                 [reagent-forms "0.5.1"]]

  :plugins [[lein-ring "0.9.1"]
            [lein-environ "1.0.0"]
            [lein-cljsbuild "1.0.5"]
            [hiccup-bridge "1.0.1"]
            [lein-figwheel "0.3.3"]
            [lein-expectations "0.0.7"]]


  :ring {:handler closso.handler/app
         :init closso.handler/init
         :destroy closso.handler/destroy}


  :profiles {:dev        {:cljsbuild      {:builds {:app {:source-paths ["env/dev/cljs"]}}}
                          :dependencies   [[ring-mock "0.1.5"]
                                           [ring/ring-devel "1.3.2"]
                                           [expectations "2.1.1"]]
                          :plugins        [[com.cemerick/austin "0.1.6"]]
                          :env            {:dev true}
                          :resource-paths ["resources/"]
                          :node-dependencies [[source-map-support "^0.2.9"]]}

             :production {:ring
                          {:open-browser? false, :stacktraces? false, :auto-reload? false}}

             :uberjar    {:cljsbuild
                          {:jar true
                           :builds {:app
                                    {:source-paths ["env/prod/cljs"]
                                     :compiler     {:optimizations :advanced
                                                    :false pretty-print}}}}
                          :hooks       [leiningen.cljsbuild]
                          :omit-source true
                          :env         {:production true}
                          :aot         :all}}


  :cljsbuild {:builds
              {:app          {:source-paths ["src-cljs"]
                              :compiler     {:externs       ["react/externs/react.js"]
                                             :optimizations :none
                                             :output-to     "resources/public/js/app.js"
                                             :source-map    "resources/public/js/out.js.map"
                                             :pretty-print  true}}

               :expectations {:source-paths   ["test-cljs"]
                              :notify-command ["node" "resources/public/js/my-expectations.js"]
                              :compiler       {:target         :nodejs
                                               :main           closso.expectations.core
                                               :output-to      "resources/public/js/my-expectations.js"
                                               :optimizations  :none
                                               :cache-analysis true
                                               :source-map     true
                                               :pretty-print   true}}}}


  :repl-options {:init-ns closso.repl}
  :clean-targets ^{:protect false} ["resources/public/js/out"]
  :uberjar-name "closso.jar"
  :min-lein-version "2.0.0"
  :test-paths ["test" "test-cljs"]
  :jvm-opts ["-server"])
