<template>
  <!-- <el-carousel :interval="4000" type="card" height="360px"> -->
  <el-carousel>
    <el-carousel-item v-for="(item,index) in list" :key="index">
      <img class="pics" :src="item.img" @click="viewPhoto(item.img)">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { swiperList } from 'comp/util/constants';
export default {
  components:{
  },
  data() {
    return {
      list:swiperList,
    };
  },
  mounted() {
    this.$nextTick(() => {
      
    });
  },
  methods: {
    viewPhoto(url){
      console.log('photo url:',url);
      // window.open(url);
    },
  },
};

</script>

<style lang="less" scoped>
  .pics{
    width:100%;
    height: 500px;
  }
</style>
