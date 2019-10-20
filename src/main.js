import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';

import '@/static/js/common';

// 完整引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 视频播放器
import VideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
Vue.use(VideoPlayer);

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== 'production';

new Vue({
  router,
  store,
  el: '#app',
  ...App,
});
