<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-for="job in jobs2">
      <img class="job-item" :src="job.jobImage" />
      <p>{{ job.jobTitle }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MarcProjects',
  data () {
    return {
      jobs2: [
        { 
          jobTitle: 'Pearl Jam',
          jobImage: '/static/pearljam600.jpg'
        }
      ],
      jobs: [
        { 
          jobTitle: 'Educational Marketer',
          jobImage: '/static/educationalmarketer600.jpg'
        },
        { 
          jobTitle: 'Pearl Jam',
          jobImage: '/static/pearljam600.jpg'
        },
        { 
          jobTitle: 'Words Without Borders',
          jobImage: '/static/wwb600.jpg'
        },
        { 
          jobTitle: 'WellFormative Health',
          jobImage: '/static/wellformative600.jpg'
        },
        { 
          jobTitle: 'Foreign Policy',
          jobImage: '/static/foreignpolicy600.jpg'
        },
        { 
          jobTitle: 'Law Firm of Laurence P. Greenberg',
          jobImage: '/static/lpgdivorce600.jpg'
        },
        { 
          jobTitle: 'Eli Stein Cartoons',
          jobImage: '/static/elistein600.jpg'
        },
        { 
          jobTitle: 'Practical Handbook of Group Counseling ',
          jobImage: '/static/ghppracticalhandbooks600.jpg'
        },
        { 
          jobTitle: 'Literary Kicks',
          jobImage: '/static/litkicks600.jpg'
        },
        { 
          jobTitle: 'Pacifism for the 21st Century',
          jobImage: '/static/pacgogo600.jpg'
        },
        { 
          jobTitle: 'Time Inc. New Media',
          jobImage: '/static/pathfinder600.jpg'
        },
        { 
          jobTitle: 'iVillage.com',
          jobImage: '/static/ivillage600.jpg'
        },
        { 
          jobTitle: 'Inference Data',
          jobImage: '/static/inference600.jpg'
        },
        { 
          jobTitle: 'History Channel',
          jobImage: '/static/historychannel600.jpg'
        },
        { 
          jobTitle: 'Virtual Career Network',
          jobImage: '/static/vcn600.jpg'
        },
        { 
          jobTitle: 'Center for Disease Control',
          jobImage: '/static/cdc600.jpg'
        },
        { 
          jobTitle: 'Power Bar',
          jobImage: '/static/powerbar600.jpg'
        }
      ],
      msg: 'Recent Work ...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job-item {
  width: 400px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000000;
}
</style>
