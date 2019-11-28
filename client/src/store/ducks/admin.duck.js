import { persistReducer } from 'redux-persist';
import { put, takeLatest } from 'redux-saga/effects';
import { getUserByToken } from '../../crud/auth.crud';

export const actionTypes = {
    StoreUsers: '[Store Users] Action',
  AddUser: '[Add User] Action',
  EditUser: '[Edit User] Action',
};

const initialAdminState = {
  users: []
};

export const reducer = (state = initialAdminState, action) => {
    switch (action.type) {
      case actionTypes.StoreUsers:
        return action.payload;
      case actionTypes.AddUser:
        return {users: action.payload};
      case actionTypes.EditUser:
        return action.payload;
      default:
        return state;
    }
  };
  

export const actions = {
  storeUsers: users => ({ type: actionTypes.StoreUsers, payload: { users } }),
  register: user => ({
    type: actionTypes.EditUser,
    payload: { user }
  })
};

export function* saga() {
//   yield takeLatest(actionTypes.Login, function* loginSaga() {
//     yield put(actions.requestUser());
//   });

//   yield takeLatest(actionTypes.Register, function* registerSaga() {
//     yield put(actions.requestUser());
//   });

//   yield takeLatest(actionTypes.UserRequested, function* userRequested() {
//     yield persistor.flush();
//     const { data: user } = yield getUserByToken();
//     yield put(actions.fulfillUser(user));
//   });

//   yield takeLatest(actionTypes.ReloadAuth, function* reloadAuth() {
//     yield persistor.flush();
//   });
}
