(ns closso.util
  (:require [noir.io :as noir-io]
            [markdown.core :as md]
            [clojure.java.io :as io]
            [clojure.edn :as edn]))

(defn md->html
  "reads a markdown file from public/md and returns an HTML string"
  [filename]
  (md/md-to-html-string (noir-io/slurp-resource filename)))

(defn get-config
  [filename]
  (->> filename
       io/resource
       slurp
       edn/read-string))

(def avg #(/ (reduce + %) (count %)))
(def perc #(/ % 100))
