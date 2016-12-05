import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {
  render(){
    var filteredRestaurants = this.props.restaurants.filter((restaurant) => {
      return restaurant.user_id === this.props.user_id
    })
    var restaurants = filteredRestaurants.map((restaurant) => {
      return (
        <ul>
          <li><h2> {restaurant.name} </h2></li>
          <li>Rating: {restaurant.rating}</li>
          <li>Address: {restaurant.address}, {restaurant.city} {restaurant.zipcode}</li>
          <li><a href={restaurant.url} target="_blank">URL: {restaurant.url}</a></li>
        </ul>
      )
    })
    return(
      <div>
        {restaurants}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {restaurants: state.restaurantsReducer.restaurants, user_id: state.restaurantsReducer.user_id}
}


export default connect(mapStateToProps)(Restaurants);
