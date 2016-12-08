import $ from 'jquery';

export default function updateFavorite(formValues){
  return function (dispatch){
    $.ajax({
      url: `http://localhost:3000/favorites/${formValues.id}`,
      type: 'PATCH',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({favorite: {rating: formValues.rating, notes: formValues.notes}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      debugger;
      dispatch({type: 'UPDATE_FAVORITES', favorite_info: response.favorite})
    })
  }
}
