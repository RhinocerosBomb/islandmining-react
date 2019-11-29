// import { put, takeLatest } from 'redux-saga/effects';

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
}
