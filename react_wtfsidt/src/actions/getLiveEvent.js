import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getEvent(zipcode){
  return function (dispatch){
    $.ajax({
      url: 'https://rails-wsidt.herokuapp.com/events',
      type: 'POST',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({data: {zipcode: zipcode}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      var legit_events = response.event_info.filter((event) => {
        return event != null
      })
      dispatch({type: 'SHOW_EVENTS', event_info: legit_events})
      browserHistory.push('/events')
    })
  }
}
