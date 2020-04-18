<template>
  <v-container class="white" fill-height>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <h1 class="display-2 font-weight-bold ma-3 pa-2">
            CHOOSE YOUR
            <span class="red--text">RESUME TEMPLETE</span>
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="item in resumes" :key="item.title" >
        <ResumeCard :title="item.title" :resumeImage="item.img"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResumeCard from '../components/ResumeCard'
import { mapState } from 'vuex'
export default {
  name: 'ResumeSelect',
  components: {
    ResumeCard
  },
  data: () => ({
    resumes: []
  }),
  computed: {
    ...mapState(['resumesTabs'])
  },
  mounted: function () {
    this.resumes = this.resumesTabs
  }
}
</script>

<style>
</style>
