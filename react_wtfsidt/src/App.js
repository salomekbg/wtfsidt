import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return(
      <div>
        <Link to={'/signin'}>Sign In</Link>
        {this.props.children}
      </div>
    )
  }
}
