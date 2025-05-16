import { WebSocketServer } from "ws";
import { Worker } from "node:worker_threads";
import express from 'express'

const app = express()

app.use(express.static('public'))

const worker = new Worker("./src/worker.js");
const clientConected = new Set();
let lastMessage = null;

worker.on("message", (data) => {
  lastMessage = data
  for (const client of clientConected) {
    client.send(data);
  }
});

const wss = new WebSocketServer({
  port: 3000,
});

wss.on("connection", async (ws) => {
  ws.on("error", console.error);

  clientConected.add(ws);
  if(lastMessage){
    ws.send(lastMessage)
  }

  ws.on("close", () => clientConected.delete(ws));
});


app.listen(8080, ()=> {
  console.log('Servidor rodando na porta 8080')
})