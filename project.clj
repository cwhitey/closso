(defproject
  closso "0.1.0-SNAPSHOT"

  :description "Fitness related website currently in development"

  :url "http://localhost:3000/"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2665"]
                 [com.novemberain/monger "2.0.1"]
                 [selmer "0.8.2"]
                 [hiccup "1.0.5"]

                 [prone "0.8.1"]
                 [markdown-clj "0.9.66" :exclusions [com.keminglabs/cljx]]
                 [im.chit/cronj "1.4.3"]
                 [com.taoensso/timbre "3.4.0" :exclusions [org.clojure/tools.reader]]
                 [noir-exception "0.2.5"]
                 [lib-noir "0.9.9"]
                 [environ "1.0.0"]
                 [ring-server "0.4.0"]
                 [figwheel "0.3.2"]
                 [org.flatland/useful "0.11.3"]
                 [slingshot "0.12.2"]
                 [peridot "0.4.0"]
                 [cheshire "5.4.0"]
                 [metosin/ring-http-response "0.6.1"]

                 ;;cljs
                 [secretary "1.2.3"]
                 [cljs-ajax "0.3.11"]
                 [reagent-forms "0.5.1"]
                 ]

  :test-paths ["test"]

  :repl-options {:init-ns closso.repl}

  :jvm-opts ["-server"]

  :plugins [[lein-ring "0.9.1"]
            [lein-environ "1.0.0"]
            [lein-cljsbuild "1.0.4"]
            [hiccup-bridge "1.0.1"]
            [lein-figwheel "0.2.0-SNAPSHOT"]
            [lein-expectations "0.0.7"]]

  :ring {:handler closso.handler/app
         :init closso.handler/init
         :destroy closso.handler/destroy}

  :profiles {:uberjar {:cljsbuild
                       {:jar true
                        :builds {:app
                                 {:source-paths ["env/prod/cljs"]
                                  :compiler {:optimizations :advanced, :false pretty-print}}}}
                       :hooks [leiningen.cljsbuild]
                       :omit-source true
                       :env {:production true}
                       :aot :all}

             :production {:ring
                          {:open-browser? false, :stacktraces? false, :auto-reload? false}}
             :dev {:cljsbuild {:builds {:app {:source-paths ["env/dev/cljs"]}}}
                   :dependencies [[ring-mock "0.1.5"]
                                  [ring/ring-devel "1.3.2"]
                                  [expectations "2.1.1"]]
                   :plugins [[com.cemerick/austin "0.1.6"]]
                   :env {:dev true}
                   :resource-paths ["resources/"]}}

  :cljsbuild {:builds {:app {:source-paths ["src-cljs"]
                             :compiler
                             {:output-dir "resources/public/js/out"
                              :externs ["react/externs/react.js"]
                              :optimizations :none
                              :output-to "resources/public/js/app.js"
                              :source-map "resources/public/js/out.js.map"
                              :pretty-print true}}}}

  :clean-targets ^{:protect false} ["resources/public/js/out"]

  :uberjar-name "closso.jar"

  :min-lein-version "2.0.0")
