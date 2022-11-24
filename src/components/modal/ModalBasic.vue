<template>
  <v-dialog v-model="isShow" width="400" @click:outside="hideModal">
    <div class="card-body py-12 px-8">
      <div class="card-body__close d-none">
        <v-icon @click="hideModal">mdi-close</v-icon>
      </div>

      <div class="card-body__content">
        <div class="text-message text-center mb-12">
          <slot name="textMessage" />
        </div>

        <div class="group-button text-center">
          <slot name="button" />
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalBasic',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isShow: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    hideModal() {
      this.isShow = false;
      this.$emit('close', this.isShow);
    },
  },
};
</script>

<style lang="scss" scoped></style>
