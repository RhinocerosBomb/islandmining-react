import React from 'react';
import { Route, Redirect, Router, Switch } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import asyncComponent from './helpers/AsyncFunc';

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

const PublicRoutes = ({ history }) => {
  const { isLoggedIn } = useSelector(
    ({ rootReducer: { auth } }) => ({
      isLoggedIn: auth.user != null
    }),
    shallowEqual
  );

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={'/'}
          component={asyncComponent(() => import('./Pages/Home'))}
        />
        <RestrictedRouteWhenLoggedIn
          path={'/auth'}
          isLoggedIn={isLoggedIn}
          component={asyncComponent(() => import('./Pages/Auth/Auth'))}
        />
        <RestrictedRouteWhenLoggedOut
          path="/dashboard"
          component={asyncComponent(() => import('./Pages/Dashboard'))}
          isLoggedIn={isLoggedIn}
        />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
