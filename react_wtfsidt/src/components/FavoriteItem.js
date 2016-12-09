import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import updateFavorite from '../actions/updateFavorite'
import deleteFavorite from '../actions/deleteFavorite'

class FavoriteItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      rating: props.fav[0].rating,
      notes: props.fav[0].note,
      id: '',
      test: ''
    }
  }

  render(){
    return(
      <li>
        <h2>{this.props.fav[1].name}</h2>
        {this.props.fav[1].address}<br />
        {this.props.fav[1].city}, {this.props.fav[1].zipcode}<br />
        {this.props.fav[1].phone}<br />
        <form onSubmit={this.onFormSubmit.bind(this)}>
          Rating: <input type='text' id={this.props.fav[0].id} onChange={this.handleRatingChange.bind(this)} defaultValue={this.props.fav[0].rating}/><br />
          Notes: <input type='text' id={this.props.fav[0].id} onChange={this.handleNotesChange.bind(this)} defaultValue={this.props.fav[0].note}/><br />
          <button type='submit'>Submit</button>
        </form>
      </li>
    )
  }

  handleRatingChange(event){
    this.setState({rating: event.target.value, id: event.target.id})
  }

  handleNotesChange(event){
    this.setState({notes: event.target.value, id: event.target.id})
  }

  componentWillMount(){
    this.setState({
      rating: this.props.fav[0].rating,
      notes: this.props.fav[0].note
    })
  }

  onFormSubmit(event){
    console.log(this.state)
    event.preventDefault();
    if (this.state.id) {
      this.props.updateFavorite(this.state);
    }
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateFavorite, deleteFavorite }, dispatch)
}

export default connect(null, mapDispatchToProps)(FavoriteItem);
