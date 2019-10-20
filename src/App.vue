<template>
  <router-view class="view"></router-view>
</template>

<script>
export default {
  watch: {
    $route(to) {
      this.setTitle(to.meta.title);
    },
  },
  methods: {
    setTitle(title) {
      document.title = title;
    },
  },
};
</script>
