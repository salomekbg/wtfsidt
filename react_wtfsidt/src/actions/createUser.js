import $ from 'jquery';
import { browserHistory } from 'react-router'

export default function createUser(formValues){
  return function (dispatch){
    dispatch({type: 'CREATING_USER'})
    $.ajax({
      url: 'https://rails-wsidt.herokuapp.com/users',
      type: 'POST',
      data: JSON.stringify({user: {name: formValues.name, password: formValues.password}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      if (response.error){
        alert('Please check username and password.')
      } else {
        localStorage.setItem('jwt', response.jwt)
        dispatch({type: 'LOGIN_USER', current_user: response.current_user})
        browserHistory.push('/menu')
      }
    })
  }
}
