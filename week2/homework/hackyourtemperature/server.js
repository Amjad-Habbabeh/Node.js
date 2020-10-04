const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.use(express.json());

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

// index Route
app.get('/', (req, res) => {
  // res.send('hello from backend to frontend!');
  res.render('index');
});
// app.get('/weather', (req, res) => {
//   // res.send('hello from backend to frontend!');
//   const city = res.body;
//   // console.log(res.body);
//   res.send(city);
// });

app.post('/weather', function (req, res) {
  const city = req;
  // const city = req.query.cityName;
  console.log(city);
  res.send(city);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server starts at port ${port}`);
});
