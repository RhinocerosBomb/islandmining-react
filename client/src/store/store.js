import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {createBrowserHistory as createHistory} from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from "redux-persist";

import { rootReducer, rootSaga } from "./rootDuck";
import { createLogger } from 'redux-logger';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(
  combineReducers({
    rootReducer,
    router: routerReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares, createLogger()))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export { store, history };
