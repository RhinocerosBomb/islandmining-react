import axios from './axios';

export const URL = 'http://localhost:9000/';
export const DASHBOARD_PATH = 'dashboard';
export const SUBMIT_PENDING = 'submitPending';
export const SUBMIT_USER_INFORMATION = 'submitInformation';
export const VERIFY_ETH_WALLET = 'verifyEthereum';

export function dashboard(email, password) {
  return axios.get(URL + DASHBOARD_PATH);
}

export function submitPending() {
  return axios.post(URL + SUBMIT_PENDING);
}

export function submitUserInformation(
  firstName,
  lastName,
  address,
  city,
  province,
  DOB,
  phone,
  citizenship,
  citizenship_2,
  residency
) {
  return axios.post(URL + SUBMIT_USER_INFORMATION, {
    userInformation: {
      firstName,
      lastName,
      address,
      city,
      province,
      DOB,
      phone,
      citizenship,
      citizenship_2,
      residency
    }
  });
}

export function verifyEthWallet(address) {
  return axios.post(URL + VERIFY_ETH_WALLET, {address});
}
