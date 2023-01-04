const crypto = require('crypto');

const TABLA = 'priority';

module.exports = function (injectedStore) {
    
    let store = injectedStore;

    async function list() { 
        return store.list(TABLA);
    }

    return {
        list
    };
}