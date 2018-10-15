import { movieConstants } from '../constants/movie';

// let initialState = {
//     title: '',
//     description: ''
// };
//
// export const movieDetailed = (state = initialState, action) => {
//     switch (action.type) {
//         case movieConstants.GET_MOVIE_BY_ID_REQUEST:
//             return {
//                 loading: true
//             };
//         case movieConstants.GET_MOVIE_BY_ID_SUCCESS:
//             return action.movie;
//         case movieConstants.GET_MOVIE_BY_ID_FAILURE:
//             return {
//                 ...state, error: action.error
//             };
//         default:
//             return state;
//     }
// };