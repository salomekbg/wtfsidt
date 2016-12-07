import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Signin from './components/Signin';
import NewUser from './components/NewUser';
import Restaurants from './components/Restaurants';
import Menu from './components/menu'
import Favorites from './components/favorites';

export default (
  <Route path="/" component={App} >
    <Route path="signin" component={Signin} />
    <Route path="newuser" component={NewUser} />
    <Route path="menu" component={Menu} />
    <Route path="restaurants" component={Restaurants} />
    <Route path="favorites" component={Favorites} />
  </Route>
)
