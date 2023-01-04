const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('../config.js');
const task = require('./components/task/task.network');
const priority = require('./components/priority/priority.network');
const status = require('./components/status/status.network');
const errors = require('../network/error')
const app = express();

app.use(bodyParser.json());


app.use(cors());//urls permitidas para correr sin bloquear

// ROUER
app.use('/api/task', task);
app.use('/api/priority', priority);
app.use('/api/status', status);

app.use(errors)
app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});