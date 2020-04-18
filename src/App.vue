<template>
  <v-app>
    <AppBar/>
    <v-content>
      <v-container class="grey lighten-5" fluid fill-height>
         <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  })
}
</script>
