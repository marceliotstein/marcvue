<template>
  <div class="wrapper">
    <div class="mes-title">Marc Eliot Stein</div>
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
