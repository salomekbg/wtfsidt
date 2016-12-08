import { combineReducers } from 'redux';
import restaurantsReducer from './reducer_restaurants';
import usersReducer from './reducer_users';
import favoritesReducer from './reducer_favorites';

export default combineReducers({usersReducer, restaurantsReducer, favoritesReducer})
