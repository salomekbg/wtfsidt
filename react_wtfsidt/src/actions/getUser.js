import $ from 'jquery';

export default function getUser(formData) {
  let request = $.ajax({url: "http://localhost:3000/sessions",
                        type: "GET"
                      })

  return function(dispatch){
    request.done(function (data){
      dispatch({type: 'GET_USER', payload: data})
    })
  }
}
