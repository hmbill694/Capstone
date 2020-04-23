<template>
  <BuilderCard
    :title="title"
    :fields="openerFields"
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
  name: 'PersonalInfo',
  props: {
    resumeChoice: String
  },
  components: {
    BuilderCard
  },
  data: () => ({
    title: 'Personal Information',
    next: 'Contact Info',
    route: '/resume-builder/contact'
  }),
  computed: {
    ...mapState('simple', ['openerFields'])
  },
  methods: {
    ...mapActions('simple', {
      action: 'alterResumeState'
    }),
    updateResume (payload) {
      const finalPayload = makePayload({
        section: camelize(this.title),
        camelizedKeyName: payload.camelizedKeyName,
        value: payload.value
      })
      this.action(finalPayload)
    }
  }
}
</script>

<style>
</style>
