/*
 * @Description: 挂载插件
 * @Author: shilili1
 * @Date: 2018-11-14 16:38:34
 * @LastEditTime: 2018-11-14 16:48:33
 * @LastEditors: shilili1
 */

import VueDrop from './vue-drop.vue';

VueDrop.install = Vue => Vue.component(VueDrop.name, VueDrop);

export default VueDrop;
