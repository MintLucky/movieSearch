import { movieConstants } from '../constants/movie';

let initialState = {
    items : [],
    movieDetailed: {
        title: '',
        description: ''
    }
};

export const movies = (state = initialState, action) => {
    switch (action.type) {

        case movieConstants.GET_ALL_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case movieConstants.GET_ALL_MOVIES_SUCCESS:
            return {
                ...state,
                items: action.movies,
                loading: false,
                error: null,
                movieDetailed: {
                    title: '',
                    description: ''
                }
            };
        case movieConstants.GET_ALL_MOVIES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };

        case movieConstants.UPDATE_MOVIE_REQUEST:
            return {
                ...state
            };
        case movieConstants.UPDATE_MOVIE_SUCCESS:
            return {
                ...state,
                items: state.items.map((post) => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            title: action.data.newTitle,
                            message: action.data.newMessage,
                            editing: !post.editing
                        }
                    } else return post;
                }),
                loading: false,
                error: null
            };
        case movieConstants.UPDATE_MOVIE_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };

        case movieConstants.DELETE_MOVIE_REQUEST:
            return {
                ...state
            };
        case movieConstants.DELETE_MOVIE_SUCCESS:
            // return { items: action.movies}
            return {
                ...state,
                items : state.items.filter((item)=>item.id !== action.id)
            };
        case movieConstants.DELETE_MOVIE_FAILURE:
            return {
                ...state,
                error: action.error,
                loading : false
            };

        case movieConstants.GET_MOVIE_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            };
        case movieConstants.GET_MOVIE_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                movieDetailed: action.movie,
                error: false
            };
        case movieConstants.GET_MOVIE_BY_ID_FAILURE:
            return {
                ...state,
                loading : false,
                error: action.error
            };

        default:
            return state;
    }
};