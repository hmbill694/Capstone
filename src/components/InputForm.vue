<template>
  <v-container>
    <v-container>
      <v-row v-for="item in fields" :key="item.fieldName">
        <v-col :cols="12">
          <v-text-field
            v-if="item.fieldType === 'v-text-field'"
            :label="item.fieldName"
            @blur="emitOnBlur(value)"
            required
            clearable
          ></v-text-field>
          <v-textarea
            v-if="item.fieldType === 'v-textarea'"
            auto-grow
            clearable
            :placeholder="item.fieldName"
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
    emitOnBlur (payload) {
      this.$emit('blur-event', payload)
    }
  }
}
</script>

<style>
</style>
