import React, { Component } from 'react';
import { connect } from 'react-redux';

class Events extends Component {
  render(){
    return(
      <div>
        Events go here!
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    movies: state.eventsReducer.events
  }
}

export default connect(mapStateToProps)(Events);
