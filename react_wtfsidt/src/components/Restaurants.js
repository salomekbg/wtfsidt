import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {
  render(){
    var restaurants = this.props.restaurants.map((restaurant) => {
      return (
        <ul>
          <li><h2>{restaurant.name}</h2></li>
          <li>Rating: {restaurant.rating}</li>
          <li>Address: {restaurant.address}, {restaurant.city} {restaurant.zipcode}</li>
          <li>Phone: {restaurant.phone}</li>
          <li className="last"><a href={restaurant.url} target="_blank">URL: Find on Yelp</a></li>
          <br />
        </ul>
      )
    })
    return(
      <div className="main">
        {restaurants}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {restaurants: state.restaurantsReducer.restaurants, user_id: state.restaurantsReducer.user_id}
}

export default connect(mapStateToProps)(Restaurants);
