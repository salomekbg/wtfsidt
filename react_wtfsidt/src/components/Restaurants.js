import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import setFavorite from '../actions/setFavorite'

class Restaurants extends Component {
  constructor(){
    super()

    this.state = {
      favorites: []
    }
  }
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
            <input type="checkbox" onChange={this.handleFavoriteCheckBox.bind(this)} name={restaurant.name} id={restaurant.id} />
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

  handleFavoriteCheckBox(event){
    console.log(event.target.checked)
    this.props.setFavorite(event.target.id, event.target.checked)
  }
}

function mapStateToProps(state){
  return {restaurants: state.restaurantsReducer.restaurants, user_id: state.restaurantsReducer.user_id}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setFavorite }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
