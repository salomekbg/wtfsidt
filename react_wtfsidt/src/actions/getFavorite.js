import $ from 'jquery';

export default function getFavorite(){
  return function (dispatch){
    $.ajax({
      url: 'http://localhost:3000/favorites',
      type: 'GET',
      headers: {authorization: localStorage.getItem('jwt')},
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_FAVORITES', favorite_info: response.favorites})
    })
  }
}
