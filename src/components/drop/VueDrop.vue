<template lang="html">
  <div class="v-drop">
    <slot
      name="v-drop"
      :list="list"
    />
  </div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  name: 'VueDrop',
  props: {
    // 展示的数据
    list: {
      type: Array,
      default: () => ([]),
    },
    elId: {
      type: String,
      default: '',
      required: true,
    },
    // 配置信息
    options: {
      type: Object,
      default: null,
      required: false,
    },
  },
  data() {
    return {
    };
  },
  mounted() {
    const that = this;
    const defOptions = {
      onStart(evt) {
        console.log('onStart');
      },
      onEnd(evt) {
        const {
          oldIndex,
          item,
          newIndex,
          from,
          to,
        } = evt;
        // 是否在同一个拖拽区域中
        const isSamePanel = that.isSamePanel(from, to);
        that.onDragEnd(oldIndex, newIndex, item, isSamePanel);
      },
      onMove(evt, originalEvent) {
        // console.log(evt, originalEvent, 'onMove');
        // const { from, to } = evt;

        // console.log(from.isEqualNode(to), 'onMove');
      },
      onAdd(evt) {
        console.log('onAdd');
      },
      onClone(evt) {
        evt.clone = '232';
        console.log('onClone');
      },
      onChange(evt) {
        console.log('onChange');
      },
      onFilter(evt) {
        console.log('onFilter');
      },
      onUpdate(evt) {
        console.log('onUpdate');
      },
      onChoose(evt) {
        console.log('onChoose');
      },
    };
    // 创建一个 sortable
    const el = document.querySelector(`#${this.elId}`);
    if (el) {
      this.sortable = Sortable.create(el, Object.assign({}, defOptions, this.options));
    }
    console.log(this.sortable);
  },
  destroyed() {
    this.sortable.destroy();
  },
  methods: {
    // 判断拖拽的区域是否是同一个拖拽区域
    isSamePanel(from, to) {
      return from.isEqualNode(to);
    },
    /**
     * @description: 当拖拽某个元素结束的时候触发事件
     * @param {Number} oldIndex 元素原来的位置
     * @param {Number} newIndex 元素新的位置
     * @param {Object} item 被拖拽的Dom元素
     * @param {Boolean} isSamePanel 被拖拽的元素是否在同一区域内移动
     * @return:
     */
    onDragEnd(oldIndex, newIndex, item, isSamePanel) {
      const obj = {
        oldIndex,
        newIndex,
        item,
        isSamePanel,
      };

      this.$emit('onDragEnd', obj);
    },
  },
};
</script>
