<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
 }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600');

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
  color: #000000;
  margin: 0px;
}
</style>
