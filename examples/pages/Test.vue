<template>
  <div id="app">
    <section class="left">
      <vue-drag
        :elId = "leftItem1.id"
        :groupName = "leftItem1.gName"
        :groupPull = "leftItem1.gPull"
        :groupPut = "leftItem1.gPut"
        :disabled = "leftItem1.disabled"
      >
        <ul id="lItem1">
          <li>左边1</li>
          <li>左边2</li>
        </ul>
      </vue-drag>
    </section>
    <section class="right">
      <section class="r-top">
        <vue-drag
          :elId = "rtTtem.id"
          :groupName = "rtTtem.gName"
          :groupPull = "rtTtem.gPull"
          :groupPut = "rtTtem.gPut"
        >
          <ul id="rtTtem">
          </ul>
        </vue-drag>
        <vue-drag
          :elId = "rtTtem1.id"
          :groupName = "rtTtem1.gName"
          :groupPull = "rtTtem1.gPull"
          :groupPut = "rtTtem1.gPut"
        >
          <ul id="rtTtem1">
            <li>上边 itme1<i class="js-remove">✖</i></li>
            <li>上边 itme2<i class="js-remove">✖</i></li>
            <li>上边 itme3<i class="js-remove">✖</i></li>
          </ul>
        </vue-drag>
      </section>
      <section class="r-bottom">
         <vue-drag
          :elId = "item1.id"
          :groupName = "item1.gName"
          :groupPull = "item1.gPull"
          :groupPut = "item1.gPut"
          :filter = "item1.filter"
          :onFilter = "item1.onFilter"
        >
          <ul id="item1">
            <li class="drag">item 1<i class="js-remove">✖</i></li>
            <li>item 2<i class="js-remove">✖</i></li>
            <li>item 3<i class="js-remove">✖</i></li>
          </ul>
        </vue-drag>
        <vue-drag
          :elId = "item2.id"
          :groupName = "item2.gName"
          :groupPull = "item2.gPull"
          :groupPut = "item2.gPut"
        >
          <ul id="item2">
            <li>item 1 +++<i class="js-remove">✖</i></li>
          </ul>
        </vue-drag>
        <vue-drag
          :elId = "item3.id"
          :groupName = "item3.gName"
          :groupPull = "item3.gPull"
          :groupPut = "item3.gPut"
        >
          <ul id="item3"> </ul>
        </vue-drag>
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
        // draggable: '.drag',
        // 控制最多能够放几个
        gPut: to => to.el.children.length < 3,
        filter: '.js-remove',
        onFilter: (evt) => {
          evt.item.parentNode.removeChild(evt.item);
        },
      },
      item2: {
        id: 'item2',
        gName: 'group1',
        gPull: true,
        gPut: to => to.el.children.length < 3,
      },
      item3: {
        id: 'item3',
        gName: 'group1',
        gPull: true,
        gPut: to => to.el.children.length < 3,
      },
      leftItem1: {
        id: 'lItem1',
        gName: 'group1',
        gPull: 'clone',
        gPut: false,
      },
      rtTtem: {
        id: 'rtTtem',
        gName: 'groupRT',
        gPull: true,
        gPut: to => to.el.children.length < 1,
      },
      rtTtem1: {
        id: 'rtTtem1',
        gName: 'groupRT',
        gPull: true,
        gPut: true,
      },
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
$light-gray: #efefef;
$light-red: #ff86a8;
$light-blue: #3ae1ff;

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
