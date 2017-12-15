<template>
  <div class="wrapper">
    <div class="mes-title"><router-link class="nohighlight" to="/">Marc Eliot Stein</router-link></div>
    <router-link :to="{ path: 'social', params: { projSet: 'ABC' }}">Social Media Strategy</router-link>
    <router-link to="/seo">SEO & Metadata</router-link>
    <router-link to="/design">UX & Design</router-link>
    <router-link to="/drupal-wordpress">Drupal & WordPress</router-link>
    <router-link to="/node-vue">Node.js & Vue.js</router-link>
    <router-link to="/writing">Writing</router-link>
    <router-link to="/activism">Activism</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isShowing: false 
      }
    },
    methods: {
      toggleShow() {
        this.isShowing = !this.isShowing;
      }
   }
 }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

a {
  text-decoration: none;
}

a:visited, a:link {
  color: #000000;
}

a:hover, a:active {
  color: #999999;
}

a.nohighlight:hover, a.nohighlight:active {
  color: #000000;
}

body {
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  background: #ffffff; 
  text-align: center;
  color: #000000;
  margin-top: 10px;
}

.mes-title {
  font-size: 5em;
  color: #000000;
}
</style>
