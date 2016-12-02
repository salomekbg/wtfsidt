import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovie from '../actions/getMovie'


class Index extends Component {
  render(){
    return(
      <div>
        <button onClick={this.handleMovieButtonClick.bind(this)}>Get Movie</button>
      </div>
    )
  }

  handleMovieButtonClick(event){
    event.preventDefault()
    var locationPromise = this.getLocation();
    locationPromise.then(function(loc) { getMovie(loc); }).catch(function(err) { console.log("No location"); });

  }

  getLocation(callback) {
    var promise = new Promise(function(resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position){
                    resolve({lat:position.coords.latitude, long: position.coords.longitude})
                }
            );
        } else {
          reject("Unknown");
        }
    });

    return promise;
  }



}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getMovie }, dispatch)
}

export default connect(null, mapDispatchToProps)(Index);
