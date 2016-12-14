import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getTV from '../actions/getTV'

class Shows extends Component {

  render(){
      if(this.props.shows.length === 0){
        var shows = function(){
          return(
            <ul>
              <li>No TV Shows!</li>
            </ul>
          )
        }
      } else {
      shows = this.props.shows.map((show, index) => {
        return(
          <ul key={index}>
            <li>shows go here</li>
          </ul>
        )
      })}

    return(
      <div className="main">
        {shows}
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    shows: state.showsReducer.shows
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getTV }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Shows);
