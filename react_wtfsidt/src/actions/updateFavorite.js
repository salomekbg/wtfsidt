import $ from 'jquery';

export default function updateFavorite(formValues){
  return function (dispatch){
    $.ajax({
      url: `https://rails-wsidt.herokuapp.com/favorites/${formValues.id}`,
      type: 'PATCH',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({favorite: {rating: formValues.rating, notes: formValues.notes}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'UPDATE_FAVORITES', favorite_info: response.favorites})
    })
  }
}
