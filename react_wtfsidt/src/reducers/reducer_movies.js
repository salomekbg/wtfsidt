export default function(state={movies: []}, action){
  switch(action.type){
    case 'SHOW_MOVIES':
      return {...state, movies: action.movie_info}
    default:
      return state
  }
}
