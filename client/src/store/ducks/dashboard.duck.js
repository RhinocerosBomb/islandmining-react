import { put, takeLatest } from 'redux-saga/effects';
import { dashboard as getDashboard } from '../../crud/dashboard.crud';
import { actions as authActions } from './auth.duck.js';

export const actionTypes = {
  Dashboard: '[Dashboard] Action',
  DashboardLoaded: '[Load Dashboard] Action',
  AfterStartKYC: '[After KYC] Dashboard API',
  SubmitUserInformation: '[Submit User Information] Dashboard API',
  VerifyEthWallet: '[Verify Ethereum Wallet] Dashboard API'
};

const initialDashboardState = {
  kycStatus: undefined,
  userInformation: undefined,
  affiliateProgram: undefined,
  cryptocurrencyAddresses: undefined,
  tierRewards: undefined,
  cryptoPrice: {
    dateTime: '',
    BTCUSDT: 0,
    ETHUSDT: 0
  }
};

export const reducer = (state = initialDashboardState, action) => {
  switch (action.type) {
    case actionTypes.DashboardLoaded:
      return action.payload;
    default:
      return state;
  }
};

export const actions = {
  dashboard: () => ({ type: actionTypes.Dashboard }),
  fulfillDashboard: data => ({
    type: actionTypes.DashboardLoaded,
    payload: data
  }),
  submitUserInformation: (user, authToken) => ({
    type: actionTypes.SubmitUserInformation,
    payload: { user, authToken }
  }),
  afterStartKYC: (user, authToken) => ({
    type: actionTypes.AfterStartKYC,
    payload: { user, authToken }
  }),
  verifyEthWallet: (user, authToken) => ({
    type: actionTypes.VerifyEthWallet,
    payload: {user, authToken}
  })
};

export function* saga() {
  yield takeLatest(actionTypes.Dashboard, function* dashboardSaga() {
    const { data } = yield getDashboard();
    yield put(actions.fulfillDashboard(data));
  });

  yield takeLatest(
    actionTypes.SubmitUserInformation,
    function* submitUserInformationSaga(action) {
      yield put(authActions.reloadAuth(action.payload));
    }
  );

  yield takeLatest(actionTypes.AfterStartKYC, function* afterStartKYCSaga(
    action
  ) {
    yield put(authActions.reloadAuth(action.payload));
    window.location.href = action.payload.user.kycStatus.kycUrl;
  });

  yield takeLatest(actionTypes.VerifyEthWallet, function* verifyEthWalletSage(action) {
    yield put(authActions.reloadAuth(action.payload));
  });
}
