export default function(state={bars: []}, action){
  switch(action.type){
    case 'SHOW_BARS':
      return {...state, bars: action.bar_info}
    case 'LOG_OUT':
      return {bars: []}
    default:
      return state
  }
}
