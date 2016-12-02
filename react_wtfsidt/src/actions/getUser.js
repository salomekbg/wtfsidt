import $ from 'jquery';

export default function getUser(formData) {
  debugger;
  let request = $.ajax({url: "http://localhost:3000/users",
                        type: "POST"
                      })

  return function(dispatch){
    request.done(function (data){
      debugger;
      dispatch({type: 'GET_USER', payload: data})
    })
  }
}
