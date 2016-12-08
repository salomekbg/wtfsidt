export default function(state={favorites: []}, action){
  switch(action.type){
    case 'SHOW_FAVORITES':
      return {...state, favorites: action.favorite_info}
    case 'UPDATE_FAVORITES':
      return {...state, favorite: action.favorite_info}
    default:
      return state
  }
}
