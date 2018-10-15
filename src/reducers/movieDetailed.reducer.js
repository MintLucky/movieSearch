import { movieConstants } from '../constants/movie';

let initialState = {
    movie : null
};

export const moviesDetailed = (state = initialState, action) => {
    switch (action.type) {
        case movieConstants.GET_MOVIE_BY_ID_REQUEST:
            return {
                loading: true
            };
        case movieConstants.GET_MOVIE_BY_ID_SUCCESS:
            return { movie: action.movie };
        case movieConstants.GET_MOVIE_BY_ID_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
};