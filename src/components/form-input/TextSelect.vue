<template>
  <div class="input-elm">
    <label class="text-label black--text">{{label}}</label>
    <v-select
        v-model="content"
        :items="item"
        :placeholder="placeholder"
        item-text="name"
        item-value="value"
        dense
        outlined
    />
  </div>
</template>

<script>
export default {
  name: "TextSelect",
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
      type: [String, Number],
      default: ''
    },

    item: {
      type: Array,
      default: require,
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