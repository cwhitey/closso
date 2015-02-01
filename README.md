# closso

<Description>

## Prerequisites

 1. You will need [Leiningen][1] 2.0 or above installed.
 2. You will need [MongoDB][2] installed.

[1]: https://github.com/technomancy/leiningen
[2]: https://www.mongodb.org/downloads

## Running

Start MongoDB:

    sudo mongod

To compile the cljs, run:

    lein cljsbuild once

Or, to auto-compile after saves, run:

    lein cljsbuild auto

To start a web server for the application, run:

    lein ring server

To clean up files created by the above commands, run:

    lein clean

## For Development

Start figwheel to auto-compile and auto-push cljs/js to the browser:

    lein figwheel

In another terminal, run:

    lein ring server

Now after updating any ClojureScript you just have to reload your browser to
pull in the changes!

Start a ClojureScript REPL from a Clojure REPL

    lein repl
    => (def repl-env (reset! cemerick.austin.repls/browser-repl-env
            (cemerick.austin/repl-env)))
    => (cemerick.austin.repls/cljs-repl repl-env)
