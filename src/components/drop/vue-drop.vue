<template>
 <div>
   <slot></slot>
 </div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  name: 'VueDrop',
  data() {
    return {};
  },
  props: {
    elId: {
      type: String,
      required: true,
    },
    groupName: {
      type: String,
      required: false,
    },
    groupPull: {
      type: [Boolean, String, Function],
      required: false,
      default: true,
    },
    groupPut: {
      type: [Boolean, Array, Function],
      required: false,
      default: true,
    },
    groupRClone: {
      type: Boolean,
      required: false,
    },
    sort: {
      type: Boolean,
      required: false,
      default: true,
    },
    delay: {
      type: Number,
      required: false,
    },
    touchStartThreshold: {
      type: Number,
      required: false,
      default: 3,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    store: {
      type: Object,
      required: false,
      default: null,
    },
    animation: {
      type: Number,
      required: false,
      default: 0,
    },
    handle: {
      type: String,
      required: false,
    },
    filter: {
      type: [String, Function],
      required: false,
    },
    preventOnFilter: {
      type: Boolean,
      required: false,
      default: true,
    },
    draggable: {
      type: String,
      required: false,
    },
    ghostClass: {
      type: String,
      required: false,
      default: 'sortable-ghost',
    },
    chosenClass: {
      type: String,
      required: false,
      default: 'sortable-chosen',
    },
    dragClass: {
      type: String,
      required: false,
      default: 'sortable-drag',
    },
    dataIdAttr: {
      type: String,
      required: false,
    },
    forceFallback: {
      type: Boolean,
      required: false,
      default: false,
    },
    fallbackClass: {
      type: String,
      required: false,
      default: 'sortable-fallback',
    },
    fallbackOnBody: {
      type: Boolean,
      required: false,
      default: false,
    },
    fallbackTolerance: {
      type: Number,
      required: false,
    },
    scroll: {
      type: Boolean,
      required: false,
      default: false,
    },
    scrollFn: {
      type: Function,
      required: false,
    },
    scrollSensitivity: {
      type: Number,
      required: false,
    },
    scrollSpeed: {
      type: Number,
      required: false,
    },
    setData: {
      type: Function,
      required: false,
    },
    onChoose: {
      type: Function,
      required: false,
    },
    onStart: {
      type: Function,
      required: false,
    },
    onEnd: {
      type: Function,
      required: false,
    },
    onAdd: {
      type: Function,
      required: false,
    },
    onUpdate: {
      type: Function,
      required: false,
    },
    onSort: {
      type: Function,
      required: false,
    },
    onRemove: {
      type: Function,
      required: false,
    },
    onFilter: {
      type: Function,
      required: false,
    },
    onMove: {
      type: Function,
      required: false,
    },
    onClone: {
      type: Function,
      required: false,
    },
  },
  mounted() {
    const el = document.getElementById(this.elId);
    this.sortable = Sortable.create(el, {
      group: {
        // group name ,if you want to move gropA element to guopB，they should have the same name.
        // 如果你想把组件A中的元素移动到组件B中，那么这两个组件要有相同的名字
        name: this.groupName,
        // ability to move from the list. clone — copy the item, rather than move
        // 是否可以移动，colne - 从A中复制元素到B中（移动复制）
        pull: this.groupPull,
        //  whether elements can be added from other lists,
        // or an array of group names from which elements can be taken.
        //  元素是否可以从其他的列表中添加进来，array - 可以被加进来的group集合
        put: this.groupPut,
        // revert cloned element to initial position after moving to a another list.
        // 反向复制
        revertClone: this.groupRClone,
      },
      // sorting inside list
      // 内部列表之间是否可以排序
      sort: this.sort,
      // Time in milliseconds to define when the sorting should start.
      // 设置几秒钟之后执行
      delay: this.delay,
      //  px, how many pixels the point should move before cancelling a delayed drag event
      // 对于设置了delay的元素，取消延迟排序之前指针最小移动的距离，最好是在3~5之间
      touchStartThreshold: this.touchStartThreshold,
      // Disables the sortable if set to true.
      // 如果设置为true,则不可以移动
      disabled: this.disabled,
      // Saving and restoring of the sort.
      // TODO: 这个还有待研究研究
      // store: null
      // ms, animation speed moving items when sorting, `0` — without animation
      // 移动时候的动画， 0 - 没有动画
      animation: this.animation,
      // Drag handle selector within list items
      // 文案可以选择，通过获取class名，设置可以拖拽的元素
      handle: this.handle,
      // Selectors that do not lead to dragging
      // 选择器不会导致拖动，常常和onFilter一起使用配合来实现编辑和
      filter: this.filter,
      // Call `event.preventDefault()` when triggered `filter`
      preventOnFilter: this.preventOnFilter,
      // Specifies which items inside the element should be draggable
      // 指定那个元素可以被移动
      // TODO: 需要研究下
      // draggable: this.draggable,
      // Class name for the drop placeholder (default sortable-ghost).
      // 想要拖拽进来的占位符的颜色
      ghostClass: this.ghostClass,
      // Class name for the chosen item (default sortable-chosen).
      // 被选中元素的类名
      chosenClass: this.chosenClass,
      // Class name for the dragging item
      dragClass: this.dragClass,
      // Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
      dataIdAttr: this.dataIdAttr,
      // ignore the HTML5 DnD behaviour and force the fallback to kick in

      // TODO: 有待再研究下
      forceFallback: this.forceFallback,
      fallbackClass: this.fallbackClass,
      fallbackOnBody: this.fallbackOnBody,
      fallbackTolerance: this.fallbackTolerance,

      // If set to true, the page (or sortable-area) scrolls when coming to an edge.
      // 如果设置为true，就可以滚动了
      scroll: this.scroll,
      // Defines function that will be used for autoscrolling
      // 定义
      scrollFn: this.scrollFn ? (offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl) => {
        this.scrollFn(offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl);
      } : null,
      // px, how near the mouse must be to an edge to start scrolling.
      // px, 距离多远开始可以滚动
      scrollSensitivity: this.scrollSensitivity,
      // The speed at which the window should scroll once
      // the mouse pointer gets within the scrollSensitivity distance.
      scrollSpeed: this.scrollSpeed,
      setData: this.setData ? (dataTransfer, dragEl) => {
        this.setData(dataTransfer, dragEl);
      } : null,
      // Element is chosen
      onChoose: this.onChoose ? (evt) => {
        this.onChoose(evt);
      } : null,
      // Element dragging started
      onStart: this.onStart ? (evt) => {
        this.onStart(evt);
      } : null,
      // Element dragging ended
      onEnd: this.onEnd ? (evt) => {
        this.onEnd(evt);
      } : null,
      // Element is dropped into the list from another list
      onAdd: this.onAdd ? (evt) => {
        this.onAdd(evt);
      } : null,
      // Changed sorting within list
      onUpdate: this.onUpdate ? (evt) => {
        this.onUpdate(evt);
      } : null,
      // Called by any change to the list (add / update / remove)
      onSort: this.onSort ? (evt) => {
        this.onSort(evt);
      } : null,
      // Element is removed from the list into another list
      onRemove: this.onRemove ? (evt) => {
        this.onRemove(evt);
      } : null,
      // Attempt to drag a filtered element
      onFilter: this.onFilter ? evt => {
        this.onFilter(evt);
      } : null,
      // Event when you move an item in the list or between lists
      onMove: this.onMove ? (evt, originalEvent) => {
        this.onMove(evt, originalEvent);
      } : null,
      onClone: this.onClone ? (evt) => {
        this.onClone(evt);
      } : null,
    });
    window.console.log(this.sortable);
  },
  destroyed() {
    this.sortable.destroy();
  },
};
</script>
