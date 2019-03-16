#!/bin/bash

yarn clean
yarn build
np --no-yarn --contents dist
