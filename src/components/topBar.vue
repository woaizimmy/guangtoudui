<template>
  <el-menu
  :default-active="path"
  class="fr"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
    <el-menu-item index="index">首页</el-menu-item>
    <el-menu-item index="photo">图片作品</el-menu-item>
    <el-menu-item index="video">视频作品</el-menu-item>
    <el-menu-item index="about">关于我</el-menu-item>
  </el-menu>
</template>

<script>

export default {
  props:['path'],
  components:{
  },
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      window.location.href = '#/' + key;
    }
  },
};

</script>

<style lang="less" scoped="">
  
</style>
