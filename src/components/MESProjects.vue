/*
 * MESProjects.vue: animated display component for a list of projects
 *
 * MarcEliotStein.com
 */
<template>
  <div id="mesproj">
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
           {{ index+1 }} ... {{ proj.projTitle }}
        </div>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MESProjects',
  data() {
    return {
      isShowing: false,
      recentProjects: [
        { 
          projTitle: 'Law Firm of Laurence P. Greenberg',
          projImage: '/static/lpgdivorce600.jpg',
          projClass: 'yellowish',
          projShow: true
        },
        { 
          projTitle: 'Virtual Career Network',
          projImage: '/static/vcn600.jpg',
          projClass: 'bluish',
          projShow: false
        },
        { 
          projTitle: 'Power Bar',
          projImage: '/static/powerbar600.jpg',
          projClass: 'bluish',
          projShow: false 
        },
        { 
          projTitle: 'Pacifism for the 21st Century',
          projImage: '/static/pacgogo600.jpg',
          projClass: 'yellowish',
          projShow: false
        },
      ],
      contentProjects: [
        { 
          projTitle: 'Center for Disease Control',
          projImage: '/static/cdc600.jpg',
          projClass: 'yellowish',
          projShow: true
        },
        { 
          projTitle: 'Inference Data',
          projImage: '/static/inference600.jpg',
          projClass: 'bluish',
          projShow: false
        },
        { 
          projTitle: 'Educational Marketer',
          projImage: '/static/educationalmarketer600.jpg',
          projClass: 'bluish',
          projShow: false
        },
        { 
          projTitle: 'WellFormative Health',
          projImage: '/static/wellformative600.jpg',
          projClass: 'yellowish',
          projShow: false
        },
      ],
      artmusicProjects: [
        { 
          projTitle: 'Pearl Jam',
          projImage: '/static/pearljam600.jpg',
          projClass: 'yellowish',
          projShow: true
        },
        { 
          projTitle: 'Bob Dylan',
          projImage: '/static/bobdylan600.jpg',
          projClass: 'yellowish',
          projShow: false,
        },
        { 
          projTitle: 'Words Without Borders',
          projImage: '/static/wwb600.jpg',
          projClass: 'bluish',
          projShow: false
        },
        { 
          projTitle: 'Eli Stein Cartoons',
          projImage: '/static/elistein600.jpg',
          projClass: 'bluish',
          projShow: false,
        },
      ],
      socialProjects: [
        { 
          projTitle: 'Foreign Policy',
          projImage: '/static/foreignpolicy600.jpg',
          projClass: 'bluish',
          projShow: true
        },
        { 
          projTitle: 'Practical Handbook of Group Counseling ',
          projImage: '/static/ghppracticalhandbooks600.jpg',
          projClass: 'yellowish',
          projShow: false
        },
        { 
          projTitle: 'Literary Kicks',
          projImage: '/static/litkicks600.jpg',
          projClass: 'bluish',
          projShow: false
        },
      ],
      earlyProjects: [
        { 
          projTitle: 'Time Inc. New Media',
          projImage: '/static/pathfinder600.jpg',
          projClass: 'bluish',
          projShow: true
        },
        { 
          projTitle: 'iVillage.com',
          projImage: '/static/ivillage600.jpg',
          projClass: 'yellowish',
          projShow: false
        },
        { 
          projTitle: 'History Channel',
          projImage: '/static/historychannel600.jpg',
          projClass: 'yellowish',
          projShow: false
        },
      ],
      msg: '',
    }
  },
  computed: {
    filteredProjects: function() {
      return this.artmusicProjects;
    },
    displayMsg: function() {
      let newMsg = 'Recent Work';
      if (this.$route.params.projset) {
        if (this.$route.params.projset=='social') {
          newMsg = 'Social Media Strategy'; 
        } else if (this.$route.params.projset=='seo') {
          newMsg = 'SEO & Metadata'; 
        } else if (this.$route.params.projset=='activism') {
          newMsg = 'Political Activism'; 
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
      if (this.filteredProjects[0].projShow == true) {
        this.filteredProjects[0].projShow = false;
        this.filteredProjects[1].projShow = true;
      } else if (this.filteredProjects[1].projShow == true) {
        this.filteredProjects[1].projShow = false;
        this.filteredProjects[2].projShow = true;
      } else if (this.filteredProjects[2].projShow == true) {
        this.filteredProjects[2].projShow = false;
        this.filteredProjects[3].projShow = true;
      } else if (this.filteredProjects[3].projShow == true) {
        this.filteredProjects[3].projShow = false;
        this.filteredProjects[0].projShow = true;
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

  #mesproj {
    text-align: center;
    margin: 0 auto;
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
    animation: bounceframes 4s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  .rollout { 
    width: 60px;
    height: 60px;
    animation: rollframes-slide 8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    div {
      animation: rollframes-spin 4s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    }
    text-align: center;
    margin: 0 auto;
  }
</style>
