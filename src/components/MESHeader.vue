/*
 * MESHeader.vue: site header
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mes-head">
    <hamburger-menu-button></hamburger-menu-button>
    <hamburger-menu>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </hamburger-menu>
    <div class="mes-title-sequence">
      <div class="mes-title"><router-link class="nohighlight" to="/">Marc Eliot Stein</router-link></div>
      <router-link to="/social">Social Media Strategy</router-link>
      <router-link to="/seo">SEO & Metadata</router-link>
      <router-link to="/design">UX & Design</router-link>
      <router-link to="/drupal">Drupal</router-link>
      <router-link to="/wordpress">WordPress</router-link>
      <router-link to="/music">Music</router-link>
      <router-link to="/literature">Literature</router-link>
      <router-link to="/publishing">Publishing</router-link>
      <router-link to="/law">Law</router-link>
      <router-link to="/health">Health</router-link>
      <router-link to="/activism">Activism</router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store';
import { hamburgerMenu, hamburgerMenuButton } from '@profesia/vue-hamburger-menu-component';

Vue.use('Vuex');

export default {
  store,
  name: 'MESHeader',
  components: {
    hamburgerMenu,
    hamburgerMenuButton
  },
}
</script>

<style lang="scss" scoped>
  .module-hamburger-menu ul {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    overflow: hidden;
  }

  .module-hamburger-menu li {
    list-style: none;
  }

  .module-hamburger-menu a {
    color: red;
    display: block;
    padding: 7px 20px;
  }

  .module-hamburger-menu a:hover {
    background-color: #ddd;
  }

  @media screen and (min-width: 768px) {
    .module-hamburger-menu li {
      float: left;
    }
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
