o*
 * MESProjects.vue: animated display component for a list of projects
 *
<template>
  <div id="mesprojects">
    <MESHeader/>
    <div class="projects">
      <div class="narrowview">
        <div class="narrow-project-text-box">
          <div class="narrow-cat-title"><span class="port-title">Portfolio:</span> {{ currentCatTitle }}</div>
          <div class="narrow-cat-desc">{{ currentCatDesc }}</div>
        </div>
        <table class="projtable">
          <tr>
            <td width="1%">
              <img class="table-trans" :src="transImage"/>
            </td>
            <td width="100%">
              <transition name="projmove" enter-active-class="bouncein" :leave-active-class="rolloutMethods[currentRollout]" v-on:after-enter="afterEnter" v-on:after-leave="afterLeave">
                <div class="ifshowing" v-if="isShowingNarrow">
                  <div v-for="(proj, index) in filteredProjects" v-if="proj.projShow">
                     <div v-bind:style="{ 'background-image': 'url(' + proj.projImage + ')' }" class="proj"></div>
                     <div class="proj-title">
                       {{ proj.projTitle }}
                     </div>
                  </div>
                </div>
              </transition>
            </td>
            <td width="1%">
              <img class="table-trans" :src="transImage"/>
            </td>
          </tr>
        </table>
        <div class="narrow-project-continued-text-box">
          <div class="narrow-cat-continued">{{ currentCatContinued }}</div>
        </div>
      </div>
      <div class="wideview">
        <table class="projtable">
          <tr>
            <td class="wide-show-box" width="50%">
              <transition name="projmove" enter-active-class="bouncein" :leave-active-class="rolloutMethods[currentRollout]" v-on:after-enter="afterEnter" v-on:after-leave="afterLeave">
                <div class="ifshowing" v-if="isShowingWide">
                  <div v-for="(proj, index) in filteredProjects" v-if="proj.projShow">
                     <div v-bind:style="{ 'background-image': 'url(' + proj.projImage + ')' }" class="proj"></div>
                     <div class="proj-title">
                       {{ proj.projTitle }} 
                     </div>
                  </div>
                </div>
              </transition>
            </td>
            <td class="wide-project-text-box" width="50%">
             <div class="wide-cat-title"><span class="port-title">Portfolio:</span> {{ currentCatTitle }}</div>
             <div class="wide-cat-desc">{{ currentCatDesc }}</div>
             <div class="wide-cat-continued">{{ currentCatContinued }}</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <MESFooter/>
  </div>
</template>

<script>
// if mq.matches, we are wide viewport
const mq = window.matchMedia("(min-width: 768px)");

