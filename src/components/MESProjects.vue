/*
 * MESProjects.vue: animated display component for a list of projects
 *
<template>
  <div id="mesprojects">
    <MESHeader/>
    <div class="projects">
      <div class="littleview">
        <div class="narrow-cat-title-sequence">
          <div class="cat-title">{{ currentCatTitle }}</div>
          <div class="cat-desc">{{ currentCatDesc }}</div>
        </div>
        <table class="projtable">
          <tr>
            <td width="1%">
              <img class="table-trans" :src="transImage"/>
            </td>
            <td width="100%">
              <transition name="projmove" enter-active-class="bouncein" leave-active-class="rollout" v-on:after-enter="afterEnter" v-on:after-leave="afterLeave">
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
      </div>
      <div class="bigview">
        <table class="projtable">
          <tr>
            <td width="50%">
              <transition name="projmove" enter-active-class="bouncein" leave-active-class="rollout" v-on:after-enter="afterEnter" v-on:after-leave="afterLeave">
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
            <td width="50%">
             <div class="cat-title">{{ currentCatTitle }}</div>
             <div class="cat-desc">{{ currentCatDesc }}</div>
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
          projCategories: [ 'php', 'drupal', 'law', 'solo', 'design', 'recent' ],
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
          projCategories: [ 'php', 'drupal', 'product', 'team', 'recent' ],
          projShow: false 
        },
        { 
          projTitle: 'Pacifism for the 21st Century',
          projImage: '/static/pacgogo600.jpg',
          projCategories: [ 'php', 'drupal', 'writing', 'fundraising', 'social', 'owner', 'solo', 'wa' ],
          projShow: false
        },
        { 
          projTitle: 'Center for Disease Control',
          projImage: '/static/cdc600.jpg',
          projCategories: [ 'php', 'drupal', 'health', 'government', 'searchmeta', 'manager', 'hlg' ],
          projShow: false
        },
        { 
          projTitle: 'Inference Data',
          projImage: '/static/inference600.jpg',
          projCategories: [ 'java', 'law', 'searchmeta', 'team', 'hlg' ],
          projShow: false
        },
        { 
          projTitle: 'Educational Marketer',
          projImage: '/static/educationalmarketer600.jpg',
          projCategories: [ 'php', 'drupal', 'publishing', 'solo', 'mp' ],
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
          projCategories: [ 'php', 'wordpress', 'music', 'solo', 'social', 'ame' ],
          projShow: false
        },
        { 
          projTitle: 'Bob Dylan',
          projImage: '/static/bobdylan600.jpg',
          projCategories: [ 'java', 'music', 'solo', 'early', 'searchmeta', 'ame' ],
          projShow: false
        },
        { 
          projTitle: 'Words Without Borders',
          projImage: '/static/wwb600.jpg',
          projCategories: [ 'php', 'literature', 'solo', 'searchmeta', 'ame' ],
          projShow: false
        },
        { 
          projTitle: 'Eli Stein Cartoons',
          projImage: '/static/elistein600.jpg',
          projCategories: [ 'php', 'drupal', 'arts', 'solo', 'design', 'ame' ],
          projShow: false
        },
        { 
          projTitle: 'Foreign Policy',
          projImage: '/static/foreignpolicy600.jpg',
          projCategories: [ 'php', 'drupal', 'publishing', 'manager', 'social', 'mp' ],
          projShow: false
        },
        { 
          projTitle: 'Practical Handbook of Group Counseling ',
          projImage: '/static/ghppracticalhandbooks600.jpg',
          projCategories: [ 'php', 'drupal', 'publishing', 'commerce', 'solo', 'design', 'ame' ],
          projShow: false
        },
        { 
          projTitle: 'Literary Kicks',
          projImage: '/static/litkicks600.jpg',
          projCategories: [ 'php', 'drupal', 'literature', 'writing', 'owner', 'social', 'design', 'wa' ],
          projShow: false
        },
        { 
          projTitle: 'Time Inc. New Media',
          projImage: '/static/pathfinder600.jpg',
          projCategories: [ 'c++', 'perl', 'publishing', 'manager', 'seo', 'early', 'mp' ],
          projShow: false
        },
        { 
          projTitle: 'iVillage.com',
          projImage: '/static/ivillage600.jpg',
          projCategories: [ 'java', 'publishing', 'social', 'manager', 'early', 'mp' ],
          projShow: false
        },
        { 
          projTitle: 'History Channel',
          projImage: '/static/historychannel600.jpg',
          projCategories: [ 'java', 'publishing', 'team', 'searchmeta', 'ame' ],
          projShow: false
        },
        { 
          projTitle: 'MarcEliotStein.com',
          projImage: '/static/ivillage600.jpg',
          /*projImage: '/static/marceliotstein600.jpg',*/
          projCategories: [ 'nodevue' ],
          projShow: false
        },
      ],
      transImage: '/static/transparent.png',
      categories: [
        { 
          'catPath': 'recent', 
          'catTitle': 'Recent Projects',
          'catDesc': 'I\'ve recently developed user experiences for Shape Magazine, the Allen Ginsberg Estate, PowerBar and the US Department of Labor. I\'m a full-stack developer, now specializing in Vue, Node and MongoDB, with extensive experience in Drupal, WordPress & Solr.'
        },
        {
          'catPath': 'mp',
          'catTitle': 'Media & Publishing',
          'catDesc': 'Enterprise content management systems for Meredith (Shape, Fitness), Slate (Foreign Policy) and A&E Network (History Channel). Technologies: Drupal, WordPress, Solr, Node.js.'
        },
        { 
          'catPath': 'ame',
          'catTitle': 'Music, Art & Literature',
          'catDesc': 'It\'s been among my greatest joys to share my love of arts and culture via digital media. I\'ve built music sites for Bob Dylan and Pearl Jam, helped launch the international literary site Words Without Borders, and have been running my own litblog, Literary Kicks, since 1994 (yes, a world record as far s I know).'
        },
        {
          'catPath': 'hlg',
          'catTitle': 'Health, Law & Government',
          'catDesc': 'Many of my customers have been in the healthcare industry, including WellFormative.com, an alternative health site, and Virtual Career Network, a Department of Labor initiative to steer young people into either health technology or green technology. I\'ve also worked on a high-performance search engine for law firms, and designed a custom website for a New York City law firm.'
        },
        {
          'catPath': 'wa',
          'catTitle': 'Writing & Activism',
          'catDesc': 'But what\'s all this technology good for, if we aren\'t helping build a better world? In 2015 I began an Indiegogo fundraising drive for Pacifism for the 21st Century, an anti-war project. I\'m also recently involved with World Beyond War, and am active in various #resistance activities.',
        }
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
          // initialize only the first item for display 
          if (j==0) {
            newList[j].projShow = true;
          } else {
            newList[j].projShow = false;
          }
          j++;
        }
      }
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
          //console.log("setting up " + i + " " + n + " " + this.filteredProjects[n].projTitle);
          break;
        }
      }
      this.startShow();
    }
  }
}
</script>

