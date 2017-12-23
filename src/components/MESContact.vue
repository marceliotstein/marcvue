/*
 * MESContact.vue: simple contact page for portfolio website
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mescontact">
    <MESHeader/>
    <div id="contact">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
import MESHeader from '@/components/MESHeader'
export default {
  name: 'MESContact',
  components: {
    MESHeader
  },
  data() {
    return {
      msg: 'Contact MES.',
    }
  }
}
</script>

<style lang="scss" scoped>
  #mescontact {
    margin: 0 auto;
  }
  #contact {
    text-align: center;
  }
</style>
