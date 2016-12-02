import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to={'/signin'}>Sign In</Link></li>
          <li><Link to={'/newuser'}>New User</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
