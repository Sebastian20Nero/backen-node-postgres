const crypto = require('crypto');

const TABLA = 'task';

module.exports = function (injectedStore) {
    
    let store = injectedStore;

    async function list(idpadre) {
        return store.list(TABLA,idpadre);
    }

    async function upsert(body) { 
        const task = {
            idtask: body.idtask,
            description: body.description,
            begindate: body.begindate,
            enddate: body.enddate,
            duration: body.duration,
            idpadre: body.idpadre,
            idpriority: body.idpriority,
            idstatus: body.idstatus,
            estado: body.estado,
        }
        return store.upsert(TABLA, task);
    }

    async function remove(id) {
        return store.remove(TABLA,id);
    }

    return {
        list,
        upsert,
        remove
    };
}