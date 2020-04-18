<template>
  <v-card >
    <v-card-title>
      <v-spacer></v-spacer>
      <h2>Personal Info</h2>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
      <InputForm :fields="openerFields" next="Contact Info" @blur-event="blur"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import InputForm from './InputForm'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'PersonalInfo',
  props: {
    resumeChoice: String
  },
  components: {
    InputForm
  },
  computed: {
    ...mapState('simple', ['openerFields'])
  },
  methods: {
    ...mapActions('simple', {
      blur: 'alterResumeState'
    })
  }
}
</script>

<style>

</style>
