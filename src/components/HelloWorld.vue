<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   

<div class="splash-container">
    <div class="splash">
        <h1 class="splash-head">Under Development</h1>
        <p class="splash-subhead">
            Explore various Sorting Algorithms on splice
        </p>
        <p>
           <router-link to="/Sorting" class="pure-button pure-button-primary">Get Started</router-link> </p>
    </div>
</div>

<div class="content-wrapper">
    <div class="content-home">
        <h2 class="content-head is-center">Options</h2>

        <div class="pure-g">
            <div  v-for="i in 4" :key="i"  class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 class="content-subhead">
                    <i class="fa fa-rocket"></i>
                   title {{i}}
                </h3>
                <p>
                    description {{i}}
                </p>
            </div>
        </div>
    </div>

    <div class="ribbon l-box-lrg pure-g">
        <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
            <img v-show="false" width="100" alt="File Icons" class="pure-img-responsive" src="/img/icons/menu.svg">
        </div>
        <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

            <h2 class="content-head content-head-ribbon">Laboris nisi ut aliquip.</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                
            </p>
        </div>
    </div>
    

</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
