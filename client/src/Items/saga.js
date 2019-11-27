import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import {fetchApi} from "../helpers/api";

export function* fetchList() {
  yield takeEvery(actions.FETCH_ITEM_LIST, function*({}) {
    let items = yield call(fetchApi, 'get', 'items')

    yield put({
      type: actions.SET_ITEM_LIST,
      payload: items
    })
  })
}

export function* updateItem() {
  yield takeEvery(actions.UPDATE_ITEM, function*({payload}) {
    let {id, name, description} = payload
    let items = yield call(fetchApi, 'put', `items/${id}`, {name, description})

    yield put({
      type: actions.FETCH_ITEM_LIST
    })
  })
}

export function* deleteItem() {
  yield takeEvery(actions.DELETE_ITEM, function*({payload}) {
    let items = yield call(fetchApi, 'delete', `items/${payload}`)

    yield put({
      type: actions.FETCH_ITEM_LIST
    })
  })
}

export function* createItem() {
  yield takeEvery(actions.CREATE_ITEM, function*({payload}) {
    let {name, description} = payload
    let items = yield call(fetchApi, 'post', 'items', {name, description})

    yield put({
      type: actions.FETCH_ITEM_LIST
    })
  })
}

export default function* rootSaga() {
  yield all([
    fork(fetchList),
    fork(deleteItem),
    fork(updateItem),
    fork(createItem)
  ]);
}

