<template>
  <BuilderCard
    title="Personal Information"
    :fields="openerFields"
    next="Contact Info"
    route="/resume-builder/contact"
    @blur-event="updateResume"
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
  computed: {
    ...mapState('simple', ['openerFields'])
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
