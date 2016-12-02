import React, { Component } from 'react';
import createUser from '../actions/createUser'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class NewUser extends Component {
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
    this.props.createUser(this.state)
  }

  render() {
    return (
      <div>
        <h1>Create New Account</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p><label>Username:</label></p>
          <p><input type="text" onChange={this.handleOnNameChange.bind(this)}></input></p>
          <p><label>Password:</label></p>
          <p><input type="password" onChange={this.handleOnPasswordChange.bind(this)}></input></p>
          <p><input type="submit" value="Submit"></input></p>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewUser);
