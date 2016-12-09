import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import updateFavorite from '../actions/updateFavorite'

class FavoriteItem extends Component {
  constructor(){
    super()

    this.state = {
      rating: 0,
      notes: 'I do not know',
      id: ''
    }
  }

  render(){
    return(
      <li>
        <h2>{this.props.fav[1].name}</h2>
        {this.props.fav[1].address}<br />
        {this.props.fav[1].city}, {this.props.fav[1].zipcode}<br />
        {this.props.fav[1].phone}<br />
        Rating: {this.props.fav[0].rating}<br />
        Notes: {this.props.fav[0].note}
      </li>
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
    if (this.state.id) {
      this.props.updateFavorite(this.state);
    } else {
      console.log("I hate you")
    }
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateFavorite }, dispatch)
}

function mapStateToProps(state){
  return {favorites: state.favoritesReducer.favorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItem);
