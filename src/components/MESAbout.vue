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
      aboutTitle: 'Technical Details: About Me & About This Site',
      aboutText: '<p>I built the current version of this website to teach myself Vue.js. I wouldn\'t typically use flashy "bounce" and "rollout" effects like I do here with the images on the portfolio display. But these hand-coded Vue transitions are a nice way to symbolize a transition I am making in my own career. After years as a server-side developer, mostly specializing in <a href="/#/projects/php">PHP</a>, <a href="/#/projects/drupal">Drupal</a> and <a href="/#/projects/wordpress">WordPress</a>, I am delving into the power of serverless client-side Javascript architecture. And I love what I\'m discovering as I explore the possibilities here.</p><p>As a software developer, I have always embraced change. When I graduated from the University at Albany with a degree in Philosophy and another in Computer Science, the hottest languages on the scene were Pascal and LISP. I found my way from there to Unix and C++, and was working as a financial systems developer on Wall Street (want the long story? <a target="_blank" href="http://litkicks.com/AMemoirInProgress">Here it is</a>) when the Internet craze began in the 90s. I <a href="/#/projects/early">jumped aboard</a>, became a <a href="/#/projects/java">Java developer</a>, and stumbled my way through various nascent content management strategies until I discovered the Drupal and WordPress communities, which continue to inspire me today. I still have great respect for the smart and generous people who make these open source frameworks as great as they are, but I believe web developers need to find a new "north star" to follow in 2018, and when I gaze skyward and look for that north star I see brilliant Javascript frameworks: Node, Angular, React and (my current favorite, though I love to experiment with them all) Vue.</p><p>I am not only a web developer. I am a writer (I used to use the pen name <a target="_blank" href="https://en.wikipedia.org/wiki/Levi_Asher">Levi Asher</a>), a political activist for causes that matter, and a proud father of three. As a technologist, I pay a lot of attention to <a href="/#/projects/seo">search technology, taxonomies and metadata</a>, and am particularly keen on the power of well-planned <a href="/#/projects/social">social media strategies</a>.</p><p>I am often asked to play the role of project manager, team leader or lead architect on the projects I work on, but I always insist on participating as a fully hands-on developer as well, because I cannot be an effective manager unless I understand the technologies my team is using. I am happy to work either as an independent consultant or a full-time employee, but I will never work for a company whose mission or ethics I can\'t endorse. Please see my <a target="_blank" href="https://www.linkedin.com/in/marceliotstein/">LinkedIn page</a> for more details about my professional experience, and please contact me at <a href="mailto:marc.eliot.stein@gmail.com">marc.eliot.stein@gmail.com</a> if you are interested in working with me.</p>'
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
