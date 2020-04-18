<template>
  <BuilderCard title ="Personal Informatio" :fields="openerFields" next="Contact Info" @blur-event="blur" />
</template>

<script>
import BuilderCard from '../generic/BuilderCard'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'PersonalInfo',
  props: {
    resumeChoice: String
  },
  components: {
    BuilderCard
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
