<template>
  <div class="Home">
    <div class="temp">
      <div class="intro">Searching and Sorting Techniques</div>
      <div class="instructions">
        <ul>
          <li v-for="(m, i) in menu" :key="m">
            <a @click="selectOption(i)">{{ m }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        //"Overview","Algorithms","Data Structures",
        "Searching Techniques",
        "Sorting Techniques",
        //,"Recursion"
      ],
    };
  },
  methods: {
    selectOption(index) {
      console.log("onclick " + index);
      this.$store.commit("type_mutations", index);
    },
  },
  name: "HelloHome",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="stylus">

ul
  list-style-type: none
  margin-left -50px
  margin-top 50px
li
  text-align left
  margin 15px
  cursor pointer


li::before
  content "→"
  padding-right 20px

.temp
  width 640px
  max-width 85%
  margin 15% auto 10% auto
  font-size 36px
  line-height 42px
.intro
  display block
  margin-bottom 50px
  font-family 'Raleway', sans-serif
  font-weight  300
.instructions
    font-family 'Quicksand', sans-serif
    font-weight  300
    font-size  24px
    line-height  28px
</style>
