const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const port = process.env.PORT || 5000

const app = express()
const httpServer = http.createServer(app)

app.use(express.static('public'))

httpServer.listen(port, () => {
    console.log(`server starting on port: ${port}`)
})

const io = new Server(httpServer)
io.on('connection', (socket) => {
    console.log('user connected', socket.id)
})