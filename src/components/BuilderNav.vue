<template>
  <v-navigation-drawer absolute>
    <v-list nav>
      <v-list-item-group>
        <BuilderNavItem v-for="item in navContent" :key="item.text" :info="item" />
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import BuilderNavItem from './BuilderNavItem'
export default {
  name: 'BuilderNav',
  props: {
    navContent: Array
  },
  components: {
    BuilderNavItem
  }
}
</script>

<style>
</style>
