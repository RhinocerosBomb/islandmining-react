import React, {useRef} from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector, shallowEqual } from 'react-redux';
import asyncComponent from './components/AsyncFunc';
import authAsyncComponent from './components/AuthAsyncFunc';
import dashboardAsyncComponent from './components/DashboardAsyncFunc';

import { persistor } from './store/store.js';

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

const PublicRoutes = () => {
  //refs to programically conflicting css vendors
  const bootstrapRef = useRef(null);
  const dashboardRef = useRef(null);

  const { isLoggedIn, isAdmin } = useSelector(
    ({ rootReducer: { auth } }) => ({
      isLoggedIn: !!auth.user,
      isAdmin: !!auth.user && auth.user.role === 'admin'
    }),
    shallowEqual
  );

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={asyncComponent(() => import('./Pages/Home'))}
          />
          <RestrictedRouteWhenLoggedIn
            path="/auth"
            isLoggedIn={isLoggedIn}
            component={authAsyncComponent(() => import('./Pages/Auth'), bootstrapRef)}
          />
          <RestrictedRouteWhenLoggedOut
            path="/dashboard"
            component={dashboardAsyncComponent(() => import('./Pages/Dashboard'), dashboardRef)}
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
