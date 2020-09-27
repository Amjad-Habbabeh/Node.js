const express = require('express');
const exhbs = require('express-handlebars');
const app = express();

// index Route
app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server starts at port ${port}`);
});
