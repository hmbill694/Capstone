<template>
  <BuilderCard
    :title="title"
    :fields="contactFields"
    :next="next"
    :route="route"
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
  data: () => ({
    title: 'Contact Information',
    next: 'Skills',
    route: '/resume-builder/skills'
  }),
  computed: {
    ...mapState('simple', ['contactFields'])
  },
  methods: {
    ...mapActions('simple', {
      action: 'alterResumeState'
    }),

    updateResume (payload) {
      const finalPayload = makePayload({
        section: camelize(this.title),
        camelizedNameKey: payload.camelizedNameKey,
        value: payload.value
      })
      this.action(finalPayload)
    }
  }
}
</script>

<style>
</style>
