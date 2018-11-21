<template>
  <div id="app">
    <section class="left">
      <vue-drop
        :elId = "leftItem1.id"
        :groupName = "leftItem1.gName"
        :groupPull = "leftItem1.gPull"
        :groupPut = "leftItem1.gPut"
        :onMove = "leftItem1.onMove"
        :onEnd = "leftItem1.onEnd"
        :ghostClass = 'leftItem1.ghostClass'
        :chosenClass = 'leftItem1.chosenClass'
        :dragClass = 'leftItem1.dragClass'
      >
        <ul id="lItem1">
          <li>左边1, 信息组</li>
          <li>左边2, 信息组</li>
        </ul>
      </vue-drop>
      <vue-drop
        :elId = "leftItem2.id"
        :groupName = "leftItem2.gName"
        :groupPull = "leftItem2.gPull"
        :groupPut = "leftItem2.gPut"
      >
        <ul id="lItem2">
          <li>左边1, 功能组</li>
          <li>左边2, 功能组</li>
        </ul>
      </vue-drop>
    </section>
    <section class="right">
      <section class="r-top">
        <vue-drop
          :elId = "rtTtem.id"
          :groupName = "rtTtem.gName"
          :groupPull = "rtTtem.gPull"
          :groupPut = "rtTtem.gPut"
        >
          <ul
            id="rtTtem"
            :class="rtTtem.bgColor"
          >
          </ul>
        </vue-drop>
        <vue-drop
          :elId = "rtTtem1.id"
          :groupName = "rtTtem1.gName"
          :groupPull = "rtTtem1.gPull"
          :groupPut = "rtTtem1.gPut"
        >
          <ul id="rtTtem1" :class="rtTtem1.bgColor">
            <li>上边 itme1<i class="js-remove">✖</i></li>
            <li>上边 itme2<i class="js-remove">✖</i></li>
            <li>上边 itme3<i class="js-remove">✖</i></li>
          </ul>
        </vue-drop>
      </section>
      <section class="r-bottom">
         <vue-drop
          :elId = "item1.id"
          :groupName = "item1.gName"
          :groupPull = "item1.gPull"
          :groupPut = "item1.gPut"
          :filter = "item1.filter"
          :onFilter = "item1.onFilter"
          :onChoose = "item1.onChoose"
        >
          <ul id="item1"  :class="item1.bgColor">
            <li class="drag">item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </vue-drop>
        <vue-drop
          :elId = "item2.id"
          :groupName = "item2.gName"
          :groupPull = "item2.gPull"
          :groupPut = "item2.gPut"
        >
          <ul id="item2"  :class="item2.bgColor">
            <li>item 1 +++<i class="js-remove">✖</i></li>
          </ul>
        </vue-drop>
        <vue-drop
          :elId = "item3.id"
          :groupName = "item3.gName"
          :groupPull = "item3.gPull"
          :groupPut = "item3.gPut"
        >
          <ul id="item3"  :class="item3.bgColor"> </ul>
        </vue-drop>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      item1: {
        id: 'item1',
        gName: 'group1',
        gPull: true,
        bgColor: 'light-gray',
        // draggable: '.drag',
        // 控制最多能够放几个
        gPut: to => to.el.children.length < 3,
        filter: '.js-remove',
        onFilter: (evt) => {
          evt.item.parentNode.removeChild(evt.item);
        },
        onChoose: (evt) => {
          const parent = evt.target;
          const index = evt.oldIndex;
          const removeEle = document.createElement('span');
          removeEle.className = 'js-remove';
          removeEle.innerText = '✖';
          console.log(parent.childNodes[index].appendChild(removeEle));
        },
      },
      item2: {
        id: 'item2',
        gName: 'group1',
        gPull: true,
        bgColor: 'light-gray',
        gPut: to => to.el.children.length < 3,
      },
      item3: {
        id: 'item3',
        gName: 'group1',
        bgColor: 'light-gray',
        gPull: true,
        gPut: to => to.el.children.length < 3,
      },
      leftItem1: {
        id: 'lItem1',
        gName: 'header',
        gPull: 'clone',
        gPut: false,
        bgColor: 'light-gray',
        onMove: (evt, originalEvent, gName) => {
          // console.log(gName);
          Object.keys(this.$data).forEach((key) => {
            if (gName === this.$data[key].gName) {
              this.$data[key].bgColor = 'light-blue';
            }
          });
        },
        onEnd: (evt) => {
          Object.keys(this.$data).forEach((key) => {
            this.$data[key].bgColor = 'light-gray';
          });
        },
        ghostClass: 'red',
        // chosenClass: 'blue',
        // dragClass: 'yellow',
      },
      leftItem2: {
        id: 'lItem2',
        gName: 'header',
        gPull: 'clone',
        gPut: false,
        bgColor: 'light-gray',
      },
      rtTtem: {
        id: 'rtTtem',
        gName: 'header',
        gPull: true,
        bgColor: 'light-gray',
        gPut: to => to.el.children.length < 1,
      },
      rtTtem1: {
        id: 'rtTtem1',
        gName: 'header',
        gPull: true,
        gPut: true,
        bgColor: 'light-gray',
      },
    };
  },
  components: {},
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
$light-gray: #efefef;
$light-red: #ff86a8;
$light-blue: #3ae1ff;

.light-gray{
  background: $light-gray;
}
.light-blue{
  background: $light-blue;
}
#app{
  display: flex;
  .left{
    width: 240px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .right{
    width: 375px;
  }
}
ul {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: $light-gray;
  border-radius: 10px;
  display: flex;
  text-align: center;
  min-height: 20px;
  li {
    flex: 1;
    margin: 10px;
    padding: 10px;
    background: $light-red;
    border-radius: 30px;
  }
  &#item2 {
    li {
      background: $light-blue;
    }
  }
}
</style>
