import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    if(!localStorage.getItem('jwt')){
      var signIn = (
        <ul>
          <li className="main_links"><Link to={'/signin'}>Sign In</Link></li>
          <li className="main_links"><Link to={'/newuser'}>Sign Up</Link></li>
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
}
