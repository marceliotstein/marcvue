/*
 * MESProjects.vue: animated display component for a list of projects
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mesprojects">
    <MESHeader/>
    <div class="projects">
      <h1>{{ msg + displayMsg }}</h1>
      <div class="buttonbox">
        <button @click="startShow">
          <span>Do This</span>
        </button>
      </div>
      <transition name="projmove" enter-active-class="bouncein" leave-active-class="rollout" v-on:after-enter="afterEnter" v-on:after-leave="afterLeave">
        <div class="ifshowing" v-if="isShowing">
          <div v-for="(proj, index) in filteredProjects" v-if="proj.projShow">
             <div v-bind:style="{ 'background-image': 'url(' + proj.projImage + ')' }" class="proj"></div>
             <br />
             {{ proj.projTitle }}
          </div>
        </div>
      </transition>
      <router-view/>
    </div>
  </div>
</template>

<script>
import MESHeader from '@/components/MESHeader'
export default {
  name: 'MESProjects',
  components: {
    MESHeader
  },
  data() {
    return {
      isShowing: false,
      projects: [
        { 
          projTitle: 'Law Firm of Laurence P. Greenberg',
          projImage: '/static/lpgdivorce600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'php', 'drupal', 'law', 'solo', 'design', 'recent' ],
          projShow: false
        },
        { 
          projTitle: 'Virtual Career Network',
          projImage: '/static/vcn600.jpg',
          projClass: 'bluish',
          projCategories: [ 'php', 'drupal', 'government', 'social', 'team' ],
          projShow: false
        },
        { 
          projTitle: 'Power Bar',
          projImage: '/static/powerbar600.jpg',
          projClass: 'bluish',
          projCategories: [ 'php', 'drupal', 'product', 'team', 'recent' ],
          projShow: false 
        },
        { 
          projTitle: 'Pacifism for the 21st Century',
          projImage: '/static/pacgogo600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'php', 'drupal', 'writing', 'fundraising', 'social', 'owner', 'solo', 'recent' ],
          projShow: false
        },
        { 
          projTitle: 'Center for Disease Control',
          projImage: '/static/cdc600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'php', 'drupal', 'health', 'government', 'searchmeta', 'manager' ],
          projShow: false
        },
        { 
          projTitle: 'Inference Data',
          projImage: '/static/inference600.jpg',
          projClass: 'bluish',
          projCategories: [ 'java', 'law', 'searchmeta', 'team' ],
          projShow: false
        },
        { 
          projTitle: 'Educational Marketer',
          projImage: '/static/educationalmarketer600.jpg',
          projClass: 'bluish',
          projCategories: [ 'php', 'drupal', 'publishing', 'solo' ],
          projShow: false
        },
        { 
          projTitle: 'WellFormative Health',
          projImage: '/static/wellformative600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'php', 'drupal', 'health', 'solo', 'commerce' ],
          projShow: false
        },
        { 
          projTitle: 'Pearl Jam',
          projImage: '/static/pearljam600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'php', 'wordpress', 'music', 'solo', 'social' ],
          projShow: false
        },
        { 
          projTitle: 'Bob Dylan',
          projImage: '/static/bobdylan600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'java', 'music', 'solo', 'early', 'searchmeta' ],
          projShow: false
        },
        { 
          projTitle: 'Words Without Borders',
          projImage: '/static/wwb600.jpg',
          projClass: 'bluish',
          projCategories: [ 'php', 'literature', 'solo', 'searchmeta' ],
          projShow: false
        },
        { 
          projTitle: 'Eli Stein Cartoons',
          projImage: '/static/elistein600.jpg',
          projClass: 'bluish',
          projCategories: [ 'php', 'drupal', 'arts', 'solo', 'design' ],
          projShow: false
        },
        { 
          projTitle: 'Foreign Policy',
          projImage: '/static/foreignpolicy600.jpg',
          projClass: 'bluish',
          projCategories: [ 'php', 'drupal', 'publishing', 'manager', 'social' ],
          projShow: false
        },
        { 
          projTitle: 'Practical Handbook of Group Counseling ',
          projImage: '/static/ghppracticalhandbooks600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'php', 'drupal', 'publishing', 'commerce', 'solo', 'design' ],
          projShow: false
        },
        { 
          projTitle: 'Literary Kicks',
          projImage: '/static/litkicks600.jpg',
          projClass: 'bluish',
          projCategories: [ 'php', 'drupal', 'literature', 'writing', 'owner', 'social', 'design' ],
          projShow: false
        },
        { 
          projTitle: 'Time Inc. New Media',
          projImage: '/static/pathfinder600.jpg',
          projClass: 'bluish',
          projCategories: [ 'c++', 'perl', 'publishing', 'manager', 'seo', 'early' ],
          projShow: false
        },
        { 
          projTitle: 'iVillage.com',
          projImage: '/static/ivillage600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'java', 'publishing', 'social', 'manager', 'early' ],
          projShow: false
        },
        { 
          projTitle: 'History Channel',
          projImage: '/static/historychannel600.jpg',
          projClass: 'yellowish',
          projCategories: [ 'java', 'publishing', 'team', 'searchmeta' ],
          projShow: false
        },
        { 
          projTitle: 'MarcEliotStein.com',
          projImage: '/static/ivillage600.jpg',
          /*projImage: '/static/marceliotstein600.jpg',*/
          projClass: 'yellowish',
          projCategories: [ 'nodevue' ],
          projShow: false
        },
      ],
      msg: '',
    }
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
    displayMsg: function() {
      let newMsg = 'Recent Work';
      if (this.$route.params.projset) {
        if (this.$route.params.projset=='mp') {
          newMsg = 'Media & Publishing'; 
        } else if (this.$route.params.projset=='ame') {
          newMsg = 'Arts, Music & Entertainment'; 
        } else if (this.$route.params.projset=='hlg') {
          newMsg = 'Health, Law & Government'; 
        } else if (this.$route.params.projset=='wa') {
          newMsg = 'Writing & Activism'; 
        } else {
          newMsg = this.$route.params.projset;
        }
      }
      return(newMsg);
    }
  },
  methods: {
    startShow() {
      this.isShowing = true;
    },
    afterEnter: function (el) {
      this.isShowing = false;
    },
    afterLeave: function (el) {
      //
      // we already displayed this item, now display the next one
      //
      for (var i=0, len=this.filteredProjects.length; i<len; i++) {
        if (this.filteredProjects[i].projShow == true) {
          this.filteredProjects[i].projShow = false;
          let n = i + 1;
          if (this.filteredProjects[n]) {
            // display next item in list 
            this.filteredProjects[n].projShow = true;
          } else {
            // loop back to beginning of list 
            this.filteredProjects[0].projShow = true;
          }
          break;
        }
      }
      this.isShowing = true;
    }
 }
}
</script>

<style lang="scss" scoped>
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

  button {
    background: #c62735;
    color: white;
    border: 0;
    padding: 5px 15px;
    margin: 0 10px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
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

  .bluish {
    border-style: solid;
    border-width: 3px;
    border-color: #00005f;
  }

  .yellowish {
    border-style: solid;
    border-width: 3px;
    border-color: #dfdf5f;
  }

  @keyframes bounceframes { 
    1% { @include projb(-400px); }
    20%, 40%, 60%, 80%, 95%, 99%, 100% { @include projb() }
    30% { @include projb(-80px); }
    50% { @include projb(-40px); }
    70% { @include projb(-30px); }
    90% { @include projb(-15px); }
    97% { @include projb(-10px); }
  }

  @keyframes rollframes-slide { 
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(1000px, 0, 0); }
  }

  @keyframes rollframes-spin {
    0% { transform: rotate(0); }
    100% { transform: rotate(1000deg); }
  }

  .projmove-enter {
    @include projb(-400px);
  }

  .bouncein { 
    animation: bounceframes 3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  .rollout { 
    width: 60px;
    height: 60px;
    animation: rollframes-slide 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    div {
      animation: rollframes-spin 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    }
    text-align: center;
    margin: 0 auto;
  }
</style>
