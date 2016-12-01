import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Signin from './components/Signin';

export default (
  <Route path="/" component={App} >
    <Route path="signin" component={Signin} />
  </Route>
)
