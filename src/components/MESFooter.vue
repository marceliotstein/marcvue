/*
 * MESFooter.vue: site footer
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mes-foot">
    <div class="mes-foot-inner">
      <div class="mes-foot-title"><router-link class="nohighlight" to="/">Marc Eliot Stein</router-link></div>
      <div class="mes-foot-subtitle">Social publishing & advanced technology development.</div>
      <div class="mes-foot-social-links">
        <ul>
          <li><i class="fa fa-instagram"/> <a target="_blank" href="https://instagram.com/asheresque">Instagram</a></li>
          <li><i class="fa fa-twitter"/> <a target="_blank" href="https://twitter.com/asheresque">Twitter</a></li>
          <li><i class="fa fa-github"/> <a target="_blank" href="https://github.com/marceliotstein">GitHub</a></li>
          <li><i class="fa fa-linkedin"/> <a target="_blank" href="https://www.linkedin.com/in/marceliotstein/">LinkedIn</a></li>
        </ul>
      </div>
      <div class="mes-foot-image-wrapper"><img class="mes-foot-image" :src="footerImage"/></div>
    </div>
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

  .mes-foot-inner {
    text-align: center;
    margin: 0 auto;
    padding: 0px 10px 0px 10px;
    border-top-width: 2px;
    border-top-color: black;
    border-top-style: dotted;
  }
    
  .fa-instagram {
    border-radius: 3px;
    background: #125688;
    color: white;
  }
  
  .fa-twitter {
    border-radius: 3px;
    background: #55acee;
    color: white;
  }

  .fa-github {
    border-radius: 3px;
    background: #000000;
    color: white;
  }

  .fa-linkedin {
    border-radius: 3px;
    background: #007bb5;
    color: white;
  }

  .mes-foot-social-links ul {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.1em;
    color: darkslategray;
    padding-top: 5px;
    padding-bottom: 10px;
    list-style: none;
  }

  .mes-foot-social-links li {
    display: inline;
    margin: 0px 9px 0px 9px;
  }

  @media (max-width: 767px) {
    .mes-foot-social-links ul {
      font-size: .9em;
    }

    .mes-foot-social-links li {
      display: inline;
      margin: 0px 4px 0px 4px;
    }
  }

  .mes-foot-image-wrapper {
    width: 100%;
    margin: 15px auto;
  }
    
  .mes-foot-image {
    width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    .mes-foot-image {
      width: 250px;
    }
  }  

  .mes-foot-title {
    text-align: center;
    margin: 30px auto 0 auto;
    padding-top: 10px;
    padding-top: 5px;
    font-size: 1.2em;
  }

  .mes-foot-subtitle {
    text-align: center;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 10px;
    color: darkslategray;
    font-size: .9em;
  }
</style>
