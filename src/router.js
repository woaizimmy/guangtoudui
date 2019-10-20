import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routes = [
  {
    path: '/',
    component: resolve => require(['@/pages/index.vue'], resolve),
    meta: {
      title: '光头堆',
    },
    hidden: true,
  },
  {
    path: '/index',
    component: resolve => require(['@/pages/index.vue'], resolve),
    meta: {
      title: '光头堆',
    },
    hidden: true,
  },
  {
    path: '/about',
    component: resolve => require(['./pages/about.vue'], resolve),
    meta: {
      title: '关于我',
    },
    hidden: true,
  },
  {
    path: '/video',
    component: resolve => require(['./pages/video.vue'], resolve),
    meta: {
      title: '视频作品',
    },
    hidden: true,
  },
  {
    path: '/photo',
    component: resolve => require(['./pages/photo.vue'], resolve),
    meta: {
      title: '图片作品',
    },
    hidden: true,
  },

  // 列表页和详情页的路由示例
  /*
  {
    path: '/news',
    component: resolve => require(['./pages/news.vue'], resolve),
    meta: {
      title: '新闻',
    },
    hidden: true,
  },
  {
    path: '/news/:id',
    component: resolve => require(['./pages/newsDetail.vue'], resolve),
    meta: {
      title: '新闻详情',
    },
    hidden: true,
  },
  */
];

[
  // 'otherPage',  //page下的文件夹otherPage，其含vue页面和router.js(结构如上routes)
].forEach(m => routes = routes.concat(require(`./pages/${m}/router`).default));

routes.push({
  path: '*',
  hidden: true,
  redirect: {
    path: '/'
  }
});

export default new Router({ routes });
