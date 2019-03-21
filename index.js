const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
//-- Middlewires
app.use(express.static(__dirname + '/public'));
app.set('view engine','hbs');

//-- Routes
app.get('/',(req, res) => {
    res.render('index.hbs');
});

app.get('/about',(req, res) => {
    res.render('about.hbs');
});

app.get('/contact',(req, res) => {
    res.render('contact.hbs');
});

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});