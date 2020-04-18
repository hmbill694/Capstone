<template>
  <v-container>
    <v-container>
      <v-row v-for="item in fields" :key="item.fieldName">
        <v-col :cols="12">
          <v-text-field
            v-if="item.fieldType === 'v-text-field'"
            :label="item.fieldName"
            @blur="emitOnBlur($event.target.value, item.fieldName)"
            required
            clearable
          ></v-text-field>
          <v-textarea
            v-if="item.fieldType === 'v-textarea'"
            auto-grow
            clearable
            :placeholder="item.fieldName"
            @blur="emitOnBlur($event.target.value, item.fieldName)"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn block depressed color="blue">Save information</v-btn>
        </v-col>
        <v-col>
          <v-btn block depressed color="green">Proceed to {{ next }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    fields: Array,
    next: String,
    blurFuntion: Function
  },
  methods: {
    emitOnBlur (value, itemKeyName) {
      const camelizedKeyName = itemKeyName
        .split(' ') // seperate string to array by spliting at spaces
        .map((element, index) => { // put first word to all lower case and capitalize all subsequent words
          if (index !== 0) {
            return element.charAt(0).toUpperCase() + element.slice(1)
          }
          return element.charAt(0).toLowerCase() + element.slice(1)
        })
        .join('')

      this.$emit('blur-event', { value, camelizedKeyName })
    }
  }
}
</script>

<style>
</style>
