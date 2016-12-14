export default function(state={shows: []}, action){
  switch(action.type){
    case 'SHOW_TVSHOWS':
      return {...state, shows: action.show_info}
    default:
      return state
  }
}
