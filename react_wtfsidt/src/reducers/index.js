import { combineReducers } from 'redux';
import restaurantsReducer from './reducer_restaurants';
import usersReducer from './reducer_users';
import favoritesReducer from './reducer_favorites';
import moviesReducer from './reducer_movies';
import eventsReducer from './reducer_events';

export default combineReducers({usersReducer, restaurantsReducer, favoritesReducer, moviesReducer, eventsReducer})
