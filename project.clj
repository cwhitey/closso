(defproject
  closso "0.1.0-SNAPSHOT"

  :description "Fitness related website currently in development"

  :url "http://localhost:3000/"

  :dependencies
  [[org.clojure/clojure "1.7.0-RC1"]
   [org.clojure/clojurescript "0.0-3269"] ;[org.clojure/clojurescript "0.0-2665"]
   [com.stuartsierra/component "0.2.3"]
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
   [reagent-forms "0.5.1"]
   [reagent-utils "0.1.4"]]

  :plugins
  [[lein-ring      "0.9.1"]
   [lein-environ   "1.0.0"]
   [lein-cljsbuild "1.0.6"]
   [hiccup-bridge  "1.0.1"]]

  :profiles
  {:dev        {:cljsbuild      {:builds {:app {:source-paths ["env/dev/cljs"]}}}
                :dependencies   [[ring-mock       "0.1.5"]
                                 [ring/ring-devel "1.3.2"]
                                 [expectations    "2.1.1"]
                                 [figwheel        "0.3.3"]
                                 [com.cemerick/clojurescript.test "0.3.3"]]
                :plugins        [[lein-figwheel          "0.3.3"]
                                 [lein-expectations      "0.0.7"]
                                 [lein-autoexpect        "1.4.3"]
                                 [com.cemerick/clojurescript.test "0.3.3"]
                                 [lein-shell             "0.4.0"]
                                 #_[com.cemerick/austin  "0.1.6"]]
                :env            {:dev true}
                :resource-paths ["resources/"]}

   :production {:ring
                {:open-browser? false, :stacktraces? false, :auto-reload? false}}

   :uberjar    {:cljsbuild
                {:jar    true
                 :builds {:app
                          {:source-paths ["env/prod/cljs"]
                           :compiler     {:optimizations :advanced
                                          :false         pretty-print}}}}
                :hooks       [leiningen.cljsbuild]
                :omit-source true
                :env         {:production true}
                :aot         :all}}


  :cljsbuild
  {:builds {:app   {:source-paths ["src-cljs"]
                    :figwheel     true
                    :compiler     {:output-to     "resources/public/js/app/app.js"
                                   :output-dir    "resources/public/js/app"
                                   :source-map    "resources/public/js/app/app.js.map"
                                   :externs       ["react/externs/react.js"]
                                   :optimizations :none
                                   :pretty-print  true}}

            :tests {:source-paths   ["src-cljs" "test-cljs"]
                    :notify-command ["phantomjs"
                                     :cljs.test/runner
                                     "resources/public/js/tests/my-tests.js"]
                    :compiler       {:output-to     "resources/public/js/tests/my-tests.js"
                                     :output-dir    "resources/public/js/tests"
                                     :source-map    "resources/public/js/tests/my-tests.js.map"
                                     :main          "closso.expectations.core"
                                     :optimizations :whitespace
                                     :pretty-print  true}}}}

  :aliases
  {;; Tests
   "test-all"       ["do"
                     ["shell" "echo" "RUNNING CLOJURE TESTS"]
                     ["clean"]
                     ["with-profile" "dev"
                      "expectations"]
                     ["shell" "echo" "RUNNING CLOJURESCRIPT TESTS"]
                     ["cljsbuild" "once" "tests"]]
   "test-cljs"      ["do"
                     ["clean"]
                     ["with-profile" "dev"
                      "cljsbuild" "once" "tests"]]
   "auto-test-cljs" ["do"
                     ["clean"]
                     ["with-profile" "dev"
                      "cljsbuild" "auto" "tests"]]}

  :main closso.system
  :repl-options {:init-ns closso.repl}
  :clean-targets ^{:protect false} [[:cljsbuild :builds :app   :compiler :output-to]
                                    [:cljsbuild :builds :app   :compiler :output-dir]
                                    [:cljsbuild :builds :tests :compiler :output-to]
                                    [:cljsbuild :builds :tests :compiler :output-dir]]
  :uberjar-name "closso.jar"
  :min-lein-version "2.5.0"
  :test-paths ["test"]
  :jvm-opts ["-server"])
