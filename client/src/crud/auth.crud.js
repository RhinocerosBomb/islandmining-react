import axios from './axios';

export const URL = 'http://localhost:9000/';
export const LOGIN_PATH = 'login';
export const REGISTER_PATH = 'register';
export const REQUEST_PASSWORD_PATH = 'forgot-password';
export const ME_PATH = 'me';

export function login(email, password) {
  return axios.post(URL + LOGIN_PATH, { username: email, password });
}

export function register(email, password, referral) {
  return axios.post(URL + REGISTER_PATH, { username: email, password, referral });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_PATH, { email });
}

export function getUserByToken() {
  return axios.get(URL + ME_PATH);
}
