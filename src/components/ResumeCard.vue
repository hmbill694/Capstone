<template>
  <v-card >
    <v-card-title>
      <v-spacer></v-spacer>
      <h3>{{ title }}</h3>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-img :src="require(`../assets/${resumeImage}`)" max-height="800px" contain=""></v-img>
    <v-card-actions>
        <BlockButton text="Select Template" :routeInfo="routeInfo"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import BlockButton from './BlockButton'
export default {
  name: 'ResumeCard',
  components: {
    BlockButton
  },
  props: {
    title: String,
    resumeImage: String
  },
  computed: {
    routeInfo: function () {
      return {
        name: 'ResumeBuilderPersonal',
        params: {
          resumeChoice: this.title.toLowerCase()
        }
      }
    }
  }
}
</script>

<style>
</style>
