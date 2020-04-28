<template>
  <BuilderCard
    :title="title"
    :description="description"
    :fields="workFields"
    :next="next"
    :route="route"
    @blur-event="makeStateObject($event, jobObject, processInput)"
    @button-click-event="updateResume"
  />
</template>

<script>
import BuilderCard from '../generic/BuilderCard'
import { mapState, mapActions } from 'vuex'
import { validateObject, filterOnKeys, camelize } from '../../../mixins/utils'
import { makePayload, makeStateObject } from '../../../mixins/factories'
export default {
  name: 'PersonalInfo',
  props: {
    resumeChoice: String
  },
  components: {
    BuilderCard
  },
  data: () => ({
    title: 'Work History',
    next: 'Education',
    route: '/resume-builder/education',
    description: 'Enter some prior work history.',
    jobObject: {
      title: null,
      companyName: null,
      location: null,
      datesThere: null,
      duties: null
    },
    canSubmit: false,
    submittedBefore: false
  }),
  computed: {
    ...mapState('simple', ['workFields', 'resumeInfo']),
    requiredFields () {
      return filterOnKeys(
        'fieldType',
        ['v-text-field', 'v-textarea'],
        this.workFields
      ).map(ele => camelize(ele.fieldName))
    }
  },
  methods: {
    makeStateObject,
    ...mapActions('simple', {
      action: 'addToArrayStated',
      clearAll: 'clearState',
      clearLast: 'removeFromStateArray'
    }),
    processInput (payload) {
      if (payload.camelizedNameKey === 'duties') {
        return payload.value
          .split('-')
          .slice(1)
          .map(ele => ele.trim())
      }
      return payload.value
    },
    updateResume (payload) {
      if (validateObject(this.jobObject, this.requiredFields)) {
        this.canSubmit = true
      }

      const camelizedTitle = camelize(this.title)

      if (payload.value === 'Remove Last Job') {
        this.clearLast(makePayload({ section: camelizedTitle }))
        return
      }

      if (!this.canSubmit) return

      const formattedPayload = makePayload({
        section: camelizedTitle,
        value: { ...this.jobObject } // Spread operator used to pass deep copy of this.jobObject not a pointer to it
      })

      if (!this.submittedBefore) {
        this.clearAll(formattedPayload)
        this.submittedBefore = true
      }

      this.action(formattedPayload)
    }
  }
}
</script>

<style>
</style>
