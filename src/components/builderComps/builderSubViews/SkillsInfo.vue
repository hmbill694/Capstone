<template>
  <BuilderCard
    :title="title"
    :description="description"
    :fields="skillsFields"
    :next="next"
    @blur-event="updateResume"
    @radio-click-event="setSkillsPerColumn"
  />
</template>

<script>
import BuilderCard from '../generic/BuilderCard'
import { mapState, mapActions } from 'vuex'
import { makePayload } from '../../../mixins/factories'
import { camelize } from '../../../mixins/utils'
export default {
  name: 'PersonalInfo',
  props: {
    resumeChoice: String
  },
  components: {
    BuilderCard
  },
  data: () => ({
    title: 'Skills',
    next: 'Work History',
    route: '/resume-builder/work-history',
    description: `Please select how many colomns you would skills you would like 
                  to have in each column`,
    skillPerColmn: null
  }),
  computed: {
    ...mapState('simple', ['skillsFields'])
  },
  methods: {
    ...mapActions('simple', {
      action: 'alterResumeState'
    }),
    updateResume (payload) {
      const numColumns = this.skillPerColmn
      if (!numColumns) {
        console.error('A number of rows per column must be selected')
        return
      }

      const skills = payload.value.split(' ')

      let splitSkills = []
      while (skills.length) {
        splitSkills = [...splitSkills, skills.splice(0, numColumns)]
      }

      const formattedValues = splitSkills.map((ele, index) => ({ col: index, values: ele }))

      const finalPayload = makePayload({
        section: camelize(this.title),
        value: formattedValues
      })
      this.action(finalPayload)
    },
    setSkillsPerColumn (payload) {
      this.skillPerColmn = payload.value
    }
  }
}
</script>

<style>
</style>
