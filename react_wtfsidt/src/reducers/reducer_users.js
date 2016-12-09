export default function signup(state = {creating_user: false, current_user: null}, action){
  switch (action.type) {
    case 'CREATING_USER':
      return {...state, creating_user: true}
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    case 'LOG_OUT':
      return {current_user: false, current_user: null}
    default:
      return state
  }
}
