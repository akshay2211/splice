<template>
  <div class="sorting">
        <Sorting1 msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>

import Sorting1 from '@/components/Sort.vue'


export default {
  data(){
    return {
      type : this.$route.params.type
    }
  }, watch:{
    '$route'(to,from){
      this.type = this.$route.params.type
    }
  },name: 'sort',
  components: {
    Sorting1
  }
}
</script>