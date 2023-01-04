const store = require('../../../store/pgdb'); 
const controlador = require('./task.controller');

module.exports = controlador(store);