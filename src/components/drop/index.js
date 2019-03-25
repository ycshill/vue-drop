/*
 * @Description: 挂载插件
 * @Author: shilili1
 * @Date: 2018-11-14 16:38:34
 * @LastEditTime: 2019-03-21 15:59:42
 * @LastEditors: Please set LastEditors
 */

import VueDrop from './VueDrop.vue';

VueDrop.install = Vue => Vue.component(VueDrop.name, VueDrop);

export default VueDrop;
