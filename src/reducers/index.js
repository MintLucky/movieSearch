import { combineReducers } from 'redux';
import { movies } from './movies.reducer'
import { movieDetailed } from './movieDetailed.reducer'
import { authentication } from './authentication/authentication.reducer';
import { registration } from './authentication/registration.reducer';
import { users } from './authentication/users.reducer';
import { alert } from './authentication/alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  movies
});

export default rootReducer;