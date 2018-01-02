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
      aboutTitle: 'Technical Details',
      aboutText: '<p>I built the current version of this website not only to present an overview of my work but also to teach myself Vue.js, a powerful front-end framework that is revolutionizing the field of web development. I\'m blown away by Vue because it unlocks the power of comprehensive client-side web architecture, a paradigm that overturns the familiar server-side approach that became second nature to me in my years as a <a href="/#/projects/php">PHP developer</a> specializing in <a href="/#/projects/drupal">Drupal</a> and <a href="/#/projects/wordpress">WordPress</a>.</p>I believe Drupal and WordPress still hold an important place in the field of enterprise web development, but I expect that these server-side frameworks will be increasingly occupied with the important task of managing and presenting data via REST APIs. The creation of user experiences (which is, really, where a lot of the magic of web development lies) will become the responsibility of client-side frameworks. Before building this site, I evaulated several great front-end offerings including Angular, React, Ember and even a full Node-based server-side CMS called Keystone along with Vue. I finally selected Vue, based partly on word of mouth and also on the fact that it is less dependent (unlike Angular and React) on tech-giant sponsorship.</p><p>Learning Vue has been a joyful experience for me, because it has so many cool features, and also because the thrill of change has always been a part of my life as a web developer. As the project summaries featured on this portfolio website show, I have always made it a point to move on to new paradigms as the field evolves. I began developing professional websites in the <a href="/#/projects/early">early days</a> of Perl and flat HTML, then became a <a href="/#/projects/java">Java developer</a> before moving on to Drupal and WordPress. Even in today\'s Javascript-heavy web environment, change remains a constant, and there\'s no telling what innovations will reveal themselves next.</p><p>I consider myself a well-rounded web developer because I am an experienced writer and UX designer as well as a coder, and thus I have a good understanding of how the web projects I work on can add value to the editors, content creators, graphic artists and experience designers whose ideas we are supporting. I specialize in enterprise content management systems, and am particularly keen on <a href="/#/projects/seo">search development, SEO techniques and metadata</a> as well as on the power of well-planned <a href="/#/projects/social">social media initiatives</a> to support a web publisher\'s mission. I am more of a developer than a designer, but I do also have some training in graphic design, and have enjoyed the chance to implement some of my own <a href="/#/projects/design">UX designs</a>.</p><p>I am often hired to manage teams or projects, but as a manager I always insist on participating as a fully hands-on team member, because I know I cannot be an effective manager unless I understand the technology my team is using. I am happy to work either as an independent consultant or a full-time employee. Please see my <a href="https://www.linkedin.com/in/marceliotstein/">LinkedIn page</a> for more details about my professional experience, and please contact me at <a href="mailto:marc.eliot.stein@gmail.com">marc.eliot.stein@gmail.com</a> if you are interested in working with me.</p>'
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
