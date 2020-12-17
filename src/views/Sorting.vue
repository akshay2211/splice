<template>
  <div class="sorting">
     <div id="layout" :class="menuVisibility ? 'active' : ''">
    <!-- Menu toggle -->
    <a
      @click="menuVisibility = !menuVisibility"
      :class="menuVisibility ? 'menu-link active' : 'menu-link'"
    >
      <img src="/img/icons/menu.svg" />
    </a>
    <SideSortingMenu :showMenu="menuVisibility"/>
    <router-view></router-view>
  </div>
  </div>
</template>
<script>

import SideSortingMenu from '@/components/sorting/SideSortingMenu.vue';



export default {
  data(){
    return {
     
      type : this.$route.params.type,
      menuVisibility : false
    }
  }, watch:{
    '$route'(to,from){
      this.type = this.$route.params.type
    }
  },name: 'sort',
  components: {
    SideSortingMenu
  }
}
</script>
<style lang="stylus">

.paddingRight
  padding-right 10px;
pre
  padding-left 0px;
  padding-right 0px;
  padding-top 0.5em;
  padding-bottom 0.5em;
  text-align center;
  overflow hidden
.last-row
  background: #efe none repeat scroll 0% 0%;
  border: 1px solid #cfc;
input
  padding 0.7em;
  letter-spacing 4px!important;
</style>