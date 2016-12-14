import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getConcert(zipcode){
  return function (dispatch){
    $.ajax({
      url: 'http://localhost:3000/concerts',
      type: 'POST',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({data: {zipcode: zipcode}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_CONCERTS', concert_info: response})
      browserHistory.push('/concerts')
    })
  }
}
