/*
 * @Description: 所有插件入口
 * @Author: shilili1
 * @Date: 2018-11-14 16:42:21
 * @LastEditTime: 2018-11-19 17:38:05
 * @LastEditors: Please set LastEditors
 */
import VueDrag from './components/drag/index';

// console.log(VueDrag, 'v9999999');

const components = [
  VueDrag,
];

const install = function (Vue) {
  // console.log('打卡红————————-');
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VueDrag,
};
