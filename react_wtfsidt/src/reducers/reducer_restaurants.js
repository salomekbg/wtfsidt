export default function(state={restaurants: null}, action){
  switch(action.type){
    case 'SHOW_RESTAURANTS':
      return {...state, restaurants: action.restaurant_info, user_id: action.user_id}
    default:
      return state
  }
}
