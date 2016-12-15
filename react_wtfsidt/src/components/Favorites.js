import React, { Component } from 'react';
import FavoriteItem from './FavoriteItem';
import { connect } from 'react-redux';

class Favorites extends Component {
  render(){
    if(this.props.favorites.length === 0){
      var favoriteList = <li className='no-items'>You have no favorites!</li>
    } else {
    favoriteList = this.props.favorites.map((favorite, index) => {
      return (
          <FavoriteItem fav={favorite} key={index}/>
      )
    })}
    return(
      <div className='favorite container'>
        <div className='row'>
          {favoriteList}
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {favorites: state.favoritesReducer.favorites}
}

export default connect(mapStateToProps)(Favorites);
