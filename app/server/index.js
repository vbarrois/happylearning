#!/usr/bin/env node

"use strict"

import http from "http"
import polka from "polka"
import { json } from "body-parser"

const onError = (error) => {
  const EADDRINUSE = error.message.includes("EADDRINUSE")
  if (!EADDRINUSE) {
    throw error
  }
}

const uriDecode = (req, res, next) => {
  req.path = decodeURI(req.path);
  next();
}

const start = () => {
  const server = http.createServer()

  server.on("error", onError)

  const p = polka({ server }).use(json()).use(uriDecode)
}

start();