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
      <div className="account_info form-group">
        <h2>Create New Account</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3><label>Username:</label></h3>
          <p><input className="form-control" type="text" onChange={this.handleOnNameChange.bind(this)}></input></p>
          <h3><label>Password:</label></h3>
          <p><input className="form-control" type="password" onChange={this.handleOnPasswordChange.bind(this)}></input></p>
          <p><button type="submit" className="btn btn-lg btn-primary">Create</button></p>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewUser);
