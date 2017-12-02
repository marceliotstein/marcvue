<template>
  <div id="app">
    <div class="mes-title">Marc Eliot Stein</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

.mes-title {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 5em;
  color: #000000;
}

#app {
  font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 10px;
}
</style>
