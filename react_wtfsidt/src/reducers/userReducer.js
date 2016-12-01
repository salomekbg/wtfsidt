import { combineReducers } from 'redux';

function userReducer(state=[], action) {
  switch (action.type) {
    case 'GET_USER':
      return state.concat(action.payload)
    case 'ADD_USER':
      return state
    default:
      return state
  }
}

export default combineReducers({userReducer})
