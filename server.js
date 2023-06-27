const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const gamesList = require('./game-data.json');
const reelsData = require('./reels-data.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/games', (req, res) => {
  res.send({ data: gamesList });
});

app.get('/reels', (req, res) => {
  res.send({ data: reelsData });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
