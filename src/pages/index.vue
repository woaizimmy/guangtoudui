<template>
  <el-container>
    <el-row class="menu">
      <el-row class="wrapper">
        <img class="avatar" :src="avatarUrl">
        <span class="intro">光头堆</span>
        <topBar path="index"></topBar>
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

        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>大疆官方精选、知乎视频大赛获奖：「不可能」元气主</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="viewVideo('https://www.skypixel.com/videos/50588ce6-89fd-43ce-be37-3badad42b644')">去看视频</el-button>
              </div>
              <el-link href="https://www.skypixel.com/videos/50588ce6-89fd-43ce-be37-3badad42b644" target="_blank">
                <img class="w1" :src="videoCover">
              </el-link>
            </el-card>
            <!-- <el-link href="https://www.skypixel.com/videos/50588ce6-89fd-43ce-be37-3badad42b644" target="_blank" class="video-link">大疆官方精选、知乎视频大赛获奖：「不可能」元气主</el-link> -->
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>大疆官方精选、知乎视频大赛获奖：「不可能」元气主</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="viewVideo('https://www.skypixel.com/videos/50588ce6-89fd-43ce-be37-3badad42b644')">去看视频</el-button>
              </div>
              <el-link href="https://www.skypixel.com/videos/50588ce6-89fd-43ce-be37-3badad42b644" target="_blank">
                <img class="w1" :src="videoCover">
              </el-link>
            </el-card>
          </el-col>
        </el-row>
        <el-divider>
          <el-link href="#/video">更多视频作品</el-link>
        </el-divider>
        
  
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
const videoCover = require('static/img/video.png');

export default {
  components: {
    topBar,swiperPhotos,
  },
  data() {
    return {
      avatarUrl:avatar,
      videoCover:videoCover,
      videoUrl:'https://cn-videos.dji.net/video_trans/e65bd68e56614f38b412a417c2edbabf/720.mp4',
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
    },
    viewVideo(url){
      window.open(url);
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

