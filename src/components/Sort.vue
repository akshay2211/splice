<template>
  <div id="layout" :class="menuVisibility?'active':''">
    <!-- Menu toggle -->
    <a @click="menuToggle()" :class="menuVisibility?'menu-link active':'menu-link'" >
        <img src="/img/icons/menu.svg"/>
    </a>

    <div id="menu" :class="menuVisibility?'active':''">
      <div class="pure-menu">
         <router-link class="pure-menu-heading" to="/">⇦ Back</router-link> 


        <ul class="pure-menu-list">
          <li
            :class="
              selectionIndex === i
                ? 'pure-menu-item pure-menu-selected'
                : 'pure-menu-item'
            "
            v-for="(m, i) in menu"
            :key="m"
          >
            <a class="pure-menu-link" @click="selectSorting(i)">{{ m }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div id="main">
      <div class="header">
        <h1>{{menu[selectionIndex]}}</h1>
        <h2>Bubble sort has a worst-case and average complexity of О(n2).</h2>
      </div>

      <div class="content">
        <h2 class="content-subhead">Definition</h2>
        <p>
          Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. 
        </p>
         <h2 class="content-subhead">live example</h2>
         <input v-model="inputString" type="text" class="pure-u-1"/>
        <div class="pure-g" v-for="(j,indx) in arrayList" :key="indx">
            <div :class="'pure-u-1-'+j.length" v-for="(num,i) in j"
              :key="i">
            <pre :class="(i==num.firstSelection || i==num.secondSelection)
            ?'active-num':''">{{num.num}}</pre></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuVisibility: false,
      inputString: "3,456,75,45,23,7,678,4,32,9,2,457",
      array :[],
      arrayList:[],
      selectionIndex: 0,
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
    selectSorting(index) {
      console.log("onclick " + index + "     " + this.inputString);
      this.selectionIndex = index;
    },
    menuToggle(){
       this.menuVisibility = !this.menuVisibility;
    },addSpace: function(num) {
         console.log("addSpace " + num);
         return num;
		//return  num.length===1?" "+num:num;
	}	
  },watch:{
      inputString(value){
          this.arrayList = [];
          this.array = value.split(",").map(Number);
           console.log("first hie value "+this.array);

          for (let i = 0; i < this.array.length; i++) {
		for (let j = 0; j < this.array.length; j++) {
			if (this.array[j] > this.array[j + 1]) {
                  let newArray = [];
                  for(let x = 0 ; x<this.array.length ; x++){
                    let select1 = (x===j)?j:10000;
                     let select2 = (x===j+1)?j+1:10000;
                     let myObj = {num:this.array[x],firstSelection:select1,secondSelection:select2}
                      console.log("obj - >  "+myObj.num+" "+myObj.firstSelection+"  "+myObj.secondSelection);
newArray.push(myObj);
                }
				let temp = this.array[j];
				this.array[j] = this.array[j + 1];
                this.array[j + 1] = temp;
                console.log(this.array[j]+"  "+this.array[j + 1]);

              

                this.arrayList.push(newArray);
			}
        }
      }
       let newArray = [];
          for(let x = 0 ; x<this.array.length ; x++){
                    let select1 = (x===j)?j:10000;
                     let select2 = (x===j+1)?j+1:10000;
                     let myObj = {num:this.array[x],firstSelection:select1,secondSelection:select2}
                      console.log("obj - >  "+myObj.num+" "+myObj.firstSelection+"  "+myObj.secondSelection);
newArray.push(myObj);
                }
                this.arrayList.push(newArray);
       for (let i = 0; i < this.arrayList.length; i++) {
           console.log("first hie valuenew  "+i+" ->>>   "+this.arrayList[i]);
       }    
	}
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
