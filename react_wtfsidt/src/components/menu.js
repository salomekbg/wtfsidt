import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovie from '../actions/getMovie';
import getRestaurant from '../actions/getRestaurant';
import getLiveEvent from '../actions/getLiveEvent';
import setZipCode from '../actions/setZipCode';
import getConcert from '../actions/getConcert';
import getBar from '../actions/getBar';
import getTV from '../actions/getTV'

class Index extends Component {
  render(){
    return(
      <div className="account_info form-group">
        <h2><label> Enter Zip Code: </label></h2>
        <input className="form-control" type='number' onChange={this.handleOnZipCodeChange.bind(this)} value={this.props.zipcode} />
        <br/><br/>
        <button className='btn btn-lg btn-primary' onClick={this.handleRestaurantButtonClick.bind(this)}>Restaurants</button>
        <button className='btn btn-lg btn-primary' onClick={this.handleBarButtonClick.bind(this)}>Bars</button>
        <button className='btn btn-lg btn-primary' onClick={this.handleMovieButtonClick.bind(this)}>Movies</button>
        <button className='btn btn-lg btn-primary' onClick={this.handleLiveEventsButtonClick.bind(this)}>Live Events</button>
        <button className='btn btn-lg btn-primary' onClick={this.handleConcertButtonClick.bind(this)}>Concerts</button>
        <button className='btn btn-lg btn-primary' onClick={this.handleTVButtonClick.bind(this)}>Streaming</button>
      </div>
    )
  }

  handleBarButtonClick(event){
    event.preventDefault()
    this.props.getBar(this.props.zipcode)
  }

  handleTVButtonClick(event){
    event.preventDefault()
    this.props.getTV(this.props.zipcode)
  }

  handleOnZipCodeChange(event){
    this.props.setZipCode(event.target.value)
  }

  handleConcertButtonClick(event){
    event.preventDefault()
    this.props.getConcert(this.props.zipcode)
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
  return bindActionCreators({ getMovie, getRestaurant, getLiveEvent, setZipCode, getConcert, getBar, getTV }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
