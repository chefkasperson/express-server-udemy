const express = require('express')

const app = express()

app.get('/', function(request, response) {
    response.send('<h1>Hello World!</h1>')
})

app.get('/contact', function(req, res) {
    res.send('contact me at chefkasperson@gmail.com')
})

app.get('/about', function(req, res) {
    res.send('my name is Erik and I am a chef turned software engineer')
})
app.listen(3000, function() {
    console.log('server listening on port:3000')
})
