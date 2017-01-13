import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getMovie(zipcode){
  return function (dispatch){
    $.ajax({
      url: 'https://rails-wsidt.herokuapp.com/movies',
      type: 'POST',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({data: {zipcode}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_MOVIES', movie_info: response.movie_info})
      browserHistory.push('/movies')
    })
  }
}
