<template>
<div>
 <div class="header">
        <h1>{{ title }}</h1>
        <h2>{{ desc }}</h2>
      </div>

      <div class="content">
        <h2 class="content-subhead">Definition</h2>
        <p>{{ def }}</p></div>
</div>
   
</template>
<script>
export default {
    props: {
    title: String,
    desc: String,
    def: String
  }
}
</script>