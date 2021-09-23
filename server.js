const drinks = require('./models/drinks')
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(drinks)
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs');
});

app.listen(3000, () => {
    console.log('listening');
});