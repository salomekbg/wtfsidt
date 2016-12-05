import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovie from '../actions/getMovie';
import getRestaurant from '../actions/getRestaurant'


class Index extends Component {
  constructor(props){
    super(props)

    this.state = {
      zipcode: ''
    }
  }
  render(){
    return(
      <div>
        <label>Zip Code</label>
        <input type='number' onChange={this.handleOnZipCodeChange.bind(this)} />
        <button onClick={this.handleMovieButtonClick.bind(this)}>Get Movie</button>
        <button onClick={this.handleRestaurantButtonClick.bind(this)}>Get Restaurant</button>
      </div>
    )
  }

  handleOnZipCodeChange(event){
    this.setState({zipcode: event.target.value})
  }

  handleRestaurantButtonClick(event){
    event.preventDefault()
    this.props.getRestaurant(this.state, localStorage.getItem('jwt'))
    // var locationPromise = this.getLocation();
    // locationPromise.then(function(loc) { this.props.getMovie(loc); }).catch(function(err) { console.log("No location"); });
  }

  handleMovieButtonClick(event){
    event.preventDefault()
    this.props.getMovie(this.state)
    // var locationPromise = this.getLocation();
    // locationPromise.then(function(loc) { this.props.getMovie(loc); }).catch(function(err) { console.log("No location"); });
  }
  //
  // getLocation(callback) {
  //   var promise = new Promise(function(resolve, reject) {
  //       if (navigator.geolocation) {
  //           navigator.geolocation.getCurrentPosition(
  //               function(position){
  //                   resolve({lat:position.coords.latitude, long: position.coords.longitude})
  //               }
  //           );
  //       } else {
  //         reject("Unknown");
  //       }
  //   });
  //
  //   return promise;
  // }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getMovie, getRestaurant }, dispatch)
}

export default connect(null, mapDispatchToProps)(Index);
