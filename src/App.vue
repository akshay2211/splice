<template>
  <div id="app">
    <home v-if="typeState === 0"/>
    <sort v-else-if="typeState === 1" />
    <home v-else msg="hie" />
  </div>
</template>

<script>
import HomeComponent from "./components/HomeComponent.vue";
import SortingComponent from "./components/SortingComponent.vue";

export default {
  name: "Home",
  components: {
    home: HomeComponent,
    sort: SortingComponent,
  },
  computed: {
    typeState() {
      return this.$store.getters.type_getter;
    },
  },
  watch: {},
};
</script>

<style lang="stylus">
#app
  font-family 'Quicksand', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
