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
      <div className="account_info">
        <label> Enter Zip Code: </label>
        <input type='number' onChange={this.handleOnZipCodeChange.bind(this)} />
        <br/><br/>
        <button onClick={this.handleRestaurantButtonClick.bind(this)}>Get Restaurants</button>
        <button onClick={this.handleMovieButtonClick.bind(this)}>Get Movies</button>
        <button>Get Bars</button>
        <button>Get Live Shows</button>
        <button>Get Concerts</button>
        <button>What's on TV</button>
        <button>Choose For Me!</button>
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
