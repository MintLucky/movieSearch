const config = require('config.json');
const db = require('_helpers/db');
const Movie = db.Movie;

module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};

async function create(movieParam) {
    // validate
    const movie = new Movie(movieParam);
    // save user
    await movie.save();
}

async function getAll() {
    return await Movie.find();
}

async function getById(id) {
    return await Movie.findById(id);
}

async function update(id, movieParam) {
    const movie = await Movie.findById(id);
    // validate
    if (!movie) throw 'Movie not found';
    // hash password if it was entered
    // copy userParam properties to user
    Object.assign(movie, movieParam);

    await movie.save();
}

async function _delete(id) {
    await Movie.findByIdAndRemove(id);
}