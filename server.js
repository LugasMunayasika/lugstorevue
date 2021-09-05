const express = require('express')
const serveStatic = require('serveStatic')
const path = require('path')

const app = express()

//serve files from our dist directory which now contains out index.html file 

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)
