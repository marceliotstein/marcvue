/*
 * MESHeader.vue: site header
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mes-head">
    <MESBurger/>
    <div class="mes-title-wrapper">
      <div class="mes-title-sequence-dots">
        <div class="mes-title-sequence">
          <div class="mes-title"><router-link class="nohighlight" to="/">Marc Eliot Stein</router-link></div>
          <div class="mes-subtitle">Social publishing & advanced technology development.</div>
        </div>
      </div>
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

  .mes-title-wrapper {
    width: 100%;
  }

  .mes-title-sequence-dots{
    float: right;
    margin: 0px;
    padding: 0px;
    width: 50%;
    border-width: 2px;
    border-style: dotted;
    border-color: slategray;
  }

  .mes-title-sequence {
    float: left;
    margin: 3px 0px 3px 3px;
    padding: 3px;
  }

  @media (min-width: 768px) {
    .mes-title-sequence {
      margin: 10px 0px 10px 10px;
      padding: 10px;
    }
  }

  #mes-head {
    margin: 0;
  }

  .mes-title {
    text-align: left;
    margin: 0 auto;
    color: #000000;
    font-size: 1.4em;
  }

  @media (min-width: 768px) {
    .mes-title {
      font-size: 2.4em;
    }
  }

  .mes-subtitle {
    text-align: left;
    margin: 0 auto;
    font-size: .9em;
    color: slategray;
  }

  @media (min-width: 768px) {
    .mes-subtitle {
      font-size: 1.4em;
    }
  }
</style>
