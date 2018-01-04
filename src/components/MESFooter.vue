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
          <li><a target="_blank" href="https://instagram.com/asheresque"><i class="fa fa-instagram"/></a> <a target="_blank" href="https://instagram.com/asheresque">Instagram</a></li>
          <li><a target="_blank" href="https://twitter.com/asheresque"><i class="fa fa-twitter"/></a> <a target="_blank" href="https://twitter.com/asheresque">Twitter</a></li>
          <li><a target="_blank" href="https:github.com/marceliotstein//"><i class="fa fa-github"/></a> <a target="_blank" href="https://github.com/marceliotstein">GitHub</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/marceliotstein/"><i class="fa fa-linkedin"/></a> <a target="_blank" href="https://www.linkedin.com/in/marceliotstein/">LinkedIn</a></li>
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
    margin: 70px 0px 15px 0px;
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
    color: #125688;
    background: white;
    font-size: 1.5em;
    padding: 6px 3px 6px 3px;
  }
  
  .fa-twitter {
    border-radius: 3px;
    color: #55acee;
    background: white;
    font-size: 1.5em;
    padding: 6px 3px 6px 3px;
  }

  .fa-github {
    border-radius: 3px;
    color: #c9810c;
    background: white;
    font-size: 1.5em;
    padding: 6px 3px 6px 3px;
  }

  .fa-linkedin {
    border-radius: 3px;
    color: #007bb5;
    background: white;
    font-size: 1.5em;
    padding: 6px 3px 6px 3px;
  }

  .mes-foot-social-links {
    padding: 15px 0px 15px 0px;
  }

  .mes-foot-social-links ul {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.1em;
    color: slategray;
    padding: 0px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mes-foot-social-links li {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 0px 9px 0px 9px;
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
    font-size: 1.6em;
  }

  .mes-foot-subtitle {
    text-align: center;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 10px;
    color: slategray;
    font-size: 1.1em;
  }
</style>
