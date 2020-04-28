<template>
  <BuilderCard
    :title="title"
    :description="description"
    :fields="languageFields"
    :next="next"
    :route="route"
    @blur-event="makeStateObject($event, languageObject)"
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
    title: 'Languages',
    next: 'Review Resume',
    route: '/resume-review',
    description: 'Enter any language history.',
    languageObject: {
      language: null,
      skillLevel: null
    },
    canSubmit: false,
    submittedBefore: false
  }),
  computed: {
    ...mapState('simple', ['languageFields', 'resumeInfo']),
    requiredFields () {
      return filterOnKeys(
        'fieldType',
        ['v-text-field', 'v-textarea'],
        this.languageFields
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
      if (validateObject(this.languageObject, this.requiredFields)) {
        this.canSubmit = true
      }

      const camelizedTitle = camelize(this.title)

      if (payload.value === 'Remove Last Entry') {
        this.clearLast(makePayload({ section: camelizedTitle }))
        return
      }

      if (!this.canSubmit) return

      const formattedPayload = makePayload({
        section: camelizedTitle,
        value: { ...this.languageObject } // Spread operator used to pass deep copy of this.jobObject not a pointer to it
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
