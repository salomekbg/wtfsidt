import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    debugger;
    var combo = [];
    for (var restaurant in this.props.restaurants) {combo.push(this.props.restaurants[restaurant])}
    var restaurants = combo[0].map((restaurant, index) => {
      return (
          <ul key={index}>
            <li><h2>{restaurant.name}</h2></li>
            <li>Rating: {restaurant.rating}</li>
            <li>Address: {restaurant.address}, {restaurant.city} {restaurant.zipcode}</li>
            <li>Phone: {restaurant.phone}</li>
            <li className="last"><a href={restaurant.url} target="_blank">URL: Find on Yelp</a></li>
            <label htmlFor="fav_restaurant">Mark as Favorite</label>
            {combo[1].includes(restaurant.id) ? <input type="checkbox" checked='true' onChange={this.handleFavoriteCheckBox.bind(this)} name={restaurant.name} id={restaurant.id} /> : <input type="checkbox" checked='false' onChange={this.handleFavoriteCheckBox.bind(this)} name={restaurant.name} id={restaurant.id} />}
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

  componentWillMount(){

  }

  handleFavoriteCheckBox(event){
    this.props.setFavorite(event.target.id, event.target.checked)
  }
}

function mapStateToProps(state){
  return {
    restaurants: state.restaurantsReducer.restaurants,
    favorites: state.favoritesReducer.favorites
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setFavorite }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