<style lang="scss" scoped>
  .narrow-cat-title-sequence {
    text-align: center;
    margin: 5px auto 0px auto;
  }

  .cat-title {
    font-family: 'Montserrat', sans-serif;
    padding: 5px;
    font-size: 1.1em;
    font-weight: 600;
  }

  .cat-desc {
    font-family: 'Montserrat', sans-serif;
    padding: 5px;
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
    .littleview {
      display: block;
    }

    .bigview {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .big {
      display: block;
    }

    .littleview {
      display: none;
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
    width: 300px;
    height: 300px;
    background-size: 100% 100%;
    transform-origin: 50% 50%;
    text-align: center;
    margin: 0 auto;
  }

  .proj-title {
    margin: 5px 0px 0px 0px;
  }

  @media (max-width: 767px) {
    .proj {
      width: 250px;
      height: 250px;
    }
  }

  @keyframes bounceframes { 
    1%   { @include projb(-200px); }
    8%  { @include projb() }
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
    100% { transform: translate3d(300px, 0, 0); }
  }

  @keyframes rollframes-spin {
    0% { transform: rotate(0); }
    100% { transform: rotate(500deg); }
  }

  @keyframes rollframes-scale {
    0% { transform: scale(1); }
    100% { transform: scale(0); }
  }

  @keyframes rollframes-fade {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .projmove-enter {
    @include projb(-200px);
  }

  .bouncein { 
    animation: bounceframes 3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  .rollout { 
    width: 60px;
    height: 60px;
    animation: rollframes-slide 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    animation: rollframes-scale 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    animation: rollframes-fade 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    div {
      animation: rollframes-spin 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    }
    text-align: center;
    margin: 0 auto;
  }
</style>
