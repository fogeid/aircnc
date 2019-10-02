const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-9-s6b7z.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = Acessar query params
// req.params = Acessar routes params (para edição e delete)
// req.body = Acessar o corpo da requisição (para criação, edição)
app.use(express.json());
app.use(routes);

app.listen(3333);