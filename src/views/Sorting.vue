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
    Navigation