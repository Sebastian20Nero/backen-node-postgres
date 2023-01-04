const crypto = require('crypto');

const TABLA = 'status';

module.exports = function (injectedStore) {
    
    let store = injectedStore;

    async function list() { 
        return store.list(TABLA);
    }

    return {
        list
    };
}