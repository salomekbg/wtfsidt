import { combineReducers } from 'redux';
import restaurantsReducer from './reducer_restaurants';
import usersReducer from './reducer_users';
import favoritesReducer from './reducer_favorites';
import moviesReducer from './reducer_movies';
import eventsReducer from './reducer_events';
import barsReducer from './reducer_bars';
import concertsReducer from './reducer_concerts';


export default combineReducers({usersReducer, restaurantsReducer, favoritesReducer, moviesReducer, eventsReducer, barsReducer, concertsReducer})
