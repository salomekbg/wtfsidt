import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import getFavorite from './actions/getFavorite'
import logOut from './actions/logOut'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    if(!localStorage.getItem('jwt')){
      var signIn = (
        <div className='btn-group btn-group-lg' id="sign-in">
          <Link to={'/signin'}><button className='btn btn-primary'>Sign In</button></Link>
          <Link to={'/newuser'}><button className='btn btn-primary'>Sign Up</button></Link>
        </div>
      )
    } else {
      signIn = (
        <div className='btn-group btn-group-lg text-center' id="nav-buttons">
          <Link to={'/'}><button className="btn btn-primary" onClick={this.handleLogOut.bind(this)}>Sign Out</button></Link>
          <Link to={'/favorites'}><button className="btn btn-primary" onClick={this.handleFavoritesClick.bind(this)}>Favorites</button></Link>
          <Link to={'/menu'}><button className="btn btn-primary">Menu</button></Link>
        </div>
      )
    }

    return(
      <div>
        {signIn}
        <h1>What Should I Do Tonight?</h1>
        {this.props.children}
      </div>
    )
  }

  handleFavoritesClick(){
    this.props.getFavorite()
  }

  handleLogOut(){
    localStorage.removeItem('jwt');
    this.props.logOut();
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getFavorite, logOut }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
