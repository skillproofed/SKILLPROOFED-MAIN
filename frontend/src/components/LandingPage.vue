<template>
  <div class="hello">
    <BgImage />
  </div>
</template>

<script>
import BgImage from './BgImage.vue';
export default {
  components: {
    BgImage,
  }
}
</script>

<style scoped>
.hello {
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
}
</style>