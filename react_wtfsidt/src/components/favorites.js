import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import updateFavorite from '../actions/updateFavorite'

class Favorites extends Component {
  constructor(){
    super()

    this.state = {
      rating: '',
      notes: '',
      id: ''
    }
  }

  render(){
    var favorites = this.props.favorites.map((favorite, index) => {
      return (
          <ul key={index}>
            <li><h2>{favorite[1].name}</h2></li>
            <li>Address: {favorite[1].address}, {favorite[1].city} {favorite[1].zipcode}</li>
            <li>Phone: {favorite[1].phone}</li>
            <li><a href={favorite[1].url} target="_blank">URL: Find on Yelp</a></li>
            <form onSubmit={this.onFormSubmit.bind(this)} >
              Rating: <input type='number' id={favorite[0].id} onChange={this.handleRatingChange.bind(this)} placeholder='add rating' defaultValue={favorite[0].rating} /><br />
              Notes: <input type='text' id={favorite[0].id} onChange={this.handleNotesChange.bind(this)} placeholder='add notes' defaultValue={favorite[0].note} /><br />
              <input type='submit' />
            </form>
          </ul>
      )
    })
    return(
      <div>
        {favorites}
      </div>
    )
  }

  handleRatingChange(event){
    this.setState({rating: event.target.value, id: event.target.id})
  }

  handleNotesChange(event){
    this.setState({notes: event.target.value, id: event.target.id})
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.updateFavorite(this.state);
    this.setState({rating: this.state.rating, notes: this.state.notes})
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateFavorite }, dispatch)
}

function mapStateToProps(state){
  return {favorites: state.favoritesReducer.favorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
