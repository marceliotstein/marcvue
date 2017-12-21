<template>
  <div class="wrapper">
    <MESHeader></MESHeader>
    <router-view/>
  </div>
</template>

<script>
  import MESHeader from './components/MESHeader'
  export default {
    name: 'app',
    components: {
      MESHeader
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
