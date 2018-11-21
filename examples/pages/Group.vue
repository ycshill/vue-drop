<template>
 <div>
   <header><h2 class="tit">group option</h2></header>
   <section class="des">
     <h3 class="tit">简单描述:</h3>
     <p>
      To drag elements from one list into another, both lists must have the same group value.
      You can also define whether lists can give away, give and keep a copy (clone),
      and receive elements.
     </p>
     <ul>
       <li>
         name: String — group name
       </li>
       <li>
         pull: true|false|'clone'|function — ability to move from the list.
         clone — copy the item, rather than move.
       </li>
        <li>
         put: true|false|["foo", "bar"]|function — whether elements can be added from other lists,
         or an array of group names from which elements can be taken.
       </li>
        <li>
          revertClone: boolean — revert cloned element to
          initial position after moving to a another list.
       </li>
     </ul>
   </section>
   <section class="demo">
     <h3 class="tit">Demo:</h3>
     <div class="item">
       <h4 class="i-tit">name:</h4>
       <p class="i-des">如果有相同的名字，则他们之间就可以互相的拖拽</p>
       <div class="i-content">
        <vue-drop
          class="ic-item"
          :elId = "name.id"
          :groupName = "name.gName"
        >
          <ul id="nameId">
            <li>第一组，我的groupName叫做‘group1’</li>
            <li>第一组，我的groupName叫做‘group1</li>
          </ul>
        </vue-drop>
        <vue-drop
          class="ic-item"
          :elId = "name1.id"
          :groupName = "name1.gName"
        >
          <ul id="nameId1">
            <li>第二组，我的groupName叫做‘group1’</li>
            <li>第二组，我的groupName叫做‘group1</li>
          </ul>
        </vue-drop>
        <vue-drop
          class="ic-item"
          :elId = "name2.id"
          :groupName = "name2.gName"
        >
          <ul id="nameId2">
            <li>第二组，我的groupName叫做‘group1’</li>
            <li>第二组，我的groupName叫做‘group1</li>
          </ul>
        </vue-drop>
       </div>
     </div>
     <div class="item">
       <h4 class="i-tit">pull:</h4>
       <p class="i-des">true|false|'clone'|function — ability to move from the list.
         clone — copy the item, rather than move.</p>
       <div class="i-content">
        <vue-drop
          class="ic-item"
          :elId = "pull.id"
          :groupName = "pull.gName"
        >
          <ul id="pullId">
            <li>pull 第一组1</li>
            <li>pull 第一组2</li>
            <li>pull 第一组3</li>
          </ul>
        </vue-drop>
        <vue-drop
          class="ic-item"
          :elId = "pull1.id"
          :groupName = "pull1.gName"
        >
          <ul id="pullId1">
            <li>pull 第二组</li>
          </ul>
        </vue-drop>
       </div>
     </div>
   </section>
 </div>
</template>

<script>
export default {
  name: 'Group',
  data() {
    return {
      // 有相同的名字的两组
      name: {
        id: 'nameId',
        gName: 'group1',
      },
      name1: {
        id: 'nameId1',
        gName: 'group1',
      },
      name2: {
        id: 'nameId2',
        gName: 'group2',
      },
      // pull的举例子
      pull: {
        id: 'pullId',
        gName: 'pull',
        gPull: (to, from) => {
          return from.el.children.length > 2;
        },
      },
      pull1: {
        id: 'pullId1',
        gName: 'pull',
        gPull: true,
      },
    };
  },
};
</script>

<style lang='scss' scoped>
  .des{
    li{
      &::before{
        content: '🍒'
      }
    }
  }
</style>
