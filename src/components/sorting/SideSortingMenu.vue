<template>
  <div id="menu" :class="showMenu ? 'active' : ''">

    <div class="pure-menu">
      <router-link class="pure-menu-heading" to="/">⇦ Back</router-link>

      <ul class="pure-menu-list">
           {{currentRouteName}}
        <li
          :class="
            menu2[i].toUpperCase() == currentRouteName.toUpperCase()
              ? 'pure-menu-item pure-menu-selected'
              : 'pure-menu-item'
          "
          v-for="(m, i) in menu"
          :key="m"
        > <router-link class="pure-menu-link" :to="'/sorting/'+menu2[i]">{{ m }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        "Bubble Sort",
        "Insertion Sort",
        "Selection Sort",
        "Merge Sort",
        "Shell Sort",
        "Quick Sort",
      ],
      menu2: [
        "bubblesort",
        "insertionsort",
        "selectionsort",
        "mergesort",
        "shellsort",
        "quicksort",
      ],
    };
  },computed: {
    currentRouteName() {
        return "";
    }
},
  props: {
    showMenu: Boolean,
  },
};
</script>
