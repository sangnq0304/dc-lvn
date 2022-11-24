<template>
  <v-pagination
      v-model="pagination.page"
      :length="lengthItems"
      :total-visible="5"
      color="primary"
      class="pagination-ctrl mt-5 float-right"
      @input="changePage"
  />
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    getPagination: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    getPagination(v) {
      this.pagination = { ...v };
    },
  },
  created() {
    if (this.getPagination) {
      this.pagination = { ...this.getPagination };
    }
  },
  data() {
    return {
      pagination: {
        size: 10,
        page: 1,
        items: null,
      },
    };
  },
  computed: {
    lengthItems() {
      return Math.ceil(this.pagination.items / +this.pagination.size) || 0;
    },
  },
  methods: {
    changePage(e) {
      this.$emit('changePage', e);
    },
  },
};
</script>

<style scoped></style>
