import $ from 'jquery';
import { browserHistory } from 'react-router'

export default function getMovie(geoValues){
  console.log(geoValues);
  return function (dispatch){
    dispatch({type: 'GET_MOVIE'})
    $.ajax({
      url: 'http://api.fandango.com/v1/?op=moviesbylatlonsearch&lat=40.7050591&lon=+-74.01434499999999&radius=10&pagesize=10&apikey=&sig=4jsx7se2bgxra32yy6msveyp',
      type: 'POST',
      data: JSON.stringify({user: {long: geoValues.long, lat: geoValues.lat}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      dispatch({type: 'SHOW_MOVIE', movie_info: response.movie_info})
      browserHistory.push('/movies')
    })
  }
}
