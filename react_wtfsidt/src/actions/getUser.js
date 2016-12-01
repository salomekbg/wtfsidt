import $ from 'jquery';

export default function getUser(formData) {
  return function(dispatch){
    $.ajax({url: "http://localhost:3000/user",
    type: "GET",
    headers: {authorization: localStorage.getItem("authorization")}}).done(function(data){
      debugger
      dispatch({type: 'GET_USER', payload: data})
    })
  }
}
