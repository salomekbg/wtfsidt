import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Signin from './components/signin';
import NewUser from './components/newUser';
import Movies from './components/movies';
import Menu from './components/menu'

export default (
  <Route path="/" component={App} >
    <Route path="signin" component={Signin} />
    <Route path="newuser" component={NewUser} />
    <Route path="menu" component={Menu} />
    <Route path="movies" component={Movies} />
  </Route>
)
