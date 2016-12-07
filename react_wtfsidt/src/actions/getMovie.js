import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getMovie(geoValues){
  console.log(geoValues)
  return function (dispatch){
    $.ajax({
      url: 'http://localhost:3000/movies',
      type: 'GET',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({location: {long: geoValues.long, lat: geoValues.lat}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_MOVIE', movie_info: response.movie_info})
      browserHistory.push('/movies')
    })
  }
}
