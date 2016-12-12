export default function(state={movies: []}, action){
  switch(action.type){
    case 'SHOW_CONCERTS':
      return {...state, concerts: action.concert_info}
    default:
      return state
  }
}
