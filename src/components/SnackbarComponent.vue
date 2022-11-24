<template>
  <v-snackbar
      v-model="show"
      :timeout="2000"
      absolute
      top
      :color="obj.success ? 'success' : 'error'"
      outlined
      centered
  >
      {{obj.message}}


    <template v-slot:action="{ attrs }">
      <v-btn
          class="text-capitalize"
          :color="obj.success ? 'success' : 'error'"
          text
          v-bind="attrs"
          @click="onClose"
      >
        Đóng
      </v-btn>
    </template>

  </v-snackbar>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "SnackbarComponent",

  computed: {
    ...mapState('snackbar', ['obj']),
    show: {
      get() {
        return this.obj.isVisible;
      },
      set() {
        this.onClose();
      },
    },
  },

  methods: {
    onClose() {
      this.$store.commit('snackbar/CHANGE_STATUS_SNACKBAR', {
        isVisible: false,
        message: '',
        success: false,
      });
    },
  }
}
</script>

<style scoped>

</style>