import $ from 'jquery';
import { browserHistory } from 'react-router'
export default function createUser(formValues){
  return function (dispatch){
    dispatch({type: 'GET_MOVIE'})
    $.ajax({
      url: 'http://localhost:3000/movies',
      type: 'GET'
    }).done(function(response){
      dispatch({type: 'SHOW_MOVIE', movie_info: response.movie_info})
      browserHistory.push('/movies')
    })
  }
}
