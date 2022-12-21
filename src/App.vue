<template>
  <div id="app">
    <button @click="notice">notice</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
    }
  },
  methods:{
    notice(){
      this.$notice({
        title:'成功',
        message:"撒旦后i阿寿i的赛点后阿斯顿回复爱的华府大赛u发哈送到爱上帝哪里",
        showTime:3000
      })
    }
  }
}
</script>

<style>

</style>
