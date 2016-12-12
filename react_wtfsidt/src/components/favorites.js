import React, { Component } from 'react';
import FavoriteItem from './FavoriteItem';
import { connect } from 'react-redux';

class Favorites extends Component {
  render(){
    var favoriteList = this.props.favorites.map((favorite, index) => {
      return (
          <FavoriteItem fav={favorite} key={index}/>
      )
    })
    return(
      <ul className='favorite'>
        {favoriteList}
      </ul>
    )
  }
}

function mapStateToProps(state){
//     here, can just have favorites return the array of favorites, so that you can call state.favorites.
  return {favorites: state.favoritesReducer.favorites}
}

export default connect(mapStateToProps)(Favorites);
