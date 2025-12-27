import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
http://www.google.com
console.log("WebSocket server running on http://localhost:3000");

