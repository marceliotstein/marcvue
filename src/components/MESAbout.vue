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
    <MESFooter/>
  </div>
</template>

<script>
import MESHeader from '@/components/MESHeader';
import MESFooter from '@/components/MESFooter';
export default {
  name: 'MESAbout',
  components: {
    MESHeader,
    MESFooter
  },
  data() {
    return {
      aboutTitle: 'About Me & About This Site',
      aboutText: '<p>The current version of this site is built entirely with Vue.js&mdash;an exciting new paradigm for a longtime Drupal developer like me. I evaluated and experimented with several front-end Javascript frameworks before beginning this project, and ultimately chose Vue over Angular or React because I think it has the brightest future. I admit that I went a little overboard on the "bounce" and "rollout" effects for the portfolio pages that make up this site, and on the animation of the hamburger menu. But all of these animations are hand-coded, and I think they nicely show off the power of Vue transitions, which are a pleasure to work with.</p><p>As a software developer, I always embrace change, which is why I\'ve been over the years a C++ developer, a <a href="/#/portfolio/java">Java developer</a>, <a href="/#/portfolio/php">PHP developer</a> (mostly <a href="/#/portfolio/drupal">Drupal</a> and <a href="/#/portfolio/wordpress">WordPress</a>) and now primarily a Javascript developer. From the <a href="/#/portfolio/early">earliest days of the web industry</a> to today, change has been a constant, and I wouldn\'t want it any other way. I\'ve written elsewhere about <a target="_blank" href="http://litkicks.com/AMemoirInProgress">my experiences in this crazy and exciting field</a>, though I think I need to update this story with the latest chapters if I ever get a chance ...</p><p>Because I am both a techie and a content creator (that is, a writer with a <a target="_blank" href="https://en.wikipedia.org/wiki/Levi_Asher">large body of published work</a>), I like to think that I have a unique perspective on the web medium, and on the special features that can make a content management/publishing system fail or succeed. I try to always be aware and considerate of the needs of the hardworking people who use the tools and platforms I help to deploy.  I also try to pay a lot of attention to <a href="/#/portfolio/seo">search technology, taxonomy and metadata</a>, and am particularly keen on the power of making good technical choices to support the unique <a href="/#/portfolio/social">social media strategies</a> that every digital publisher needs.</p><p>I often play the role of project manager, team leader or lead architect on the projects I work on, but I always insist on participating as a fully hands-on developer, because I cannot be an effective manager unless I understand the technologies my team is using. I am happy to work either as an independent consultant or a full-time employee, but I will never work for a company whose mission or ethics I can\'t endorse. I am based in New York City but prefer to work remotely when possible. Please see my <a target="_blank" href="https://www.linkedin.com/in/marceliotstein/">LinkedIn page</a> for more details about my professional experience, and please contact me at <a href="mailto:marc.eliot.stein@gmail.com">marc.eliot.stein@gmail.com</a> if you are interested in working with me.</p>'
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
    text-align: left;
    margin: 0px 60px 0px 60px;
  }
  .about-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
</style>
