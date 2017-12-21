<template>
  <div class="wrapper">
    <MESHeader></MESHeader>
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
    <router-view/>
  </div>
</template>

<script>
  import MESHeader from './components/MESHeader'
  export default {
    name: 'app',
    components: {
      MESHeader
    },
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
