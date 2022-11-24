<template>
  <div class="about-views">
    <h2 class="main-title mb10 text-center">Test mixin css</h2>

    <v-form>
      <v-row class="my-0">
        <v-col class="py-0" :md="6">
          <TextFields
            v-model="formModel.name"
            :rules="VALIDATION.nameRules"
            placeholder="Full name"
            type="text"
            label="Full name"
          />
        </v-col>
        <v-col class="py-0" :md="6">
          <TextFields
            v-model="formModel.password"
            placeholder="Password"
            type="password"
            label="Password"
          />
        </v-col>
        <v-col class="py-0" :md="6">
          <TextSelect
            v-model="formModel.status"
            :item="STATUS"
            label="Status"
            placeholder="Status"
          />
        </v-col>
        <v-col class="py-0" :md="6">
          <DatePicker
            v-model="formModel.createDate"
            label="Choice date"
            placeholder="Choice"
          />
        </v-col>
      </v-row>
    </v-form>
    <br />

    <div class="text-center mb-5">
      <ButtonCustom color="primary" :loading="false">Submit</ButtonCustom>
    </div>

    <TableComponent :headers="HEADER" :body="convertBody">
      <template #[`item.numberPhone`]="{ item }">
        {{ item.numberPhone | formatNumberPhone }}
      </template>

      <template #[`item.status`]="{ item }">
        <span
          :style="
            item.status === 1
              ? 'color:#4caf50'
              : item.status === 0
              ? 'color: #ff5252'
              : ''
          "
        >
          {{ item.status === 1 ? 'Hoạt động' : item.status === 0 ? 'Tạm dừng' : '' }}
        </span>
      </template>

      <template #[`item.actions`]="{ item }">
        <div class="inner-button">
          <v-btn color="success" @click="editItem(item)" small class="mr-3">
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>
          <v-btn color="error" @click="deleteItem(item)" small>
            <v-icon>mdi-delete-off</v-icon>
          </v-btn>
        </div>
      </template>
    </TableComponent>

    <PaginationComponent :get-pagination="pagination" @changePage="changePage" />
    <br />

    <div class="custom-directive mt-10 d-flex">
      <div
        v-theme:bg="'wide'"
        v-for="(item, index) in POSTS"
        :key="index"
        class="mr-2 pa-5"
      >
        <h2 v-randomColor>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <ModalBasic v-model="isShow">
      <template #textMessage>
        <p class="mb-0">Bạn chắc chắn muốn xóa</p>
      </template>
      <template #button>
        <v-btn class="text-capitalize black--text mx-2" small @click="isShow = false">
          Hủy
        </v-btn>

        <v-btn
          color="error"
          class="text-capitalize white--text mx-2"
          small
          @click="handleDelete"
        >
          Xóa
        </v-btn>
      </template>
    </ModalBasic>
  </div>
</template>

<script>
import TextFields from '@/components/form-input/TextFields';
import TextSelect from '@/components/form-input/TextSelect';
import DatePicker from '@/components/form-input/DatePicker';
import TableComponent from '@/components/table/TableComponent';
import { STATUS } from '@/common/status';
import { VALIDATION } from '@/common/validation';
import { BODY, HEADER } from '@/common/const-table';
import { POSTS } from '@/common/posts';
import ModalBasic from '@/components/modal/ModalBasic';
import ButtonCustom from '@/components/form-input/ButtonCustom';
import PaginationComponent from '@/components/table/PaginationComponent';

import { mapActions } from 'vuex';

export default {
  name: 'AboutViews',
  components: {
    PaginationComponent,
    ButtonCustom,
    ModalBasic,
    TableComponent,
    DatePicker,
    TextSelect,
    TextFields,
  },
  // custom directives local
  directives: {
    randomColor: {
      bind(el) {
        el.style.color = '#' + Math.random().toString().slice(2, 8);
      },
    },
    theme: {
      bind(el, binding) {
        if (binding.value === 'wide') {
          el.style.width = '400px';
          el.style.background = '#f1f1f1';
        }
        if (binding.arg === 'bg') {
          el.style.borderRadius = '5px';
        }
      },
    },
  },

  data() {
    return {
      STATUS,
      VALIDATION,
      HEADER,
      BODY,
      POSTS,
      formModel: {
        name: 'Nguyen Quang Sang',
        password: 'bnc',
        status: 1,
        createDate: '',
      },
      isShow: false,
      pagination: {
        page: 1,
        size: 10,
        items: 50,
      },
    };
  },

  computed: {
    convertBody() {
      return this.BODY.map((BODY, index) => ({
        ...BODY,
        index: index + 1,
      }));
    },
  },

  methods: {
    ...mapActions('loadingPage', ['handleLoadingPage']),
    deleteItem(v) {
      console.log('v', v);
      this.isShow = true;
    },

    handleDelete() {
      this.handleLoadingPage(true);
      this.$store.commit('snackbar/CHANGE_STATUS_SNACKBAR', {
        isVisible: true,
        message: 'Xóa thành công',
        success: true,
      });
      this.isShow = false;
      this.handleLoadingPage(false);
    },

    editItem(v) {
      this.$store.commit('modalBasic/SHOW_MODAL_BASIC', true);
      this.$store.commit('modalBasic/SET_DATA_OBJ', v);
    },

    changePage(e) {
      console.log('e', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.about-views {
  width: 960px;
  margin: 30px auto;
}

.v-form {
  background: #ccc;
  padding: 15px;
  border-radius: 10px;
}

.main-title {
  // @include test;
  // color: $primary;
}
</style>
