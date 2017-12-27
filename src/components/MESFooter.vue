/*
 * MESFooter.vue: site footer
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mes-foot">
    <div class="mes-foot-social-links">
      <ul>
        <li><a target="_blank" href="https://instagram.com/asheresque">Instagram</a></li>
        <li><a target="_blank" href="https://twitter.com/asheresque">Twitter</a></li>
        <li><a target="_blank" href="https://github.com/marceliotstein">GitHub</a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/marceliotstein/">LinkedIn</a></li>
      </ul>
    </div>
    <div class="mes-foot-title"><router-link class="nohighlight" to="/">Marc Eliot Stein</router-link></div>
    <div class="mes-foot-subtitle">Social publishing & advanced technology development.</div>
    <div class="mes-foot-image-wrapper"><img class="mes-foot-image" :src="footerImage"/></div>
  </div>
</template>

<script>
export default {
  name: 'MESFooter',
  data() {
    return { 
      footerImage: '/static/mes-diner1200.jpg',
    }
  },
}
</script>

<style lang="scss" scoped>
  #mes-foot {
    text-align: center;
    margin: 30px 0px 15px 0px;
    width: 100%;
  }

  .mes-foot-social-links ul {
    list-style: none;
  }

  .mes-foot-social-links li {
    display: inline;
  }

  .mes-foot-image-wrapper {
    width: 100%;
    margin: 0 auto;
  }
    
  .mes-foot-image {
    width: 25%;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    .mes-foot-image {
      width: 85%;
    }
  }  
  .mes-foot-title {
    text-align: center;
    margin: 0 auto;
    font-size: 1.2em;
  }

  .mes-foot-subtitle {
    text-align: center;
    margin: 0 auto;
    font-style: italic;
    color: darkslategray;
    font-size: 1em;
  }
</style>
