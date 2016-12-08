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
            {!favorite[0].rating ? <li>Your Rating: No Rating Yet</li> : <li>Your Rating: {favorite[0].rating}</li>}
            {!favorite[0].note ? <li>Your Notes: No Notes Yet</li> : <li>Your Notes: {favorite[0].note}</li>}
            <li className="last">Notes: {favorite[0].note}</li>
            <form onSubmit={this.onFormSubmit.bind(this)} >
              <input type='number' id={favorite[0].id} onChange={this.handleRatingChange.bind(this)} placeholder='add rating' /><br />
              <input type='text' id={favorite[0].id} onChange={this.handleNotesChange.bind(this)} placeholder='add notes' /><br />
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
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateFavorite }, dispatch)
}

function mapStateToProps(state){
  return {favorites: state.favoritesReducer.favorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
