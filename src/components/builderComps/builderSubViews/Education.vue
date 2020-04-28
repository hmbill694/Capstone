<template>
  <BuilderCard
    :title="title"
    :description="description"
    :fields="educationFields"
    :next="next"
    :route="route"
    @blur-event="makeStateObject($event, educationObject)"
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
    title: 'Education',
    next: 'Organizations',
    route: '/resume-builder/organization',
    description: 'Enter any education history.',
    educationObject: {
      degreeName: null,
      institutionName: null,
      datesAttended: null
    },
    canSubmit: false,
    submittedBefore: false
  }),
  computed: {
    ...mapState('simple', ['educationFields', 'resumeInfo']),
    requiredFields () {
      return filterOnKeys(
        'fieldType',
        ['v-text-field', 'v-textarea'],
        this.educationFields
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
    updateResume (payload) {
      if (validateObject(this.educationObject, this.requiredFields)) {
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
