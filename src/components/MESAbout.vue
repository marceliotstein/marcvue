/*
 * MESAbout.vue: simple about page for portfolio website
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mesabout">
    <MESHeader/>
    <div class="about">
      <h1>{{ aboutTitle }}</h1>
      <div class="about-text" v-html="aboutText"></div>
    </div>
  </div>
</template>

<script>
import MESHeader from '@/components/MESHeader';
export default {
  name: 'MESAbout',
  components: {
    MESHeader
  },
  data() {
    return {
      aboutTitle: 'Technical Details',
      aboutText: 'Please see my <a href="https://www.linkedin.com/in/marceliotstein/">LinkedIn page</a> for a detailed C.V., and you can get in touch with me via LinkedIn or <a href="mailto:marc.eliot.stein@gmail.com">email</a>. Briefly, I began my career as a C++ developer, but was an early adopter of <a href="/#/projects/java">Java</a> before switching my focus to <a href="/#/projects/php">PHP</a> in the early 2000s. I have been deeply immersed in both <a href="/#/projects/wordpress">WordPress</a> and <a href="/#/projects/drupal">Drupal</a>, but am lately concentrating on <a href="/#/projects/nodevue">Vue.js</a> and the emerging front-end Javascript ecosystem, which seems to me to point the way to the future of web development. This field never stays the same for long, and that\'s the way I like it!<br /><br />In terms of areas on interest, I am particularly keen on <a href="/#/projects/seo">SEO and metadata standards</a>, as well as on the power of <a href="/#/projects/social">social media integration</a><br /><br />I like to think of myself as a broad-minded web developer. I love to implement <a href="/#/projects/design">my own art designs</a>, and of course as a writer I always remember that in the pursuit of creative excellence, virtue and truth there is nothing at all that matters as much as the words.'
    }
  }
}
</script>

<style lang="scss">
  #mesabout {
    margin: 0 auto;
  }
  .about-text a, 
  .about-text a:link, 
  .about-text a:active, 
  .about-text a:visited {
    color: blue;
  }
  .about-text a:hover {
    color: green;
  }
  .about {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-align: center;
    margin: 0px 60px 0px 60px;
  }
  .about-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
</style>
