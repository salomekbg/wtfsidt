import React, { Component } from 'react';
import FavoriteItem from './FavoriteItem';
import { connect } from 'react-redux';

class Favorites extends Component {
  render(){
    var favorites = this.props.favorites.map((favorite, index) => {
      return (
          <FavoriteItem fav={favorite} key={index}/>
      )
    })
    return(
      <ul className='favorite'>
        {favorites}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {favorites: state.favoritesReducer.favorites}
}

export default connect(mapStateToProps)(Favorites);
