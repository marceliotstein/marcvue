/*
 * MESAbout.vue: simple about page for portfolio website
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mesabout">
    <MESHeader/>
    <div class="about">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
import MESHeader from '@/components/MESHeader';
export default {
  name: 'MESAbout',
  components: {
    MESHeader
  },
  data() {
    return {
      msg: 'About this site.',
    }
  }
}
</script>

<style lang="scss" scoped>
  #mesabout {
    margin: 0 auto;
  }
  .about {
    text-align: center;
  }
</style>
