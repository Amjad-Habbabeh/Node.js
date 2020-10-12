const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const { default: Axios } = require('axios');

const app = express();

app.use(express.json());
app.use(express.static('puplic'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// index Route
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', urlencodedParser, (req, res) => {
  const cityName = req.body.cityName;
  const API_KEY = require('./sources/keys.json').API_KEY;
  let message;
  Axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
  )
    .then((response) => {
      message = ` The temperature now is: ${response.data.main.temp}°C at ${response.data.name}`;
      res.render('index', { message });
    })
    .catch((err) => {
      message = err.response.data.message;

      res.render('index', { message });
    });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server starts at port ${port}`);
});
