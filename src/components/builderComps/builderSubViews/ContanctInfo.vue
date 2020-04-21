<template>
  <BuilderCard
    title="Contact Information"
    :fields="contactFields"
    next="Skills"
    route="/resume-builder/skills"
    @blur-event="updateResume"
  />
</template>

<script>
import BuilderCard from '../generic/BuilderCard'
import { mapState, mapActions } from 'vuex'
import { makePayload } from '../../../mixins/factories'
import { camelize } from '../../../mixins/utils'
export default {
  name: 'ContactInfo',
  props: {
    resumeChoice: String
  },
  components: {
    BuilderCard
  },
  computed: {
    ...mapState('simple', ['contactFields'])
  },
  methods: {
    ...mapActions('simple', {
      action: 'alterResumeState'
    }),

    updateResume (payload) {
      const x = makePayload({
        section: camelize(payload.title),
        camelizedKeyName: payload.camelizedKeyName,
        value: payload.value
      })
      this.action(x)
    }
  }
}
</script>

<style>
</style>
