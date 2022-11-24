<template>
  <v-data-table
      :headers="headers"
      :items="body"
      class="elevation-1"
      hide-default-footer
      disable-sort
  >
    <template v-for="(_, scopedSlotName) in $scopedSlots" #[scopedSlotName]="slotData">
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    body: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>

</style>