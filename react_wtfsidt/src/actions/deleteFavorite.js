import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function deleteFavorite(favorite_id){

  return function (dispatch){
    $.ajax({
      url: `http://localhost:3000/favorites/${favorite_id}`,
      type: 'DELETE',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({favorite: {id: favorite_id}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'DELETE_FAVORITE', favorite_info: response.favorites})
      browserHistory.push('/favorites')
    })
  }
}
