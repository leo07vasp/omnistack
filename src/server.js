const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@omnistack-h0oyc.mongodb.net/semana09?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// GET, POST, PUT, DELETE

// req.query = acessar query params url req.query.id
// req.params = acessar route params app.put('usr/:id') => req.params.id

app.use(cors());
// app.use(cors({ origin: 'http://localhost' }));
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

var porta = process.env.PORT || 8080;

app.listen(porta, () => {
  console.log(`exec in port: ${porta}`);
});
