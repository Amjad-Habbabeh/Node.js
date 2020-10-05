const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

// index Route
app.get('/', (req, res) => {
  // res.send('hello from backend to frontend!');
  res.render('index');
});

app.post('/weather', urlencodedParser, (req, res) => {
  const cityName = req.body.cityName;
  if (!cityName) {
    res.status(400);
    res.send('invalid, please enter a city name');
    return;
  } else {
    res.send(cityName);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server starts at port ${port}`);
});
