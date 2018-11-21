import Vue from 'vue';
import router from './router';
import App from './App.vue';
// import VueDrop from '../dist/vue-drop';
import VueDrop from '../src/index';
import '../src/styles/normalize.css';
import '../src/styles/common.scss';
import './styles/example.scss';

Vue.config.productionTip = false;
Vue.use(VueDrop);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
