const store = require('../../../store/pgdb'); 
const controlador = require('./status.controller');

module.exports = controlador(store);