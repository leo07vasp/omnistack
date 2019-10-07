const express = require('express');
const mongoose = require('mongoose');

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

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('listen on 3333');
});
