import Vue from 'vue';
import router from './router';
import App from './App.vue';
import VueDrag from '../dist/js/index';
import '../src/styles/normalize.css';
import '../src/styles/common.scss';
import './styles/example.scss';

Vue.config.productionTip = false;
Vue.use(VueDrag);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
