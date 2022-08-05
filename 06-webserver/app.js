
const express = require('express')
const app = express()

const puerto = 8080

//servidor estatico (midleware)
app.use(express.static('public'));

app.get('/menu', function (req, res) {
    res.send('Menu content')
})

app.get('*', function (req, res) {
    res.send('404 | page not found :(')
})



app.listen(puerto, () => {
    console.log(`server on in port: ${puerto}`);
})