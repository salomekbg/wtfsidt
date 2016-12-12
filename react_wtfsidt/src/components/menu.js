import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovie from '../actions/getMovie';
import getRestaurant from '../actions/getRestaurant'
import getLiveEvent from '../actions/getLiveEvent'
import setZipCode from '../actions/setZipCode'
import getConcert from '../actions/getConcert'

class Index extends Component {
  render(){
    return(
      <div className="account_info">
        <label> Enter Zip Code: </label>
        <input type='number' onChange={this.handleOnZipCodeChange.bind(this)} value={this.props.zipcode} />
        <br/><br/>
        <button onClick={this.handleRestaurantButtonClick.bind(this)}>Get Restaurants</button>
        <button onClick={this.handleMovieButtonClick.bind(this)}>Get Movies</button>
        <button onClick={this.handleLiveEventsButtonClick.bind(this)}>Get Live Events</button>
        <button onClick={this.handleConcertButtonClick.bind(this)}>Get Concerts</button>
        <button>What is on TV</button>
        <button>Choose For Me!</button>
      </div>
    )
  }

  handleOnZipCodeChange(event){
    this.props.setZipCode(event.target.value)
  }

  handleConcertButtonClick(event){
    event.preventDefault()
    this.props.getConcert(this.state)
  }

  handleLiveEventsButtonClick(event){
    event.preventDefault()
    this.props.getLiveEvent(this.props.zipcode)
  }

  handleRestaurantButtonClick(event){
    event.preventDefault()
    this.props.getRestaurant(this.props.zipcode)
    // var locationPromise = this.getLocation();
    // locationPromise.then(function(loc) { this.props.getMovie(loc); }).catch(function(err) { console.log("No location"); });
  }

  handleMovieButtonClick(event){
    event.preventDefault()
    this.props.getMovie(this.props.zipcode)
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

function mapStateToProps(state){
  return {zipcode: state.usersReducer.zip_code}

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getMovie, getRestaurant, getLiveEvent, setZipCode, getConcert }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
