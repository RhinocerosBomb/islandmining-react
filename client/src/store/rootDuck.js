import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "./ducks/auth.duck";
import * as dashboard from "./ducks/dashboard.duck";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  dashboard: dashboard.reducer
});

export function* rootSaga() {
  yield all([auth.saga(), dashboard.saga()]);
}
