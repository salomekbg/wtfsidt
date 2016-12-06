import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Restaurants extends Component {
  render(){
    var restaurants = this.props.restaurants.map((restaurant, index) => {
      return (
          <ul key={index}>
            <li><h2>{restaurant.name}</h2></li>
            <li>Rating: {restaurant.rating}</li>
            <li>Address: {restaurant.address}, {restaurant.city} {restaurant.zipcode}</li>
            <li>Phone: {restaurant.phone}</li>
            <li className="last"><a href={restaurant.url} target="_blank">URL: Find on Yelp</a></li>
            <label htmlFor="fav_restaurant">Mark as Favorite</label>
            <input type="checkbox" name="fav_restaurant" id="fav_restaurant" />
            <br />
          </ul>
      )
    })

    return(
      <div className="main">
        <ul>
        <li><Link to={'/menu'}>Back to Menu</Link></li>
        </ul>
        {restaurants}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {restaurants: state.restaurantsReducer.restaurants, user_id: state.restaurantsReducer.user_id}
}

export default connect(mapStateToProps)(Restaurants);
