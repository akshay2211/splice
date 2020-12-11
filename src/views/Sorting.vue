<template>
  <div class="about">
    <h1>This is an about page {{type}}</h1>
  </div>
</template>
<script>

export default {
  data(){
    return {
      type : this.$route.params.type
    }
  }, watch:{
    '$route'(to,from){
      this.type = this.$route.params.type
    }
  }
}
</script>