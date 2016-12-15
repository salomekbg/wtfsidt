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
    var combo = [];
    for (var restaurant in this.props.restaurants) {combo.push(this.props.restaurants[restaurant])}
    if(this.props.restaurants.length === 0){
      var components = <li>You have no restaurants</li>
    } else {
    components = combo[0].map((restaurant, index) => {
      return (
        <div className="col-md-4" key={index}>
          <h3><a href={restaurant.url} target="_blank">{restaurant.name}</a></h3>
          <li className="height">{restaurant.image === null ? <img src="https://s29.postimg.org/u899qm0lz/no_image.jpg" /> : <img src={restaurant.image} />}</li>
          <li>Yelp Rating: {restaurant.rating}</li>
          <li>{restaurant.address}</li>
          <li>{restaurant.city} {restaurant.zipcode}</li>
          {restaurant.phone !== null ? <li className="last">Phone: {restaurant.phone}</li> : null}
          <li>Categories: {restaurant.categories}</li>
          <label htmlFor="fav_restaurant">Mark as Favorite </label>
          {combo[1].includes(restaurant.id) ? <input type="checkbox" defaultChecked="true" onChange={this.handleFavoriteCheckBox.bind(this)} name={restaurant.name} id={restaurant.id} /> : <input type="checkbox" onChange={this.handleFavoriteCheckBox.bind(this)} name={restaurant.name} id={restaurant.id} />}
        </div>
      )
    })}

    return(
      <div className='container main components'>
        <div className='row'>
          {components}
        </div>
      </div>
    )
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
