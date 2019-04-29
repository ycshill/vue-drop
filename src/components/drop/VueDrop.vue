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
  watch: {
    elId: {
      handler(val) {
        this.sortable.destroy();
        this.createSort();
      },
      deep: true,
    },
  },
  mounted() {
    this.createSort();
  },
  destroyed() {
    window.console.log(12);
    this.sortable.destroy();
  },
  methods: {
    createSort() {
      const that = this;
      const defOptions = {
        onStart(evt) {
          that.$emit('start', evt);
          window.console.log('onStart', evt);
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
          that.onDragEnd(oldIndex, newIndex, item, isSamePanel, from, to);
          window.console.log('end');
        },
        onMove(evt, originalEvent) {
          const {
            oldIndex,
            newIndex,
            dragged,
            from,
            to,
            clone,
          } = evt;
          // 是否在同一个拖拽区域中
          const isSamePanel = that.isSamePanel(from, to);
          if (!isSamePanel) {
            const obj = {
              item: dragged,
              from,
              to,
            };
            that.$emit('move', obj);
          }
          // const { from, to } = evt;

          // window.console.log(from.isEqualNode(to), 'onMove');
        },
        onAdd(evt) {
          that.$emit('add', evt);
          window.console.log('onAdd', evt);
        },
        onClone(evt) {
          evt.clone = '232';
          window.console.log('onClone', evt);
        },
        onChange(evt) {
          window.console.log('onChange');
        },
        onFilter(evt) {
          that.$emit('filter', evt);
          window.console.log('onFilter');
        },
        onUpdate(evt) {
          that.$emit('update', evt);
          window.console.log('onUpdate');
        },
        onChoose(evt) {
          that.$emit('choose', evt);
          window.console.log('onChoose', evt.from.getAttribute('id'));
        },
        onUnchoose(evt) {
          that.$emit('unChoose', evt);
          window.console.log('onUnchoose');
        },
        onRemove(evt) {
          window.console.log('onRemove', evt);
        },
      };
      // 创建一个 sortable
      const el = document.querySelector(`#${this.elId}`);
      if (el) {
        this.sortable = Sortable.create(el, Object.assign({}, defOptions, this.options));
      }
      window.console.log(this.sortable.utils);
    },
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
    onDragEnd(oldIndex, newIndex, item, isSamePanel, from, to) {
      const obj = {
        oldIndex,
        newIndex,
        item,
        isSamePanel,
        from,
        to,
      };

      this.$emit('onDragEnd', obj);
    },
  },
};
</script>
