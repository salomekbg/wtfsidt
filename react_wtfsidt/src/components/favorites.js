import React, { Component } from 'react';

class Favorites extends Component {
  render(){
    return(
      <div>
        Favorites go here!
      </div>
    )
  }

  function mapStateToProps(state){
    return {restaurants: state.restaurantsReducer.restaurants, user_id: state.restaurantsReducer.user_id}
  }
}

export default Favorites
