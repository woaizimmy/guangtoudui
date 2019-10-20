import fetch from '@/static/js/fetch';

export default (api, options = {}) => {
  return fetch(api, options)
    .then((data) => {
      return Promise.resolve(data);
    }, (response) => {
      const { status } = response;
      // 状态码处理
      if (status === 401) {
        console.error(`登录过期, status:${status}`);
        return Promise.reject(response);
      }else if (status >= 300) {
        // console.error(`网络异常, status:${status}`);
      }
      return Promise.reject(`网络异常, status:${status}`);
    });
};
