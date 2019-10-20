<template>
  <el-container>
    <el-row class="menu">
      <el-row class="wrapper">
        <img class="avatar" :src="avatarUrl">
        <span class="intro">光头堆</span>
        <topBar></topBar>
      </el-row>
    </el-row>
    <el-main class="content">
      <el-row class="wrapper">
        <el-page-header class="nav-title" @back="turnTo('photo')" title="更多" content="图片作品精选"></el-page-header>
        <swiperPhotos></swiperPhotos>
        <el-divider>
          <el-link href="#/photo">更多图片作品</el-link>
        </el-divider>
        <el-page-header class="nav-title" @back="turnTo('video')" title="更多" content="视频作品"></el-page-header>

        <video class="w1" controls>
          <source src="https://cn-videos.dji.net/video_trans/e65bd68e56614f38b412a417c2edbabf/720.mp4" type="video/mp4">
          您的浏览器不支持 HTML5 video 标签。
        </video>

        <el-link href="https://www.skypixel.com/videos/50588ce6-89fd-43ce-be37-3badad42b644" target="_blank" class="video-link">大疆官方精选、知乎视频大赛获奖：「不可能」元气主</el-link>
  
        <!-- <el-divider>
          <el-link href="https://www.skypixel.com/videos/50588ce6-89fd-43ce-be37-3badad42b644" target="_blank">大疆官方精选、知乎视频大赛获奖：「不可能」元气主</el-link>
        </el-divider> -->
      </el-row>
    </el-main>
    <el-footer class=footer>
      <p>欢迎光临光头堆的个人网站，联系光头堆：
        <a class="contact" href="" target="_blank"><i class="iconfont icon-zhihu"></i></a>
      </p>
      <p>本站使用 Vue + elementUI 构建</p>
      <p>本站主题设计及构建者：风落星雨
        <!-- <el-link type="primary" href="https://github.com/woaizimmy" target="_blank">风落星雨</el-link> -->
        <a class="contact" href="https://github.com/woaizimmy" target="_blank"><i class="iconfont icon-github"></i></a>
        <a class="contact" href="https://me.csdn.net/qq_17850449" target="_blank"><i class="iconfont icon-csdn"></i></a>
      </p>
    </el-footer>
  </el-container>
</template>
<script>
import {  } from 'comp/util/api';
import topBar from 'comp/topBar.vue';
import swiperPhotos from 'comp/swiperPhotos.vue';
const avatar = require('static/img/avatar.jpg');

export default {
  components: {
    topBar,swiperPhotos,
  },
  data() {
    return {
      avatarUrl:avatar,
      videoUrl:'https://cn-videos.dji.net/video_trans/e65bd68e56614f38b412a417c2edbabf/720.mp4',
      playerOptions:{
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: "https://cn-videos.dji.net/video_trans/e65bd68e56614f38b412a417c2edbabf/720.mp4" //url地址
        }],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      // this.pageInit();
    });
  },
  methods: {
    turnTo(path){
      window.location.href = '#/' + path;
    }
  },
};
</script>

<style lang="less" scoped>
  .menu{
    width: 100%;
    background: #545c64;
    
  }
</style>

