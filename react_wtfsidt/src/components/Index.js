import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovie from '../actions/getMovie'


class Index extends Component {
  render(){
    return(
      <div>
        <button onClick={this.handleMovieButtonClick.bind(this)}>Get Movie</button>
      </div>
    )
  }

  handleMovieButtonClick(event){
    event.preventDefault()
    console.log('movie button clicked')
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getMovie }, dispatch)
}

export default connect(null, mapDispatchToProps)(Index);
