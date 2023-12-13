import express from "express"
import cors from "cors"
import { Server } from "socket.io"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

const app = express()
const server = http.createServer(app);

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    },
})

io.on("connection", (socket) => {
    console.log("User connected", socket.id);
    socket.on("message", (message) => {
        console.log(message)
        socket.broadcast.emit("msg", message)
    })
    socket.on("disconnect", () => {
        console.log("User disconnected")
    })
})

server.listen(4000, () => {
    console.log("Server is running on port 4000");
})

