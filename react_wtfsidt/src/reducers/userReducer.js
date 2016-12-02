import { combineReducers } from 'redux';

function userReducer(state=[], action) {
  switch (action.type) {
    case 'GET_USER':
      return state.concat(action.payload)
    case 'CREATE_USER':
      return state.concat([action.payload])
    default:
      return state
  }
}

export default combineReducers({userReducer})
