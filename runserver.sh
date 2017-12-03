#!/bin/bash

JS_MAIN="./static/main.js"
JS_BUNDLE="./static/bundle.js"
JS_BUNDLE_MAP="./static/bundle.js.map"
BABEL_PRESETS="es2015 react"

OPTIONAL_PARAMS="--minUptime 2000 --spinSleepTime 2000"
PIDS=()

if [ "$1" = "dev" ]; then
  OPTIONAL_PARAMS="$OPTIONAL_PARAMS -m 1"

  # Run development scripts in the background

  # Watch for js changes and pipe them through Browserify
  # Exorcist is for extracting the map file out of the js
  watchify -t [ babelify --presets [ $BABEL_PRESETS ] ] $JS_MAIN --outfile 'exorcist '$JS_BUNDLE_MAP' > '$JS_BUNDLE --debug --verbose &
  PIDS+=($!)
fi

if [ "$1" = "debug" ]; then
  # Doesn't work?
  OPTIONAL_PARAMS="$OPTIONAL_PARAMS -c 'node --debug'"
fi

if [ "$1" != "dev" ] && [ "$1" != "debug" ]; then
  echo "Updating npm packages..."
  npm update && npm prune
  echo "Done updating npm packages."

  echo "Building bundle.js..."
  browserify -t [ babelify --presets [ $BABEL_PRESETS ] ] $JS_MAIN --outfile $JS_BUNDLE --verbose
  echo "Done building bundle.js"
fi

# Kill all child script processes when the script exits
for pid in ${PIDS[@]}; do
  trap "kill ${pid}" SIGINT SIGTERM EXIT
done

if [ "$1" == "clean" ]; then
  exit 0
fi

./node_modules/forever/bin/forever $OPTIONAL_PARAMS server.js

