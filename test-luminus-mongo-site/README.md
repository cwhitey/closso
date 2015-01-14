# test-luminus-mongo-site

<Description>

## Prerequisites

 1. You will need [Leiningen][1] 2.0 or above installed.
 2. You will need [MongoDB][2] installted.

[1]: https://github.com/technomancy/leiningen
[2]: https://www.mongodb.org/downloads

## Running

To start MongoDB, run:

    sudo mongod

To compile the cljs, run:

    lein cljsbuild once

Or, to auto-compile after saves, run:

    lein cljsbuild auto
    lein cljsbuild auto dev (?)

To clean up files created by the above commands, run:

    lein clean

To start a web server for the application, run:

    lein ring server

## For Development

Start figwheel to auto-compile and auto-push cljs/js to the browser:

    lein figwheel

In another terminal, run:

    lein ring server

Now after updating any ClojureScript you just have to reload your browser to
pull in the changes!
