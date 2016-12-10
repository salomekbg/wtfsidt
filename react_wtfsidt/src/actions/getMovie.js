import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getMovie(formValues){
  return function (dispatch){
    $.ajax({
      url: 'http://localhost:3000/movies',
      type: 'POST',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({data: {zipcode: formValues.zipcode}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      debugger
      dispatch({type: 'SHOW_MOVIE', movie_info: response.movie_info})
      browserHistory.push('/movies')
    })
  }
}
