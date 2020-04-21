<template>
  <BuilderCard
    title="Skills"
    description="Please select how many colomns you would skills you would like to have in each column"
    :fields="skillsFields"
    next="Contact Info"
    @blur-event="blur"
    @radio-click-event="setSkillsPerColumn"
  />
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
  data: () => ({
    skillPerColmn: null
  }),
  computed: {
    ...mapState('simple', ['skillsFields'])
  },
  methods: {
    ...mapActions('simple', {
      action: 'alterResumeState'
    }),
    blur (payload) {
      if (!this.skillPerColmn) {
        console.error('A number of rows per column must be selected')
        return
      }

      const skills = payload.value.split(' ')
      let splitSkills = []
      while (skills.length) {
        splitSkills = [...splitSkills, skills.splice(0, 4)]
      }
    },
    setSkillsPerColumn (payload) {
      this.skillPerColmn = payload.value
    }
  }
}
</script>

<style>
</style>
