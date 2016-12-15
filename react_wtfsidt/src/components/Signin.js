import React, { Component } from 'react';
import getUser from '../actions/getUser'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: ''
    }
  }

  handleOnNameChange(event){
    this.setState({name: event.target.value})
  }

  handleOnPasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getUser(this.state)
  }

  render() {
    return (
      <div className="account_info form-group">
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3><label>Username:</label></h3>
          <p><input className="form-control" type="text" onChange={this.handleOnNameChange.bind(this)}></input></p>
          <h3><label>Password:</label></h3>
          <p><input className="form-control" type="password" onChange={this.handleOnPasswordChange.bind(this)}></input></p>
          <p><button className="btn btn-lg btn-primary" type="submit">Submit</button></p>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signin);
