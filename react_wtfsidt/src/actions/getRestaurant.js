import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getRestaurant(zipcode){
  return function (dispatch){
    $.ajax({
      url: 'http://localhost:3000/restaurants',
      type: 'GET',
      data: JSON.stringify({zipcode}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_RESTAURANTS', movie_info: response.movie_info})
      browserHistory.push('/movies')
    })
  }
}
