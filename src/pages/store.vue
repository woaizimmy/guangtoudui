<template>
  <div class="pageWrap">
    <topBar myTitle="vuex使用store"></topBar>
    <div class="tc">刷新页面看console</div>
  </div>
</template>

<script>
import topBar from 'comp/topBar.vue';

export default {
  components:{
    topBar
  },
  data() {
    return {
      
    };
  },
  mounted() {
    let info = this.$store.getters.infoGet;
    // 防止oldInfo和info指向同一对象
    let oldInfo = JSON.parse(JSON.stringify(info));
    console.log('获取的旧info...')
    console.log(oldInfo);
    
    setTimeout(()=>{
      let obj = {
        page:111,
        totalPage:10,
        list:[1,2,3]
      };
      this.$store.dispatch('infoSet',obj);
      let newInfo = this.$store.getters.infoGet;
      console.log('设置后的新info...')
      console.log(newInfo);
    },2000)
    
  },
  methods: {
    
  },
};

</script>

<style lang="less" scoped>
  
</style>
