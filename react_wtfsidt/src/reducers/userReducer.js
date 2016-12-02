export default function signup(state = {creating_user: false, current_user: null}, action){
  switch (action.type) {
    case 'CREATING_USER':
      return {...state, creating_user: true}
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}



// import { combineReducers } from 'redux';
//
// function userReducer(state=[], action) {
//   switch (action.type) {
//     case 'AUTHENTICATE_USER':
//       return state.concat(action.payload)
//     case 'CREATE_USER':
//       return state.concat([action.payload])
//     default:
//       return state
//   }
// }
//
// export default combineReducers({userReducer})
