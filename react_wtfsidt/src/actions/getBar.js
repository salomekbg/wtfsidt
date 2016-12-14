import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getBar(zipcode){
  return function (dispatch){
    $.ajax({
      url: 'http://localhost:3000/bars',
      type: 'POST',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({data: {zipcode: zipcode}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_BARS', bar_info: response})
      browserHistory.push('/bars')
    })
  }
}
