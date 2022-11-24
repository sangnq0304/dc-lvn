import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import vuetify from './plugins/vuetify'
import mixin from '@/common/mixin'
import './assets/scss/theme.scss';


Vue.mixin(mixin)
Vue.config.productionTip = false
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
