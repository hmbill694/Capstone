<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-content>
      <InputForm />
    </v-card-content>
  </v-card>
</template>

<script>

export default {
  name: 'BuilderCard',
  props: {
    title: String,
    fields: Array,
    next: String
  }
}
</script>

<style>
</style>
