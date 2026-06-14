require('dotenv').config();

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('saurabhhdotfr');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h2>Landed to the about page</h2>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});