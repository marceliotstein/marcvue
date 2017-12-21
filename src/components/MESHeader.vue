/*
 * MESHeader.vue: site header
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mes-head">
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
</template>

<script>
export default {
  name: 'MESHeader',
}
</script>

<style lang="scss" scoped>
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
