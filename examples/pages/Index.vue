<template>
  <div class="wrap">
    <div class="left">
      <vue-drop
        :id="lData.elId"
        :list="lData.list"
        :el-id="lData.elId"
        :options="lData.options"
        @onDragEnd="onDragEndL"
      >
        <template
          slot="v-drop"
          slot-scope="props"
        >
          <div
            v-for="(item, index) of props.list"
            :key="index"
            class="item"
          >
            {{ item.name }}
          </div>
        </template>
      </vue-drop>
    </div>
    <div class="right">
      <vue-drop
        :id="rData.elId"
        :list="rData.list"
        :el-id="rData.elId"
        :options="rData.options"
      >
        <template
          slot="v-drop"
          slot-scope="props"
        >
          <div
            v-for="(item, index) of props.list"
            :key="index"
            class="item"
          >
            {{ item.title }}
          </div>
        </template>
      </vue-drop>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      lData: {
        list: [
          {
            name: '开关',
            thum: 'https://i.h2.pdim.gs/dmfd/200_200_100/9490e68119724f531abd2d1f6412b312.jpeg',
            streamId: 'Power',
            componentId: '1',
          },
          {
            name: '模式',
            thum: 'https://i.h2.pdim.gs/dmfd/200_200_100/9490e68119724f531abd2d1f6412b312.jpeg',
            streamId: 'Mode',
            componentId: '2',
          },
          {
            name: '风速',
            thum: 'https://i.h2.pdim.gs/dmfd/200_200_100/9490e68119724f531abd2d1f6412b312.jpeg',
            streamId: 'Mode',
            componentId: '3',
          },
        ],
        elId: 'lId',
        options: {
          group: 'same',
          dragClass: 'drag',
        },
      },
      rData: {
        list: [
          {
            componentId: '0',
            title: '头部内容',
            streams: [
              {
                id: 'CurrentTemperature',
                text: '当前温度',
                status: '',
              },
            ],
          },
          {
            componentId: '1',
            title: '开关',
            streamId: 'Power',
            on: {
              state: true,
              text: '开启',
            },
            off: {
              state: false,
              text: '关闭',
            },
          },
        ],
        elId: 'rId',
        options: {
          group: 'same',
        },
      },
    };
  },
  methods: {
    onDragEndL(obj) {
      if (obj.isSamePanel) { // 在同一区域中
        const { list } = this.lData;
        const { oldIndex, newIndex, item } = obj;
        this.sortArrOfOne(oldIndex, newIndex, item, list);
      } else { // 在不同的区域中

      }
      console.log(obj);
    },
    /**
     * @description: 在同一个拖拽空间的时候，进行的操作
     * @param {Number} oldIndex 被拖拽元素的原来位置
     * @param {Number} newIndex 被拖拽元素新位置
     * @param {Object} item 被拖拽的元素
     * @param {Array} list 被拖拽元素所在的数据
     * @return:
     */
    sortArrOfOne(oldIndex, newIndex, item, list) {

    },
    // 在两个不同的拖拽空间的时候，进行的操作
    sortArrOfTwo(list, index) {
      return list.splice(index, 1);
    },
    // 删除指定位置的元素

  },
};
</script>

<style>
.wrap{
  display: flex;
}
.left,
.right {
  margin: 100px;
  padding: 20px;
  width: 500px;
  height: 300px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
}
.v-drop{
  display: flex;
}
.item{
  width: 50px;
  height: 50px;
  background: #ff0;
  margin: 10px;
}
.drag-item{
  background-color: red;
}
</style>
