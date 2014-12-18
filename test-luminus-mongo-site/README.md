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

    lein cljsbuild auto
    lein cljsbuild auto dev (?)

To clean up files created by the above commands, run:

    lein cljsbuild clean

To start a web server for the application, run:

    lein ring server
