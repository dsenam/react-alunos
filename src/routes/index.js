import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import PageError from '../pages/PageError';

function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={PageError} />
    </Switch>
  );
}

export default Routes;
