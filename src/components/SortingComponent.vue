<template>
  <div class="Sorting pure-g">
    <ul class="static pure-u-1-5">
      <li
        :class="selectionIndex === i ? 'active' : ''"
        v-for="(m, i) in menu"
        :key="m"
      >
       <a @click="selectSorting(i)">{{ m }}</a>
      </li>
    </ul>
    <div class="content pure-u-4-5">
      <h1>{{menu[selectionIndex]}}</h1>
      <div class="pure-g pure-form">
         <input type="text" id="stacked-array" placeholder="array to sort" class="pure-u-1" />
      </div>
   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputString:"3,456,75,45,23,7,678,4,32,9,2,457,",
      selectionIndex : 0,
      menu: [
        //"Overview","Algorithms","Data Structures",
        "Bubble Sort",
        "Insertion Sort",
        "Selection Sort",
        "Merge Sort",
        "Shell Sort",
        "Quick Sort",
        //,"Recursion"
      ],
    };
  },
  methods: {
      selectSorting(index){
          console.log("onclick " + index+"     "+this.inputString);
          this.selectionIndex = index
    }
  },
  name: "HelloHome",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="stylus">
h1
  font-weight 400
ul
  list-style-type: none
  margin-left -48px
li
  text-align left
  cursor pointer
  margin-top 30px
  margin-left 40px
li::before
  content "→"
  padding-right 20px
.active
  text-weight 600
  margin-left 80px

.content{

}
</style>
