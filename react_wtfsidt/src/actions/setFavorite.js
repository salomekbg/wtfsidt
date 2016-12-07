import $ from 'jquery';

export default function setFavorite(restaurant_id, checked){
  var url = ''
  var type = ''
  if (checked) {
    url = 'http://localhost:3000/favorites'
    type = 'POST'
  } else {
    url = `http://localhost:3000/favorites/${restaurant_id}`
    type = 'DELETE'
  }

  return function (dispatch){
    $.ajax({
      url: url,
      type: type,
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({restaurant: {id: restaurant_id}, user: {jwt: localStorage.getItem('jwt')}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    })
  }
}
