<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-card-actions>
      <InputForm
        :fields="fields"
        :next="next"
        :route="route"
        @blur-event="emitOnBlur"
        @radio-click-event="emitOnRadioClick"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import InputForm from '../../InputForm'
export default {
  name: 'BuilderCard',
  props: {
    title: String,
    description: String,
    fields: Array,
    next: String,
    route: String
  },
  components: {
    InputForm
  },
  methods: {
    emitOnBlur (payload) {
      this.$emit('blur-event', payload)
    },
    emitOnRadioClick (payload) {
      this.$emit('radio-click-event', payload)
    }
  }
}
</script>

<style>
</style>
