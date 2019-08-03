const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

//app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname +"/assets")));
console.log(path.join(__dirname + "/assets"));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/assignment01', (req, res) => {
  res.render('assignment01');
});

app.get('/assignment02A', (req, res) => {
  res.render('assignment02A');
});

app.get('/assignment02B', (req, res) => {
  res.render('assignment02B');
});

app.get('/assignment03', (req, res) => {
  res.render('assignment03');
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
