import { combineReducers } from 'redux';
import moviesReducer from './reducer_movies';
import userReducer from './reducer_users'

export default combineReducers({userReducer, moviesReducer})
