import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function deleteFavorite(favorite_id){
  return function (dispatch){
    $.ajax({
      url: `http://localhost:3000/favorites/${favorite_id}`,
      type: 'DELETE',
      headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(response){
      dispatch({type: 'DELETE_FAVORITE', favorite_info: response.favorites})
      browserHistory.push('/favorites')
    })
  }
}
