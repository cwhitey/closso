(ns test-luminus-mongo-site.util
  (:require [noir.io :as io]
            [markdown.core :as md]
            [clojure.java.io :as j-io]
            [clojure.edn :as edn]))

(defn md->html
  "reads a markdown file from public/md and returns an HTML string"
  [filename]
  (md/md-to-html-string (io/slurp-resource filename)))

(defn get-config
  [filename]
  (->> filename
       j-io/resource
       slurp
       edn/read-string))

(def avg #(/ (reduce + %) (count %)))
(def perc #(/ % 100))
