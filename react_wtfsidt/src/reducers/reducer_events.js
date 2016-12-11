export default function(state={events: []}, action){
  switch(action.type){
    case 'SHOW_EVENTS':
      return {...state, events: action.event_info}
    default:
      return state
  }
}
