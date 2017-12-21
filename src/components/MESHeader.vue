/*
 * MESHeader.vue: site header
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mes-head">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MESHeader',
  data() {
    return {
      msg: 'Header goes here?',
    }
  }
}
</script>

<style lang="scss" scoped>
  #mes-head {
    text-align: center;
    margin: 0 auto;
  }
</style>
