/*
 * MESHeader.vue: site header
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mes-head">
    <MESBurger/>
    <div class="mes-title-sequence">
      <div class="mes-title"><router-link class="nohighlight" to="/">Marc Eliot Stein</router-link></div>
      <router-link to="/projects/social">Social Media Strategy</router-link>
      <router-link to="/projects/seo">Content, SEO & Metadata</router-link>
      <router-link to="/projects/design">UX & Design</router-link>
      <router-link to="/projects/writing">Writing & Activism</router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store';
import MESBurger from '@/components/MESBurger.vue';

Vue.use('Vuex');

export default {
  store,
  name: 'MESHeader',
  components: {
    MESBurger
  },
}
</script>

<style lang="scss" scoped>
  .mes-title-sequence {
    text-align: center;
    margin: 0 auto;
  }

  #mes-head {
    margin: 0;
  }

  .mes-title {
    text-align: center;
    margin: 0 auto;
    font-size: 5em;
    color: #000000;
  }
</style>
