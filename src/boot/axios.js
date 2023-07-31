import * as Vue from 'vue';
import axios from 'axios';
import { LocalStorage } from 'quasar';

axios.defaults.headers['Content-Type'] = 'application/json';
// 从 LocalStorage 中读取 token
axios.defaults.headers['Authorization'] = LocalStorage.getItem('jwt-token')
  ? 'Bearer ' + LocalStorage.getItem('jwt-token')
  : '';

export function setAxiosHeaders(token) {
  axios.defaults.headers['Authorization'] = 'Bearer ' + token;
}

Vue.prototype.$axios = axios;
