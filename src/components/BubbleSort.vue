<template>
    <div id="main">
      <SortingHeader :title="title" :desc="desc" :def="def" />
        <div class="content">
        <h2 class="content-subhead">live example</h2>
        <input v-model="inputString" type="text" class="pure-u-1" />
        <div class="pure-g" v-for="(j, indx) in arrayList" :key="indx">
          <div
            class="paddingRight"
            :style="'width:' + 100 / j.length + '%!important'"
            v-for="(num, i) in j"
            :key="i"
          >
            <pre
              :class="{
                'active-num':
                  i == num.firstSelection || i == num.secondSelection,
                'last-row': indx == arrayList.length - 1,
              }"
              >{{ num.num }}</pre
            >
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import SortingHeader from '@/components/sorting/SortingHeader.vue';
export default {
  data() {
    return {
      title : "Bubble Sort",
       desc : "Bubble sort has a worst-case and average complexity of О(n2).",
      def : "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The ass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements \"bubble\" to the top of the list.",
      menuVisibility: false,
      inputString: "3,456,75,45,23,7,678,4,32,9,2,457",
      array: [],
      arrayList: [],
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
  created() {
    console.log("created" + this.$el);
  },
  mounted() {
    
    this.updateArrayList(this.inputString);
    console.log("mounted" + this.$el);
  },
  methods: {
    addSpace: function(num) {
      console.log("addSpace " + num);
      return num;
      //return  num.length===1?" "+num:num;
    },
    updateArrayList(value) {
      this.arrayList = [];
      value = value.replace(/,\s*$/, "");
      this.array = value.split(",").map(Number);
      console.log("first hie value " + this.array);

      for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array.length; j++) {
          var that = this;

          if (that.array[j] > that.array[j + 1]) {
            let newArray = [];
            for (let x = 0; x < that.array.length; x++) {
              let select1 = x === j ? j : 10000;
              let select2 = x === j + 1 ? j + 1 : 10000;
              let myObj = {
                num: that.array[x],
                firstSelection: select1,
                secondSelection: select2,
              };
              console.log(
                "obj - >  " +
                  myObj.num +
                  " " +
                  myObj.firstSelection +
                  "  " +
                  myObj.secondSelection
              );
              newArray.push(myObj);
            }
            let temp = that.array[j];
            that.array[j] = that.array[j + 1];
            that.array[j + 1] = temp;
            console.log(
              that.array[j] + "  " + that.array[j + 1] + "    ---------   "
            );
            that.arrayList.push(newArray);
          }
        }
      }

      console.log("last hie value " + this.array);
      let newArray1 = [];
      for (let x = 0; x < this.array.length; x++) {
        let myObj = {
          num: this.array[x],
          firstSelection: 1000,
          secondSelection: 10000,
        };
        newArray1.push(myObj);
      }
      this.arrayList.push(newArray1);
    },
  },
  watch: {
    inputString(value) {

      //this.updateArrayList(value);
    },
  },
  name: "bubblesort",
  props: {
    msg: String,
  }, components: {
    SortingHeader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

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
</style>
