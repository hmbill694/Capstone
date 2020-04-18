<template>
  <v-btn depressed x-large rounded class="red text-center" block :to="routeInfo"> {{ text }} </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    routeInfo: Object
  }
}
</script>

<style>

</style>
