const express = require('express')
const router = require('./src/routes/routes')
const app =  express()
const port = 2400

function initServer() {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(router)

    app.listen(port)
    console.log('Hello World', port)
}

initServer()
