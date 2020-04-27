<template>
  <v-container>
    <v-row>
      <v-col v-for="item in fields" :key="item.fieldName" :cols="item.col">
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
        <v-radio-group v-model="radioValue" v-if="item.fieldType === 'v-radio-group'" row>
          <v-radio
            v-for="radio in item.radioBtns"
            :key="radio.label"
            :label="radio.label"
            :value="radio.value"
            @click="emitOnRadioClick(radio.value)"
          ></v-radio>
        </v-radio-group>
        <v-btn
          v-if="item.fieldType === 'v-btn'"
          block
          depressed
          :color="item.color"
          v-text="item.fieldName"
          @click="emitOnButtonClick(item.fieldName)"
        ></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn block depressed color="blue">Save information</v-btn>
      </v-col>
      <v-col>
        <v-btn block depressed color="green" :to="route">Proceed to {{ next }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { camelize } from '../mixins/utils'
export default {
  name: 'InputForm',
  props: {
    fields: Array,
    next: String,
    route: String
  },
  data: () => ({
    radioValue: null
  }),
  methods: {
    emitOnBlur (value, itemKeyName) {
      const camelizedNameKey = camelize(itemKeyName)
      this.$emit('blur-event', { value, camelizedNameKey })
    },
    emitOnRadioClick (value) {
      this.radioValue = value
      this.$emit('radio-click-event', { value: this.radioValue })
    },
    emitOnButtonClick (value) {
      this.$emit('button-click-event', { value })
    }
  }
}
</script>

<style>
</style>
