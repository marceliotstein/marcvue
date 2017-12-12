/*
 * MESProjects.vue: animated display component for a list of projects
 *
 * MarcEliotStein.com
 */
<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <div class="buttonbox">
      <button @click="toggleShow">
        <span v-if="isShowing">Next One</span>
        <span v-else>Show First</span>
      </button>
    </div>
    <transition name="projmove" enter-active-class="bouncein" leave-active-class="rollout">
      <div class="ifshowing" v-if="isShowing">
        <div v-for="(proj, index) in recentProjects" v-if="proj.projShow">
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
          projShow: true
        },
        { 
          projTitle: 'Pacifism for the 21st Century',
          projImage: '/static/pacgogo600.jpg',
          projClass: 'yellowish',
          projShow: true
        },
      ],
      contentProjects: [
        { 
          projTitle: 'Center for Disease Control',
          projImage: '/static/cdc600.jpg',
          projClass: 'yellowish'
        },
        { 
          projTitle: 'Inference Data',
          projImage: '/static/inference600.jpg',
          projClass: 'bluish'
        },
        { 
          projTitle: 'Educational Marketer',
          projImage: '/static/educationalmarketer600.jpg',
          projClass: 'bluish'
        },
        { 
          projTitle: 'WellFormative Health',
          projImage: '/static/wellformative600.jpg',
          projClass: 'yellowish'
        },
      ],
      artmusicProjects: [
        { 
          projTitle: 'Pearl Jam',
          projImage: '/static/pearljam600.jpg',
          projClass: 'yellowish'
        },
        { 
          projTitle: 'Bob Dylan',
          projImage: '/static/bobdylan600.jpg',
          projClass: 'yellowish'
        },
        { 
          projTitle: 'Words Without Borders',
          projImage: '/static/wwb600.jpg',
          projClass: 'bluish'
        },
        { 
          projTitle: 'Eli Stein Cartoons',
          projImage: '/static/elistein600.jpg',
          projClass: 'bluish'
        },
      ],
      socialProjects: [
        { 
          projTitle: 'Foreign Policy',
          projImage: '/static/foreignpolicy600.jpg',
          projClass: 'bluish'
        },
        { 
          projTitle: 'Practical Handbook of Group Counseling ',
          projImage: '/static/ghppracticalhandbooks600.jpg',
          projClass: 'yellowish'
        },
        { 
          projTitle: 'Literary Kicks',
          projImage: '/static/litkicks600.jpg',
          projClass: 'bluish'
        },
      ],
      earlyProjects: [
        { 
          projTitle: 'Time Inc. New Media',
          projImage: '/static/pathfinder600.jpg',
          projClass: 'bluish'
        },
        { 
          projTitle: 'iVillage.com',
          projImage: '/static/ivillage600.jpg',
          projClass: 'yellowish'
        },
        { 
          projTitle: 'History Channel',
          projImage: '/static/historychannel600.jpg',
          projClass: 'yellowish'
        },
      ],
      msg: 'Recent Work.'
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
 }
}
</script>

<style lang="scss" scoped>
  @mixin projb($yaxis: 0) {
    transform: translate3d(0, $yaxis, 0);
  }

  .wrapper {
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

  @keyframes bouncein { 
    1% { @include projb(-400px); }
    20%, 40%, 60%, 80%, 95%, 99%, 100% { @include projb() }
    30% { @include projb(-80px); }
    50% { @include projb(-40px); }
    70% { @include projb(-30px); }
    90% { @include projb(-15px); }
    97% { @include projb(-10px); }
  }

  @keyframes rollout { 
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(1000px, 0, 0); }
  }

  @keyframes projroll {
    0% { transform: rotate(0); }
    100% { transform: rotate(1000deg); }
  }

  .projmove-enter {
    @include projb(-400px);
  }

  .bouncein { 
    animation: bouncein 5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  .rollout { 
    width: 60px;
    height: 60px;
    animation: rollout 5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    div {
      animation: projroll 5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; 
    }
    text-align: center;
    margin: 0 auto;
  }
</style>
