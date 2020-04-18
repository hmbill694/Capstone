<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="2">
        <BuilderNav :navContent="navContent" />
      </v-col>
      <v-col cols="4">
        <router-view></router-view>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="6">
        <SimpleResume :resumeInfo="resumeInfo"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BuilderNav from '../components/BuilderNav'
import SimpleResume from '../components/SimpleResume'
import { mapState } from 'vuex'
export default {
  name: 'ResumeBuilder',
  props: {
    resumeChoice: String
  },
  components: {
    BuilderNav,
    SimpleResume
  },
  computed: {
    ...mapState('simple', ['navContent', 'resumeInfo'])
  }
}
</script>

<style>
</style>
