const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list)
router.post('/', upsert);
router.delete('/eliminar', remove);

// Internal functions
function list(req, res) { 
    Controller.list(req.query.idpadre)
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}
function upsert(req, res) { 
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}
function remove(req, res) { 
    const {id} = req.query
    Controller.remove(id)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((err) => {
            console.log(err)
            response.error(req, res, err.message, 500);
        });
    
}

module.exports = router;