/*
 * MESAbout.vue: simple about page for portfolio website
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mesabout">
    <MESHeader/>
    <div class="about">
      <div class="narrowview">
        <div class="about-title-prefix">{{ aboutTitlePrefix }}</div>
        <div class="narrow-about-title">{{ aboutTitle }}</div>
      </div>
      <div class="wideview">
        <div class="about-title-prefix">{{ aboutTitlePrefix }}</div>
        <div class="wide-about-title">{{ aboutTitle }}</div>
      </div>
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
      aboutTitlePrefix: 'Tech Notes',
      aboutTitle: 'About This Site',
      aboutText: '<p>Welcome to the third version of my professional website, built for the first time entirely in front-end Javascript: Vue.js, Node.js, webpack, SASS and a few very cool Vue animation components found on or near Stack Overflow. It all runs on a free account at Surge.sh.</p><p>I evaluated and experimented with several open source frameworks before beginning this project, and ultimately chose Vue over Angular or React because I think it has the brightest future, and I like the fact that it doesn\'t depend on corporate ownership. I\'m sure I went a little overboard on the "bounce" and "rollout" effects and on the hamburger menu. But I\'m trying to explore what Vue can do, and hey, it\'s just my portfolio website.</p><p>This whole idea of building an website entirely in client-side Javascript is exciting for a long-time server-side developer like me. Well, change is the essence of the art of software development&mdash;which is why I\'ve been over the years a C++ developer, a Perl developer, a <a href="/#/portfolio/java">Java developer</a> and a <a href="/#/portfolio/php">PHP developer</a> (mostly <a href="/#/portfolio/drupal">Drupal</a> and <a href="/#/portfolio/wordpress">WordPress</a>). I identified most closely with the Drupal community, which I believe still includes the smartest minds in the biz, even though I\'m more fascinated by Node, Vue and Mongo these days.</p><p>I\'ve been involved in the digital/social technology publishing community since the <a href="/#/portfolio/early">earliest days</a>, and I\'ve even written a memoir about <a target="_blank" href="http://litkicks.com/AMemoirInProgress">some of my exciting ups and down in this crazy industry</a>. (I really need to update this memoir with my latest goings-on, if I can ever find the time).</p><p>I am of course both a writer (with a now-defunct <a target="_blank" href="https://en.wikipedia.org/wiki/Levi_Asher">pen name</a>) and a technologist. The combination of writing and technology works together well, since I specialize in content management systems for media companies. I write and create content for self-expression and personal fulfillment, and I make a living by building editorial publishing systems to help other writers and content creators be as productive and effective as possible. I hope my own respect for the written word and for the creative process helps make me more sensitive to the needs of the teams I support with my technical work.</p><p>Because I care about content a lot, and because I am often paid by companies to nurture the permanent value of the content they publish, I also spend a lot of time thinking about <a href="/#/portfolio/design">UX and design</a>, about <a href="/#/portfolio/seo">search technology, taxonomy and metadata</a>, and about the unique opportunities to reach audiences through smart use of well-integrated <a href="/#/portfolio/social">social media strategy</a>.</p><p>I often play the role of project manager, team leader or lead architect on the projects I work on, but I always insist on participating as a fully hands-on developer, because I cannot be an effective manager unless I understand the technologies my team is using. I am happy to work either as an independent consultant or a full-time employee, but I will never work for a company whose mission or ethics I can\'t endorse. I am based in New York City but prefer to work remotely when possible. Please see my <a target="_blank" href="https://www.linkedin.com/in/marceliotstein/">LinkedIn page</a> for more details about my professional experience, and please contact me at <a href="mailto:marc.eliot.stein@gmail.com">marc.eliot.stein@gmail.com</a> if you are interested in working with me.</p>'
    }
  }
}
</script>

<style lang="scss">
  #mesabout {
    margin: 0 auto;
  }

  .narrowview {
     text-align: center;
  }

  .wideview {
     text-align: left;
  }

  @media (max-width: 767px) {
    .narrowview {
      display: block;
    }
    
    .wideview {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .narrowview {
      display: none;
    }
    
    .wideview {
      display: block;
    }
  }

  .about-title-prefix {
    font-family: 'Montserrat', sans-serif;
    padding: 5px 8px 5px 0px;
    line-height: .5em;
    font-size: 2.5em;
    font-style: italic;
    font-weight: 900;
    opacity: .5;
    color: silver;
  }

  .narrow-about-title {
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.8em;
    font-weight: 800;
    color: black;
    opacity: .66;
  }

  .wide-about-title {
    padding: 0px 0px 0px 33px;
    font-family: 'Titillium Web', sans-serif;
    font-size: 2em;
    font-weight: 800;
    color: black;
    opacity: .7;
  }

  .about-text a, 
  .about-text a:link, 
  .about-text a:active, 
  .about-text a:visited {
    font-weight: bold;
    color: navy;
  }

  .about-text a:hover {
    color: green;
  }

  .about {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-align: left;
    margin: 20px 60px 0px 60px;
  }

  .about-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
</style>
