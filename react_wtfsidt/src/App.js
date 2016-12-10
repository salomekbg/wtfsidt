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
        <ul>
          <li className="main_links"><Link to={'/signin'}>Sign In</Link></li>
          <li className="main_links"><Link to={'/newuser'}>Sign Up</Link></li>
        </ul>
      )
    } else {
      signIn = (
        <ul>
          <li className="main_links" onClick={this.handleLogOut.bind(this)}><Link to={'/'}>Sign Out</Link></li>
          <li className="main_links" onClick={this.handleFavoritesClick.bind(this)}><Link to={'/favorites'}>Favorites</Link></li>
          <li className="main_links"><Link to={'/menu'}>Menu</Link></li>
        </ul>
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