import MESHeader from '@/components/MESHeader'
import MESFooter from '@/components/MESFooter'
export default {
  name: 'MESProjects',
  components: {
    MESHeader,
    MESFooter
  },
  data() {
    return {
      isShowingNarrow: false,
      isShowingWide: false,
      projects: [
        { 
          projTitle: 'Law Firm of Laurence P. Greenberg',
          projImage: '/static/lpgdivorce600.jpg',
          projCategories: [ 'php', 'drupal', 'law', 'hlg', 'solo', 'design', 'recent' ],
          projShow: false
        },
        { 
          projTitle: 'Shape',
          projImage: '/static/shape600.jpg',
          projCategories: [ 'php', 'drupal', 'recent', 'media', 'manager', 'seo' ],
          projShow: false
        },
        { 
          projTitle: 'Allen Ginsberg Project',
          projImage: '/static/allenginsberg600.jpg',
          projCategories: [ 'php', 'wordpress', 'recent', 'literary', 'musiclit', 'activism', 'design', 'solo' ],
          projShow: false
        },
        { 
          projTitle: 'Eliot Katz Poetry',
          projImage: '/static/eliotkatzpoetry600.jpg',
          projCategories: [ 'php', 'wordpress', 'literary', 'activism', 'design', 'solo' ],
          projShow: false
        },
        { 
          projTitle: 'Virtual Career Network',
          projImage: '/static/vcn600.jpg',
          projCategories: [ 'php', 'drupal', 'government', 'social', 'team', 'hlg', 'recent' ],
          projShow: false
        },
        { 
          projTitle: 'Power Bar',
          projImage: '/static/powerbar600.jpg',
          projCategories: [ 'php', 'drupal', 'hlg', 'marketing', 'team', 'recent' ],
          projShow: false 
        },
        { 
          projTitle: 'Pacifism for the 21st Century',
          projImage: '/static/pacgogo600.jpg',
          projCategories: [ 'php', 'drupal', 'writing', 'fundraising', 'social', 'owner', 'solo', 'activism', 'recent' ],
          projShow: false
        },
        { 
          projTitle: 'Center for Disease Control',
          projImage: '/static/cdc600.jpg',
          projCategories: [ 'php', 'drupal', 'health', 'government', 'seo', 'manager', 'hlg' ],
          projShow: false
        },
        { 
          projTitle: 'Inference Data',
          projImage: '/static/inference600.jpg',
          projCategories: [ 'java', 'law', 'seo', 'team', 'hlg' ],
          projShow: false
        },
        { 
          projTitle: 'Educational Marketer',
          projImage: '/static/educationalmarketer600.jpg',
          projCategories: [ 'php', 'drupal', 'publishing', 'solo', 'media' ],
          projShow: false
        },
        { 
          projTitle: 'WellFormative Health',
          projImage: '/static/wellformative600.jpg',
          projCategories: [ 'php', 'drupal', 'health', 'solo', 'commerce', 'hlg' ],
          projShow: false
        },
        { 
          projTitle: 'Pearl Jam',
          projImage: '/static/pearljam600.jpg',
          projCategories: [ 'php', 'wordpress', 'music', 'musiclit', 'solo', 'social' ],
          projShow: false
        },
        { 
          projTitle: 'Bob Dylan',
          projImage: '/static/bobdylan600.jpg',
          projCategories: [ 'java', 'music', 'musiclit', 'solo', 'early', 'seo' ],
          projShow: false
        },
        { 
          projTitle: 'Words Without Borders',
          projImage: '/static/wwb600.jpg',
          projCategories: [ 'php', 'literary', 'musiclit', 'solo', 'seo' ],
          projShow: false
        },
        { 
          projTitle: 'Eli Stein Cartoons',
          projImage: '/static/elistein600.jpg',
          projCategories: [ 'php', 'drupal', 'arts', 'solo', 'design', 'literary', 'musiclit' ],
          projShow: false
        },
        { 
          projTitle: 'Foreign Policy',
          projImage: '/static/foreignpolicy600.jpg',
          projCategories: [ 'php', 'drupal', 'manager', 'social', 'media' ],
          projShow: false
        },
        { 
          projTitle: 'Practical Handbook of Group Counseling ',
          projImage: '/static/ghppracticalhandbooks600.jpg',
          projCategories: [ 'php', 'drupal', 'publishing', 'commerce', 'solo', 'design', 'hlg' ],
          projShow: false
        },
        { 
          projTitle: 'Literary Kicks',
          projImage: '/static/litkicks600.jpg',
          projCategories: [ 'php', 'drupal', 'literary', 'musiclit', 'owner', 'social', 'design' ],
          projShow: false
        },
        { 
          projTitle: 'Time Inc. New Media',
          projImage: '/static/pathfinder600.jpg',
          projCategories: [ 'c++', 'perl', 'media', 'manager', 'seo', 'early' ],
          projShow: false
        },
        { 
          projTitle: 'iVillage.com',
          projImage: '/static/ivillage600.jpg',
          projCategories: [ 'java', 'media', 'social', 'manager', 'early' ],
          projShow: false
        },
        { 
          projTitle: 'History Channel',
          projImage: '/static/historychannel600.jpg',
          projCategories: [ 'java', 'media', 'team', 'seo' ],
          projShow: false
        },
        { 
          projTitle: 'MarcEliotStein.com',
          projImage: '/static/meskeystone600.jpg',
          projCategories: [ 'nodevue' ],
          projShow: false
        },
      ],
      transImage: '/static/transparent.png',
      rolloutMethods: [ 'rollout-slide', 'rollout-scale', 'rollout-spin', 'rollout-slide2', 'rollout-spin2' ],
      currentRollout: 0,
      categories: [
        { 
          'catPath': 'recent', 
          'catTitle': 'Recent Projects',
          'catDesc': 'I\'m a full-stack web developer and architect specializing in content management, user experience design, social media, taxonomy and search. I\'ve got lots of Drupal and WordPress experience but am lately obsessed with front-end Javascript frameworks like Vue.js (which powers this page). I\'m also a writer, blogger and activist. Here are a few of my recent projects.',
          'catContinued': 'Web publishing is a fast-changing field, and I keep up with all the changes by working on a variety of projects for media companies (Meredith/Shape magazine), government agencies (Virtual Career Network), product companies (Post Foods/Power Bar) and smaller direct clients (the Allen Ginsberg Estate, the law firm of Laurence P. Greenberg). I also enjoy initiating my own projects, like Pacifism21.org, which I kicked off with an Indiegogo fundraising drive in 2015. The common denominator in all these projects is the use of technology to reach audiences with fresh, valuable content.'
        },
        {
          'catPath': 'media',
          'catTitle': 'Media & Publishing',
          'catDesc': 'I specialize in enterprise content management systems for media, publishing and entertainment companies. I have managed or led talented web teams on ambitious projects for Meredith (Shape), Washington Post/Slate (Foreign Policy), A&E Network (History Channel), Sony Music and Time Warner.',
          'catContinued': 'Content management is an endlessly fascinating field, because web presentation is often just the tip of the iceberg when it comes to business goals for public-facing information databases. Comprehensive understanding of taxonomy and metadata is essential, not just for searchability but also in order to increase the intrinsic value of the information being organized. Understanding the social media landscape is also essential: a smart Facebook, Twitter or Snapchat strategy can be incredibly effective for media companies.'
        },
        { 
          'catPath': 'musiclit',
          'catTitle': 'Music & Literature',
          'catDesc': 'It\'s been a thrill for me to build world-class websites for musicians and writers I deeply care about, including Bob Dylan and Pearl Jam. I\'ve been running Literary Kicks since 1994, and recently launched a new website for the estate of the great poet Allen Ginsberg, Other projects include Words Without Borders and a cartooning website for my father, Eli Stein.',
          'catContinued': 'Perhaps the reason I gravitate towards public-facing digital projects is that I have always seen web publishing as a creative endeavor. This is a field that rewards experimentation, vivid and attractive design, and substantial, deep-content taxonomical structure. I always approach a web project as an exciting intellectual pursuit. Maybe this is one reason I\'ve managed to keep my own popular book blog Literary Kicks running for so long that it is now recognized as one of the longest running blogs in the world. It\'s simple: I treat content like it matters.' 
        },
        {
          'catPath': 'hlg',
          'catTitle': 'Health, Law & Government',
          'catDesc': 'Many of my customers have been in the healthcare industry, including WellFormative.com, an alternative health site, and Virtual Career Network, a Department of Labor initiative to steer young people into either health technology or green technology. I\'ve also worked on a high-performance search engine for law firms, and designed a custom website for a New York City law firm.',
          'catContinued': 'There are a wide variety of projects and technologies represented in this part of my portfolio: Java, Drupal, Javascript, lots of custom CSS. These projects tended to involve mission-critical database integration, using MySQL, Oracle and MongoDB.'
        },
        {
          'catPath': 'activism',
          'catTitle': 'Activism & Good Causes',
          'catDesc': 'But what\'s all this technology good for, if we aren\'t helping build a better world? In 2015 I launched Pacifism for the 21st Century, an anti-war project, with an Indiegogo fundraising drive and also put the work of my activist/poet friend Eliot Katz online. I\'m also recently involved with World Beyond War, and am active in various #resistance activities.',
          'catContinued': 'As an activist who gets fired up by positive cultural change, I often look to the power of open source software development itself as a great living example of the power of generosity, community and trust-based cooperation on a global scale. The first great community-based software project I was exposed to, years ago, was the Unix operating system, which of course evolved into Linux and MacOS. Later, I became a part of the wonderful Drupal community. The values and ethics of these open source movements is all the evidence we need to prove to ourselves and others that humans are capable of creating miraculous things together.'
        },
        {
          'catPath': 'php',
          'catTitle': 'PHP',
          'catDesc': 'I began working with PHP in 2003 as the founding developer for Words Without Borders, a journal of international literature. I built a custom CMS all by myself for this early project, but was soon turned on to WordPress and Drupal, two PHP-based platforms that prove the amazing power of open source community-based software development.',
          'catContinued': '...'
        },
        {
          'catPath': 'drupal',
          'catTitle': 'Drupal',
          'catDesc': 'Drupal has been my main server-side framework of choice since 2009, when I was hired by Washington Post/Slate to manage a fast-moving Drupal team for Foreign Policy magazine. I have been consistently blown away by the intelligence, generosity and integrity of the worldwide Drupal community, which includes some of the best minds in web development today.',
          'catContinued': '...'
        },
        {
          'catPath': 'java',
          'catTitle': 'Java',
          'catDesc': 'I don\'t prefer to specialize in Java anymore, but I was one of the early adopters when this comprehensive and ambitious language was invented in 1995. Most of my past Java work involved the Jive community software platform, which I used on iVillage, BobDylan.com and my own Litkicks.com. I also produced Java-based search platforms for History Channel and Inference software.',
          'catContinued': '...'
        },
        {
          'catPath': 'wordpress',
          'catTitle': 'WordPress',
          'catDesc': 'While Drupal is usually my go-to PHP server-side framework, I also have great respect for WordPress, and tend to choose it over Drupal for projects with minimal enterprise-level requirements that will benefit from friendly technical interfaces, including two poetry websites (the Allen Ginsberg Project, Eliot Katz Poetry) that I launched in 2016.',
          'catContinued': '...'
        },
        {
          'catPath': 'nodevue',
          'catTitle': 'Node.js & Vue.js',
          'catDesc': 'The field of web development is always changing, and this is why it\'s always exciting. Javascript front-end frameworks like Angular, React and Vue are the cutting edge today, and the Node/npm ecosystem is the glue that holds it together. I built an early version of MarcEliotStein.com with Keystone and Mongo. The current version is my work-in-progress using Vue.js, my latest obsession.',
          'catContinued': '...'
        },
        {
          'catPath': 'design',
          'catTitle': 'Art Design',
          'catDesc': 'I am a techie first and a graphic artist second, but I do have quite a bit of art experience, and I get the greatest satisfaction from web projects in which I am empowered to create the design as well as the technical foundation. You can get a sense of my hopefully unique aesthetic by checking out the Allen Ginsberg Project, LPG Divorce, the Handbook of Group Psychology, Eliot Katz Poetry, Eli Stein Cartoons, Litkicks and Pacifism21.',
          'catContinued': '...'
        },
        {
          'catPath': 'early',
          'catTitle': 'Early',
          'catDesc': 'I have been building websites since the earliest days of Silicon Alley in New York City. Here are some of the early projects I worked on, including Time Warner\'s much-fabled massive project Pathfinder, the one-time dot-com favorite iVillage.com, and my first-ever consulting assignment, BobDylan.com, first launched for his excellent "Time Out of Mind" album in 1997.',
          'catContinued': '...'
        },
        {
          'catPath': 'seo',
          'catTitle': 'Search, SEO and Metadata',
          'catDesc': 'Web publishing is all about inter-connectedness, and this requires smart organization of metadata and awareness of search engine optimization standards. I have specialized in search platforms throughout my career. I launched a new search service using Autonomy for History.com, and then participated in a massive Autonomy-based legal platform for Inference Data. I\'ve also worked on SEO initiatives for Virtual Career Network, Shape magazine and Fitness magazine.',
          'catContinued': '...'
        },
        {
          'catPath': 'social',
          'catTitle': 'Social Media Strategy',
          'catDesc': 'I\'ve often participated in social media strategy on behalf of clients or employers. I created Foreign Policy magazine\'s Twitter presence, and helped Virtual Career Network come up with a user experience that attracts customers. I always emphasize the importance of a top-down social strategy for any online presence.',
          'catContinued': '...'
        },
      ] 
    }
  },
  ready: function() {
    window.addEventListener('resize', this.startShow)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.startShow)
  },
  mounted: function () {
    this.startShow();
  },
  computed: {
    filteredProjects: function() {
      let newList = new Array();
      let catFilter = 'recent';
      if (this.$route.params.projset) {
        catFilter = this.$route.params.projset;
      }
      let j = 0;
      for (var i=0, len=this.projects.length; i<len; i++) {
        if (this.projects[i].projCategories.includes(catFilter)) {
          newList[j] = this.projects[i];
          newList[j].projShow = false;
          j++;
        }
      }
      // randomize display start position to keep it interesting
      let n = newList.length;
      let r = Math.floor(Math.random() * n);
      newList[r].projShow = true;
      return newList;
    },
    currentCatTitle: function() {
      let title = this.categories[0].catTitle;
      if (this.$route.params.projset) {
        for (var i=0, len=this.categories.length; i<len; i++) {
          if (this.categories[i].catPath == this.$route.params.projset) {
            title = this.categories[i].catTitle;
            break;
          }
        }
      }
      return title;
    },
    currentCatDesc: function() {
      let desc = this.categories[0].catDesc;
      if (this.$route.params.projset) {
        for (var i=0, len=this.categories.length; i<len; i++) {
          if (this.categories[i].catPath == this.$route.params.projset) {
            desc = this.categories[i].catDesc;
            break;
          }
        }
      }
      return desc;
    },
    currentCatContinued: function() {
      let continued = this.categories[0].catContinued;
      if (this.$route.params.projset) {
        for (var i=0, len=this.categories.length; i<len; i++) {
          if (this.categories[i].catPath == this.$route.params.projset) {
            continued = this.categories[i].catContinued;
            break;
          }
        }
      }
      return continued;
    }
  },
  methods: {
    startShow() {
      if (mq.matches) {
        this.isShowingWide = true;
        this.isShowingNarrow = false;
      } else {
        this.isShowingNarrow = true;
        this.isShowingWide = false;
      }
    },
    stopShow() {
      this.isShowingWide = false;
      this.isShowingNarrow = false;
    },
    afterEnter: function (el) {
      this.stopShow();
    },
    afterLeave: function (el) {
      //
      // we already displayed this item, now display the next one
      //
      let len = this.filteredProjects.length;
      for (var i=0; i<len; i++) {
        if (this.filteredProjects[i].projShow == true) {
          let n = i + 1;
          if (n>=len) {
            n = 0;
          }
          this.filteredProjects[i].projShow = false;
          this.filteredProjects[n].projShow = true;
          break;
        }
      }
      // rotate the exit animation style by randomly selecting one of our styles
      let e = this.rolloutMethods.length;
      this.currentRollout = Math.floor(Math.random() * e);
      console.log("Next rollout will be " + this.rolloutMethods[this.currentRollout]);
      // let it shine
      this.startShow();
    },
  }
}
</script>

