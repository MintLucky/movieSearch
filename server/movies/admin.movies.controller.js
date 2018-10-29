const express = require('express');
const router = express.Router();
const movieService = require('./movie.service');

// routes
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    movieService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    movieService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    movieService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}