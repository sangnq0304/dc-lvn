<template>
  <div class="page-content">
    <div class="sang-nq">
      <h2 class="block-title px-4 py-2">Variants</h2>
      <div class="main-body pa-4">
        <div
          v-for="(block, index) in optionBlock"
          :key="`block-${index}`"
          class="block-elm pa-4 mb-5"
        >
          <span class="close" @click="removeBlock(block.id)">x</span>
          <v-row class="my-0">
            <v-col :md="6" class="py-0">
              <div class="main-left">
                <h5 class="mb-2">Option name</h5>
                <TextFieldsTest v-model="block.name" type="text" />
              </div>
            </v-col>

            <v-col :md="6" class="py-0">
              <h5 class="mb-2">Option value {{ index + 1 }}</h5>
              <div
                class="inner-input d-flex align-center"
                v-for="(item, i) in block.optionValue"
                :key="`value-${i}`"
              >
                <TextFieldsTest
                  v-model="item.value"
                  @blur="onBlur"
                  type="text"
                  placeholder="Nhập vào"
                />

                <span class="btn" @click="removeField(index, item.id, block.optionValue)"
                  >-</span
                >
                <span class="btn" @click="addField(item, block.optionValue)">+</span>
              </div>
            </v-col>
          </v-row>
        </div>

        <div class="add-block mt-5">
          <span class="btn" @click="addBlock">Add option</span>
        </div>
      </div>
    </div>

    <div class="sang-nq pa-4">
      <h5>SKU</h5>
      <div class="sku-item" v-for="(item, index) in listSku" :key="index">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
import TextFieldsTest from '@/components/form-input/TextFieldsTest';

export default {
  name: 'SangNq',

  components: { TextFieldsTest },

  data() {
    return {
      optionBlock: [
        {
          id: Number(Math.random().toString().slice(2, 8)),
          name: 'Flavor',
          optionValue: [{ value: '', id: Number(Math.random().toString().slice(2, 8)) }],
        },
      ],
      listSku: [
        {
          value: '',
        },
      ],
    };
  },

  created() {},

  methods: {
    onBlur() {
      this.optionBlock.map((item, index) => {
        this.mapData(
          item.optionValue,
          this.optionBlock[index + 1] ? this.optionBlock[index + 1].optionValue : null,
        );
      });
    },

    mapData(arr1, arr2) {
      console.log(arr1, arr2);
      let result = [];
      arr1.map((x) => {
        if (arr2) {
          arr2.map((y) => {
            result.push({ value: `${x.value}-${y.value}` });
          });
        } else {
          result.push(x);
        }
      });
      console.log(result);
      this.listSku = result;
    },

    addField(v, fieldType) {
      if (fieldType.length > 4) return;
      fieldType.push({
        value: '',
        id: Number(Math.random().toString().slice(2, 8)),
      });
    },

    removeField(index, id, fieldType) {
      this.optionBlock[index].optionValue = fieldType.filter((item) => item.id !== id);
    },

    addBlock() {
      if (this.optionBlock && this.optionBlock.length > 5) return;
      this.optionBlock.push({
        id: Math.random().toString().slice(2, 8),
        name: 'new option',
        optionValue: [{ value: '', id: Number(Math.random().toString().slice(2, 8)) }],
      });
    },

    removeBlock(id) {
      this.optionBlock = this.optionBlock.filter((item) => item.id !== id);
    },
  },
};
</script>

<style scoped lang="scss">
.sang-nq {
  width: 960px;
  margin: 30px auto;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  .block-title {
    font-size: 20px;
    background: #f7f7f7;
  }
}
.main-body {
  .block-elm {
    position: relative;
    background: #f7f7f7;
    border-radius: 5px;
    .close {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: 1px solid #333;
      border-radius: 50%;
      background: #000;
      color: #fff;
      z-index: 1;
      top: -8px;
      right: -5px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
.inner-input {
  position: relative;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    border-radius: 50%;
    background: #fff;
    top: -11px;
    right: -5px;
    font-size: 14px;
    cursor: pointer;
    margin-left: 5px;
  }
}
.add-block {
  .btn {
    background: #1f568b;
    display: inline-block;
    padding: 5px 10px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
