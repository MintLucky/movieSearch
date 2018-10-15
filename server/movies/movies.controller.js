const express = require('express');
const router = express.Router();
const movieService = require('./movie.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function getAll(req, res, next) {
    console.log('getAll');
    movieService.getAll()
        .then(movies => res.json(movies))
        .catch(err => next(err));
}

function getById(req, res, next) {
    console.log('getById');
    console.log(req.params.id);
    movieService.getById(req.params.id)
        .then(movie => movie ? res.json(movie) : res.sendStatus(404))
        .catch(err => next(err));
}
