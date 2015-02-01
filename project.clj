(defproject
  closso "0.1.0-SNAPSHOT"

  :description "Fitness related website currently in development"

  :url "http://localhost:3000/"

  :dependencies [[com.novemberain/monger "2.0.1"]
                 [log4j
                  "1.2.17"
                  :exclusions
                  [javax.mail/mail
                   javax.jms/jms
                   com.sun.jdmk/jmxtools
                   com.sun.jmx/jmxri]]
                 [selmer "0.7.9"]
                 [hiccup "1.0.5"]
                 [com.taoensso/tower "3.0.2"]
                 [reagent-forms "0.3.9"]
                 [prone "0.8.0"]
                 [markdown-clj "0.9.62" :exclusions [com.keminglabs/cljx]]
                 [im.chit/cronj "1.4.3"]
                 [com.taoensso/timbre "3.3.1"]
                 [cljs-ajax "0.3.8"]
                 [noir-exception "0.2.3"]
                 [org.clojure/clojurescript "0.0-2665"]
                 [lib-noir "0.9.5"]
                 [org.clojure/clojure "1.6.0"]
                 [environ "1.0.0"]
                 [ring-server "0.4.0"]
                 [secretary "1.2.1"]
                 [figwheel "0.2.0-SNAPSHOT"]
                 [org.flatland/useful "0.11.3"]
                 [com.cemerick/piggieback "0.1.5"]]

  :repl-options {:init-ns closso.repl}

  :jvm-opts ["-server"]

  :plugins [[lein-ring "0.8.13"]
            [lein-environ "1.0.0"]
            [lein-ancient "0.5.5"]
            [lein-cljsbuild "1.0.4"]
            [hiccup-bridge "1.0.1"]
            [lein-figwheel "0.2.0-SNAPSHOT"]
            [lein-bikeshed "0.2.0"]]

  :ring {:handler closso.handler/app,
         :init closso.handler/init,
         :destroy closso.handler/destroy}

  :profiles {:uberjar {:cljsbuild
                       {:jar true,
                        :builds {:app
                                 {:source-paths ["env/prod/cljs"],
                                  :compiler {:optimizations :advanced, :false pretty-print}}}},
                       :hooks [leiningen.cljsbuild],
                       :omit-source true,
                       :env {:production true},
                       :aot :all},
             :production {:ring
                          {:open-browser? false, :stacktraces? false, :auto-reload? false}},
             :dev {:cljsbuild {:builds {:app {:source-paths ["env/dev/cljs"]}}},
                   :dependencies [[ring-mock "0.1.5"]
                                  [ring/ring-devel "1.3.2"]
                                  [pjstadig/humane-test-output "0.6.0"]],
                   :plugins [[com.cemerick/austin "0.1.6"]]
                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)],
                   :env {:dev true}
                   :resource-paths ["resources/"]}}

  :cljsbuild {:builds {:app {:source-paths ["src-cljs"],
                             :compiler
                             {:output-dir "resources/public/js/out",
                              :externs ["react/externs/react.js"],
                              :optimizations :none,
                              :output-to "resources/public/js/app.js",
                              :source-map true,
                              :pretty-print true}}}}

  :clean-targets ^{:protect false} ["resources/public/js/out"]

  :uberjar-name "closso.jar"

  :min-lein-version "2.0.0")
