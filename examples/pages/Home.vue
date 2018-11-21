
<template>
 <div>
   <header><h2 class="tit">vue-drag options</h2></header>
   <section class="content">
     <ul>
       <router-link to="/group">
        <li><span class="item">group</span></li>
       </router-link>
     </ul>
   </section>
 </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    };
  },
};
</script>

<style lang='scss' scoped>
  @import '../styles/example';
  .content{
    li {
      .item{
        display: inline-block;
        padding: 10px;
        text-align: center;
        color: #666666;
        text-decoration: none;
        height: 24px;
        line-height: 24px;
      }
      border-bottom: 1px solid $gray;
    }
  }
</style>
