import $ from 'jquery';

export default function setFavorite(restaurant_id, checked){
  var url = ''
  var type = ''
  if (checked) {
    url = 'https://rails-wsidt.herokuapp.com/favorites'
    type = 'POST'
  } else {
    url = `https://rails-wsidt.herokuapp.com/favorites/${restaurant_id}`
    type = 'DELETE'
  }

  return function (dispatch){
    $.ajax({
      url: url,
      type: type,
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({restaurant: {id: restaurant_id}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    })
  }
}
