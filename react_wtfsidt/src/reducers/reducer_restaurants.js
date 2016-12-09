export default function(state={restaurants: []}, action){
  switch(action.type){
    case 'SHOW_RESTAURANTS':
      return {...state, restaurants: action.restaurant_info}
    case 'LOG_OUT':
      return {restaurants: []}
    default:
      return state
  }
}
