<template>
  <div class="input-elm">
    <label class="text-label black--text">{{ label }}</label>
    <v-menu
      ref="menuDatePicker"
      :close-on-content-click="false"
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <v-text-field
            v-bind="$attrs"
            :value="value | formatDate"
            v-on="$listeners"
            outlined
            dense
            append-icon="mdi-calendar"
          />
        </div>
      </template>
      <div>
        <v-date-picker
          v-model="content"
          color="primary"
          width="290"
          @change="onChangeDate"
        />
      </div>
    </v-menu>
  </div>
</template>

<script>

export default {
  name: "DatePicker",
  props: {
    label: {
      type: String,
      default: "",
    },

    value: {
      type: String,
      default: () => "",
    },


  },

  data() {
    return {
      date: null,
    };
  },

  computed: {
    content: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit("input", val || "");
      },
    },
  },

  methods: {
    onChangeDate(date) {
      if (date.length) {
        this.$refs.menuDatePicker.isActive = false;
      }
    },
  },
};
</script>

<style scoped></style>
