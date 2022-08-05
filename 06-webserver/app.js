
const express = require('express')
const app = express()

const puerto = 8080

//servidor estatico (midleware)
app.use(express.static('public'));

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', function (req, res) {
    res.send('404 | page not found :(')
})



app.listen(puerto, () => {
    console.log(`server on in port: ${puerto}`);
})