import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Signin from './components/Signin';
import NewUser from './components/NewUser';
import Restaurants from './components/Restaurants';
import Menu from './components/menu'
import Favorites from './components/Favorites';
import Movies from './components/Movies';
import Events from './components/Events';
import Bars from './components/Bars';
import Concerts from './components/Concerts';
import TVShows from './components/TVShows'


export default (
  <Route path="/" component={App} >
    <Route path="signin" component={Signin} />
    <Route path="newuser" component={NewUser} />
    <Route path="menu" component={Menu} />
    <Route path="restaurants" component={Restaurants} />
    <Route path="favorites" component={Favorites} />
    <Route path="movies" component={Movies} />
    <Route path="events" component={Events} />
    <Route path="bars" component={Bars} />
    <Route path="concerts" component={Concerts} />
    <Route path="tv" component={TVShows} />
  </Route>
)
