<template>
  <v-btn depressed x-large rounded class="red text-center" :max-width="width" :to="link"> {{ text }} </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    width: String,
    link: String
  }
}
</script>

<style>

</style>
