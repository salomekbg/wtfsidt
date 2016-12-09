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
      debugger
//       The way you are using the delete favorites action, you may not need a separate action for this.  It is simply updating the favorites with the 
//       New list.  So you can just call it the same old update favorites action, or whatever its called.
      dispatch({type: 'DELETE_FAVORITE', favorite_info: response.favorites})
      browserHistory.push('/favorites')
    })
  }
}
