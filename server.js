const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const publicDir = path.join(__dirname, "./public")

const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.use(express.static(publicDir))

io.on('connection', (socket) => {
    console.log('New WebSocket Coinnection ')

    socket.emit("message", "welcome")
    socket.broadcast.emit('message', "A new user has joined")

    socket.on('sendMessage', (param) => {
        io.emit("message", param)
    })
})

server.listen(3001, () => {
    console.log('the server is running on port 3001')
})