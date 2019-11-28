import React from 'react';
import { Route, Redirect, HashRouter as Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { useSelector, shallowEqual } from 'react-redux';
import asyncComponent from './components/AsyncFunc';

import {persistor} from './store/store.js';

const RestrictedRouteWhenLoggedOut = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const RestrictedRouteWhenLoggedIn = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const RestrictedRouteWhenNotAdmin = ({
  component: Component,
  isAdmin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const PublicRoutes = ({ history }) => {
  const { isLoggedIn, isAdmin } = useSelector(
    ({ rootReducer: { auth } }) => ({
      isLoggedIn: !!auth.user,
      isAdmin: !!auth.user && auth.user.role === 'admin'
    }),
    shallowEqual
  );

  return (
    <PersistGate loading={null} persistor={persistor}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={asyncComponent(() => import('./Pages/Home'))}
        />
        <RestrictedRouteWhenLoggedIn
          path="/auth"
          isLoggedIn={isLoggedIn}
          component={asyncComponent(() => import('./Pages/Auth'))}
        />
        <RestrictedRouteWhenLoggedOut
          path="/dashboard"
          component={asyncComponent(() => import('./Pages/Dashboard'))}
          isLoggedIn={isLoggedIn}
        />
        <RestrictedRouteWhenNotAdmin
          path="/admin"
          component={asyncComponent(() => import('./Pages/Admin'))}
          isAdmin={isAdmin}
        />
      </Switch>
    </Router>
    </PersistGate>
  );
};

export default PublicRoutes;
