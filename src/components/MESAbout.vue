/*
 * MESAbout.vue: simple about page for portfolio website
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mesabout">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MESAbout',
  data() {
    return {
      msg: 'About this site.',
    }
  }
}
</script>

<style lang="scss" scoped>
  #mesabout {
    text-align: center;
    margin: 0 auto;
  }
</style>
