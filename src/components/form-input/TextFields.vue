<template>
  <div class="input-elm">
    <label class="text-label black--text">{{label}}</label>
    <v-text-field
        v-model="content"
        :placeholder="placeholder"
        :type="type"
        v-bind="$attrs"
        outlined
        dense
    />
  </div>
</template>

<script>
export default {
  name: "TextFields",
  props: {
    label: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    value: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: ''
    },
  },

  computed: {
    content: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>

<style scoped>

</style>