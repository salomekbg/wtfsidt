export default function(state={}, action){
  switch(action.type){
    case 'GET_MOVIE':
      return (console.log('get movie reducer'))
    case 'SHOW_MOVIE':
      return state
    default:
      return state
  }
}
