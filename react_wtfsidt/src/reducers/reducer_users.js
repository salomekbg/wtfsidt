export default function signup(state = {zip_code: '', creating_user: false, current_user: null}, action){
  switch (action.type) {
    case 'CREATING_USER':
      return {...state, creating_user: true}
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    case 'SET_ZIP_CODE':
      return {...state, zip_code: action.zip_code}
    case 'LOG_OUT':
      return {creating_user: false, current_user: null}
    default:
      return state
  }
}
