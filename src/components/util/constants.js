// webpack注入
const apiHost = _WEBPACK_API_DOMAIN || {};
const apiModules = _WEBPACK_API_MODULES;

if (_WEBPACK_BUILD_MODE === 'prod') { // 生产模式
  apiModules.forEach((item) => {
    apiHost[item] = `${location.protocol}//${location.host}/`;
  });
}else if (_WEBPACK_BUILD_MODE === 'st') { // 测试模式
  apiModules.forEach((item) => {
    apiHost[item] = `http://test.com${_WEBPACK_PUBLIC_PATH}`;
  });
}else if (_WEBPACK_BUILD_MODE === 'dev') {  // 开发模式
  apiModules.forEach((item) => {
    // 后台的ip+端口
    apiHost[item] = `http://10.75.11.111:8080${_WEBPACK_PUBLIC_PATH}`;
  });
}

function getBaseUrl() {
  // 若是开发模式，baseUrl后加/mock，
  // 然后接口会通过代理（build/dev-server.js中的proxy）进行跨域访问
  var baseUrl = process.env.NODE_ENV === 'development' ? '/mock' : '';
  return baseUrl;
}


import pic1 from '@/static/img/gallery1/1.png';
import pic2 from '@/static/img/gallery1/2.png';
import pic3 from '@/static/img/gallery1/3.png';
const swiperList = [
  {
    img:pic1
  },
  {
    img:pic2
  },
  {
    img:pic3
  }
];

export { apiHost,getParams,getBaseUrl,swiperList };

export default apiHost;

