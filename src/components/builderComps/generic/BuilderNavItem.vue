<template>
  <v-list-item :to="info.route" three-line>
    <v-list-item-content>
      <v-list-item-title>{{ info.text }}</v-list-item-title>
      <v-list-item-subtitle>{{ info.description }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'BuilderNavItem',
  props: {
    info: Object
  }
}
</script>

<style>
</style>
