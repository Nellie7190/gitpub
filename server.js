const drinks = require('./models/drinks')
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(drinks)
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks});
});

app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.indexOfDrinksArray]})
})



app.listen(3000, () => {
    console.log('listening');
});