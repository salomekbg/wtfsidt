import React from 'react';
import $ from 'jquery';

export default function authUsers() {
  debugger
  $.ajax({
     url: '/users',
     type:"GET",
     data: JSON.stringify({auth: {name: name, password: password}}),
     contentType:"application/json; charset=utf-8",
     dataType:"json")}.done(function(data){
       dispatch({type: 'AUTH_USERS', payload: data})
     })
}
