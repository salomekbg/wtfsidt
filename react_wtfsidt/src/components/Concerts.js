import React, { Component } from 'react';
import { connect } from 'react-redux';

class Concerts extends Component {
  render(){
    return(
      <div>
        Concerts go here!
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    movies: state.concertsReducer.concerts
  }
}

export default connect(mapStateToProps)(Concerts);
