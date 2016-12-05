import { combineReducers } from 'redux';
import restaurantsReducer from './reducer_restaurants';
import usersReducer from './reducer_users'

export default combineReducers({usersReducer, restaurantsReducer})
