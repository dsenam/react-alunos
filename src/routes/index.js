import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import PageError from '../pages/PageError';

function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="*" component={PageError} />
    </Switch>
  );
}

export default Routes;
