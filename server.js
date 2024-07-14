import express from "express";
import { createServer } from "http";
import { Server as IOServer } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new IOServer(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

/* import express from "express";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";

const app = express();
const http = new HttpServer(app);
const io = new IOServer(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(3000, () => {
  console.log("Listening on port *: 3000");
});
 */
