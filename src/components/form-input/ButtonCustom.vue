<template>
<v-btn :color="color" :loading="loading" class="text-capitalize">
  <slot/>
</v-btn>
</template>

<script>
export default {
  name: "ButtonCustom",
  props:{
    color: {
      type: String,
      default: require
    },

    loading: {
      type: Boolean,
      default: require
    }
  }
}
</script>

<style scoped>

</style>