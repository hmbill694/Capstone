<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="4">
        <v-container fluid>
          <v-card>
            <v-card-title>
              You are all done Building your free Resume
            </v-card-title>
            <v-card-subtitle>
              Now it's time to save it! Click the button below!
            </v-card-subtitle>
          </v-card>
        </v-container>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="8">
        <SimpleResume :resumeInfo="resumeInfo"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SimpleResume from '../components/SimpleResume'
import { mapState } from 'vuex'
export default {
  name: 'ResumeReview',
  components: {
    SimpleResume
  },
  computed: {
    ...mapState('simple', ['resumeInfo'])
  }
}
</script>

<style>

</style>
