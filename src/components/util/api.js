import fetch from 'comp/util/fetch';
import { apiHost,getBaseUrl } from 'comp/util/constants';

console.log('apiHost',apiHost);
console.log('baseUrl',getBaseUrl());
const baseUrl = getBaseUrl();

const api = {
  myApp: baseUrl+'/app/myApp',
}

export async function myApp() {
  const res = fetch(api.myApp, {
      method: 'get',
      body: {}
    })
  return res;
}
