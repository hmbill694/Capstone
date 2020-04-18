<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-actions>
      <InputForm :fields="fields" :next="next" @blur-event="emitOnBlur"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import InputForm from '../../InputForm'
export default {
  name: 'BuilderCard',
  props: {
    title: String,
    fields: Array,
    next: String
  },
  components: {
    InputForm
  },
  methods: {
    emitOnBlur (payload) {
      this.$emit('blur-event', payload)
    }
  }
}
</script>

<style>
</style>
