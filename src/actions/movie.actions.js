import { movieConstants } from '../constants/movie/';
import { movieService } from '../services/index';
import { history } from '../helpers';
import { alertActions } from '../actions';
export const movieActions = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};

function create(movie) {
    return dispatch => {
        dispatch(request({ movie }));

        movieService.create(movie)
            .then(
                movie => {
                    dispatch(success(movie));
                    history.push('/admin/movies');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(movie) { return { type: movieConstants.MOVIE_CREATE_REQUEST, movie } }
    function success(movie) { return { type: movieConstants.MOVIE_CREATE_SUCCESS, movie } }
    function failure(error) { return { type: movieConstants.MOVIE_CREATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        movieService.getAll()
            .then(
                movies => dispatch(success(movies)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: movieConstants.GET_ALL_MOVIES_REQUEST } }
    function success(movies) { return { type: movieConstants.GET_ALL_MOVIES_SUCCESS, movies } }
    function failure(error) { return { type: movieConstants.GET_ALL_MOVIES_FAILURE, error } }
}

function update(movie) {
    return dispatch => {
        dispatch(request());

        movieService.update(movie)
            .then(
                movies => {
                    dispatch(success(movies));
                    history.push('/admin/movies');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: movieConstants.UPDATE_MOVIE_REQUEST } }
    function success(movie) { return { type: movieConstants.UPDATE_MOVIE_SUCCESS, movie } }
    function failure(error) { return { type: movieConstants.UPDATE_MOVIE_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request());

        movieService.getById(id)
            .then(
                movie => dispatch(success(movie)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: movieConstants.GET_MOVIE_BY_ID_REQUEST } }
    function success(movie) { return { type: movieConstants.GET_MOVIE_BY_ID_SUCCESS, movie } }
    function failure(error) { return { type: movieConstants.GET_MOVIE_BY_ID_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        movieService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: movieConstants.DELETE_MOVIE_REQUEST, id } }
    function success(id) { return { type: movieConstants.DELETE_MOVIE_SUCCESS, id } }
    function failure(id, error) { return { type: movieConstants.DELETE_MOVIE_FAILURE, id, error } }
}