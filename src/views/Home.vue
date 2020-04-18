<template>
  <v-container class="white" fill-height>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <h1 class="display-2 font-weight-bold ma-3 pa-2">
            Build a
            <span class="red--text">free</span> professional resume in minutes
          </h1>
          <Button text="Get Started" width="400" link="resume-select"/>
          <h3 class="ma-3 pa-2 font-weight-bold">A resume builder vetted by HR Experts</h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Button from '../components/Button'
export default {
  name: 'Home',
  components: {
    Button
  }
}
</script>
