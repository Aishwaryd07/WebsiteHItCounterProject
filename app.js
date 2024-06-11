const express = require('express');
const bodyParser = require('body-parser');
const visitRoutes = require('./routes/visitRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', visitRoutes);

module.exports = app;
