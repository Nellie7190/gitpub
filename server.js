const drinks = require('./models/drinks')
const foods = require('./models/foods')
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(drinks)
});

app.get('/menu', (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks, allFoods: foods});
});

app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.indexOfDrinksArray]})
})

app.get('/foods/:indexOfFoodsArray', (req, res) => {
    res.render('foods_show.ejs', {food: foods[req.params.indexOfFoodsArray]})
})

app.listen(3000, () => {
    console.log('listening');
});