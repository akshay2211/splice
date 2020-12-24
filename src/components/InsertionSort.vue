<template>
  <div id="main">
    <SortingHeader :title="title" :desc="desc" :def="def" />
    <div class="content">
      <h2 class="content-subhead">live example</h2>
      <div class="pure-g">
        <input v-model="inputString" type="text" class="pure-u-1" />
      </div>
      <div class="pure-g" v-for="(j, indx) in arrayList" :key="indx">
        <div
          class="paddingRight"
          :style="'width:' + 100 / j.length + '%!important'"
          v-for="(num, i) in j"
          :key="i"
        >
          <pre :class="num.type">{{ num.num }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SortingHeader from "@/components/sorting/SortingHeader.vue";
export default {
  data() {
    return {
      title: "Bubble Sort",
      desc: "Bubble sort has a worst-case and average complexity of О(n2).",
      def:
        'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The ass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.',
      menuVisibility: false,
      inputString: "3,456,75,45,23,7,678,4,32,9,2,457",
      array: [],
      arrayList: [],
      ActiveNum: "active-num",
      SortingNum: "last-row",
      SortedNum: "sorted-num",
      Style1: "style1",
      Style2: "style2",
      Style3: "style3",
    };
  },
  async mounted() {
    /*let ar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
    for (let x in ar){
      console.log(x);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }*/
    this.updateArrayList(this.inputString);
    console.log("mounted" + this.$el);
  },
  methods: {
    addSpace: function(num) {
      console.log("addSpace " + num);
      return num;
      //return  num.length===1?" "+num:num;
    },
    async updateArrayList(value) {
      this.arrayList = [];
      value = value.replace(/,\s*$/, "");
      let array = value
        .split(",")
        .map((item, index) => ({ num: parseInt(item), type: "" }));
      this.arrayList.push(array);
      let counter = 0;
      let swap = true;

      while (counter < array.length && swap) {
        swap = false;
        for (let i = 0; i < array.length - 1 - counter; i++) {
          // change color of two indeces that are being compared
          array[i].type = this.ActiveNum;
          array[i + 1].type = this.ActiveNum;

          await new Promise((resolve) => setTimeout(resolve, 1000));

          if (array[i].num > array[i + 1].num) {
            swap = true;
            var newArr = this.arrayList[
              this.arrayList.length - 1
            ].map((item, index) => ({ num: "" + item.num, type: item.type }));
            this.arrayList[this.arrayList.length - 1] = newArr;
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            let copyVar = array;

            this.arrayList.push(copyVar);
          }
          array[i].type = "";
          array[i + 1].type = "";
          /* let { num: newA } = array[i];
      let { num: newB } = array[i + 1];
      array[i]= { num: newA, type: this.Style1 };
      array[i+1]= { num: newB, type: this.Style3 };*/
        }
        counter += 1;
      }

      /* console.log("last hie value " + this.array);
      let newArray1 = [];
      for (let x = 0; x < this.array.length; x++) {
        let myObj = {
          num: this.array[x],
          firstSelection: 1000,
          secondSelection: 10000,
        };
        newArray1.push(myObj);
      }
      this.arrayList.push(newArray1);*/
    },
  },
  watch: {
    inputString(value) {
      this.updateArrayList(value);
    },
  },
  name: "insertionsort",
  props: {
    msg: String,
  },
  components: {
    SortingHeader,
  },
};
</script>
<style scoped lang="stylus">

.style1
  background yellow !important;
.style2
  background green !important;
.style3
  background blue !important;
</style>