<style lang="scss" scoped>
  .wide-show-box {
    vertical-align: top;
    margin: 0px;
  }

  .narrow-project-text-box {
    text-align: center;
    margin: 5px auto 20px auto;
  }

  .narrow-project-continued-ext-box {
    text-align: center;
    margin: 20px auto 20px auto;
  }

  .wide-project-text-box {
    vertical-align: top;
    text-align: left;
    margin: 0px;
    padding: 30px 0px 0px 0px;
  }

  .port-title {
    font-family: 'Montserrat', sans-serif;
    padding: 5px 8px 5px 0px;
    font-size: 1.1em;
    font-weight: 600;
    font-style: italic;
    color: slategray;
  }
   
  .narrow-cat-title {
    font-family: 'Montserrat', sans-serif;
    padding: 5px 0px 12px 0px;
    font-size: 1.1em;
    font-weight: 600;
  }

  .narrow-cat-desc,
  .narrow-cat-continued {
    font-family: 'Montserrat', sans-serif;
    padding: 5px 20px 5px 20px;
    font-size: .85em;
    font-weight: 400;
  }

  .wide-cat-title {
    font-family: 'Montserrat', sans-serif;
    padding: 0px;
    font-size: 1.1em;
    font-weight: 600;
  }

  .wide-cat-desc,
  .wide-cat-continued {
    font-family: 'Montserrat', sans-serif;
    padding: 20px 30px 0px 0px;
    font-size: .85em;
    font-weight: 400;
  }

  img.table-trans {
    width: 1px;
    height: 300px;
  }
    
  .projtable td {
    height: 500px;
  }

  @media (max-width: 767px) {
    .projtable td {
      height: 300px;
    }

    .narrowview {
      display: block;
    }

    .wideview {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .wide {
      display: block;
    }

    .narrowview {
      display: none;
    }
  }

  .wideview {
    .cat-title {
      font-size: 1.2em;
      font-weight: 600;
    }

    .cat-desc {
      font-size: 1em;
      font-weight: 400;
    }
  }

  @mixin projb($yaxis: 0) {
    transform: translate3d(0, $yaxis, 0);
  }

  #mesprojects {
    margin: 0 auto;
  }

  .projects {
    text-align: center;
  }

  .num {
    color: #AF007E;
  }

  h4 {
    margin: 0 0 15px;
  }

  hr {
    border-color: #F2FAFF;
    opacity: 0.5;
    margin: 15px 0;
  }

  .proj {
    width: 400px;
    height: 400px;
    background-size: 100% 100%;
    transform-origin: 50% 50%;
    text-align: center;
    margin: 0 auto;
  }

  .proj-title {
    display: none; /* till I can create a second transition to remove unwanted bounce effect */
    margin: 5px 0px 0px 0px;
  }

  @media (max-width: 767px) {
    .proj {
      width: 320px;
      height: 320px;
    }
  }

  @keyframes bounceframes { 
    1%   { @include projb(-200px); }
    8%   { @include projb() }
    16%  { @include projb(-32px); }
    24%  { @include projb() }
    32%  { @include projb(-16px); }
    40%  { @include projb() }
    48%  { @include projb(-8px); }
    56%  { @include projb() }
    62%  { @include projb(-4px); }
    66%  { @include projb() }
    69%  { @include projb(-2px); }
    72%  { @include projb() }
    100% { @include projb() }
  }

  @keyframes rollframes-slide { 
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(200px, 0, 0); }
  }

  @keyframes rollframes-spin {
    0% { transform: rotate(0); }
    100% { transform: rotate(100deg); }
  }

  @keyframes rollframes-scale {
    0% { transform: scale(1); }
    100% { transform: scale(0); }
  }

  @keyframes rollframes-fade {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes rollframes-slide2 { 
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-200px, 0, 0); }
  }

  @keyframes rollframes-spin2 {
    0% { transform: rotate(0); }
    100% { transform: rotate(-100deg); }
  }

  @keyframes rollframes-fade2 {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .projmove-enter {
    @include projb(-200px);
  }

  .bouncein { 
    animation: bounceframes 3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  .rollout-slide { 
    animation: rollframes-fade .5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    div {
      animation: rollframes-slide .8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    }
  }

  .rollout-scale { 
    animation: rollframes-fade .5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    div {
      animation: rollframes-scale .8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    }
  }

  .rollout-spin { 
    animation: rollframes-fade .5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    div {
      animation: rollframes-spin .8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    }
  }

  .rollout-slide2 { 
    animation: rollframes-fade2 .5s cubic-bezier(0.9, 0.2, 0.6, 0.4) both; 
    div {
      animation: rollframes-slide2 .8s cubic-bezier(0.9, 0.2, 0.6, 0.4) both; 
    }
  }

  .rollout-spin2 { 
    animation: rollframes-fade2 .5s cubic-bezier(0.9, 0.2, 0.6, 0.4) both; 
    div {
      animation: rollframes-spin2 .8s cubic-bezier(0.9, 0.2, 0.6, 0.4) both; 
    }
  }
  
  .rollout-slide .proj-title,
  .rollout-scale .proj-title,
  .rollout-spin .proj-title,
  .rollout-slide2 .projtitle,
  .rollout-spin2 .proj-title {
    display: none;
  }
</style>
