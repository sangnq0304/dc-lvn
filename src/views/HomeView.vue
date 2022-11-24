<template>
  <div class="faq__content">
    {{ visible }}
    <ul data-accordion class="faq__list">
      <li
        v-for="item in qaInSelectedPageLst"
        :key="item.catId"
        id="qa-item"
        class="faq__list-item"
      >
        <div
          id="data-accordion-btn"
          class="faq__list-question"
          :class="{ accordion__trigger_active: visible }"
          @click="open(item.catId)"
        >
          <div class="faq__list-item-content">
            <span
              v-if="item.qustDiv !== '0'"
              :class="['badge badge--large color-white', setClass(item.qustDiv)]"
            >
              {{ setQustDiv(item.qustDiv) }}
            </span>
            <div class="faq__list-item-content-inner">
              <h2 class="faq__list-item-title">
                {{ item.qustCont }}
              </h2>
            </div>
          </div>
        </div>

        <transition
          name="accordion"
          @enter="start"
          @after-enter="end"
          @before-leave="start"
          @after-leave="end"
        >
          <div
            v-show="visible[item.catId]"
            id="data-accordion-content"
            class="data-content"
          >
            <div id="inner-content">
              <div class="faq__list-answer">
                <div class="faq__list-item-content">
                  <p v-html="item.answCont" />
                </div>
              </div>
              <div class="faq__list-btn-wrap">
                <button
                  @click="open(item.catId)"
                  id="btn-close"
                  data-accordion-btn-close
                  class="faq__btn-close color-danger800"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'HomeView',
  data() {
    return {
      visible: {},

      qaInSelectedPageLst: [
        {
          catId: 12,
          qustCont: '確定拠出年金お取引状況のお知らせが届きました。この書類は何ですか?',
          answCont:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur officia soluta unde voluptatem? Asperiores, aspernatur, consectetur deserunt dicta dignissimos eaque, eligendi et expedita explicabo minus praesentium unde voluptates voluptatibus!',
          qustDiv: '2',
        },
        {
          catId: 13,
          qustCont: '確定拠出年金お取引状況のお知らせが届きました。この書類は何ですか?',
          answCont:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur officia soluta unde voluptatem? Asperiores, aspernatur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur officia soluta unde voluptatem? Asperiores, aspernatur, consectetur deserunt dicta dignissimos eaque, eligendi et expedita explicabo minus praesentium unde voluptates voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur officia soluta unde voluptatem? Asperiores, aspernatur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur officia soluta unde voluptatem? Asperiores, aspernatur, sa',
          qustDiv: '1',
        },
      ],
    };
  },

  created() {
    // this.index = this.Accordion.count++;
  },

  methods: {
    open(id) {
      if (this.visible[id]) {
        Vue.set(this.visible, id, false);
        // this.Accordion.active = null;
      } else {
        Vue.set(this.visible, id, true);
        // this.Accordion.active = this.index;
      }
      console.log('a:', this.visible);
    },
    start(el) {
      console.log('el', el);
      el.style.height = el.scrollHeight + 'px';
    },
    end(el) {
      el.style.height = '';
    },

    setQustDiv(value) {
      let text = '';
      switch (value) {
        case '0':
          text = '';
          break;
        case '1':
          text = 'iDeCo';
          break;
        case '2':
          text = '企業型';
          break;
      }
      return text;
    },

    setClass(value) {
      let text = '';
      switch (value) {
        case '0':
          text = '';
          break;
        case '1':
          text = 'bg-warn';
          break;
        case '2':
          text = 'bg-mark015';
          break;
      }
      return text;
    },
  },
};
</script>

<style scoped lang="scss">
ul li {
  list-style: none;
}
.faq__list-question {
  display: flex;
  align-items: center;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
