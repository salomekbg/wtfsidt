import $ from 'jquery';
import { browserHistory } from 'react-router';

export default function getRestaurant(zipcode){
  return function (dispatch){
    $.ajax({
      url: 'https://rails-wsidt.herokuapp.com/restaurants',
      type: 'POST',
      headers: {authorization: localStorage.getItem('jwt')},
      data: JSON.stringify({data: {zipcode: zipcode}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_RESTAURANTS', restaurant_info: response})
      browserHistory.push('/restaurants')
    })
  }
}
