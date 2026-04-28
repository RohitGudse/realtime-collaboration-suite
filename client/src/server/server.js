const http = require("http");
const express = require("express");
const WebSocket = require("ws");
const { setupWSConnection } = require("y-websocket/bin/utils");

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(1234, () => {
  console.log("WebSocket Server running on port 1234");
});