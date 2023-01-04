const store = require('../../../store/pgdb'); 
const controlador = require('./priority.controller');

module.exports = controlador(store);