import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getFavorites(jwt){
  return function (dispatch){
    $.ajax({
      url: 'http://localhost:3000/restaurants',
      type: 'POST',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({data: {zipcode: formValues.zipcode, jwt: jwt}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_RESTAURANTS', restaurant_info: response.restaurants})
      browserHistory.push('/restaurants')
    })
  }
}
