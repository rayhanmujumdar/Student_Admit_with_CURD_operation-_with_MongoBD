require('dotenv').config()
const app = require('./app/app')
const http = require('http')
const PORT = process.env.PORT || 8000
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`i am listing to my port is ${PORT}`)
})