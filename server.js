const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/games', (req, res) => {
  res.sendFile(__dirname + '/game-data.json');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
