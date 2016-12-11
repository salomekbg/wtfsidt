import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render(){
    return(
      <div>
        Movies go here!
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    movies: state.moviesReducer.movies
  }
}

export default connect(mapStateToProps)(Movies);
