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
      <div class="mes-subtitle">Social publishing & advanced technology development.</div>
    </div>
    <div class="clear"></div> 
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
  .clear {
    clear: both;
  }

  .mes-title-sequence {
    float: right;
    margin: 20px 0px 20px 20px;
    padding: 20px;
    width: 50%;
    border-width: 2px;
    border-style: dotted;
    border-color: darkslategray;
  }

  #mes-head {
    margin: 0;
  }

  .mes-title {
    text-align: left;
    margin: 0 auto;
    font-size: 2.0em;
    color: #000000;
  }

  .mes-subtitle {
    text-align: left;
    margin: 0 auto;
    font-size: 1.2em;
    color: darkgrey;
  }
</style>
