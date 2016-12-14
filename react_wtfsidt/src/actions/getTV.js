import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getRestaurant(zipcode){
  return function (dispatch){
    $.ajax({
      url: 'http://localhost:3000/shows',
      type: 'POST',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({data: {zipcode: zipcode}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_TVSHOWS', show_info: response})
      browserHistory.push('/tv')
    })
  }
}
