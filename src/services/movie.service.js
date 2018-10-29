import { config } from '../config';

import { authHeader } from '../helpers';

export const movieService = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};

function create(movie) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
    };

    return fetch(`${config.apiUrl}/movies/create`, requestOptions)
        .then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/movies`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/movies/${id}`, requestOptions).then(handleResponse);
}

function update(movie) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    };

    return fetch(`${config.apiUrl}/movies/${movie.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/movies/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            // }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}