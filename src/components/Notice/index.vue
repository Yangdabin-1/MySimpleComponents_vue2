<template>
  <li class="outer" v-if="ifShow"  ref="outer">
    <div class="title">{{ title }}</div>
    <div class="message">{{ message }}</div>
  </li>
</template>

<script>
  export default{
    name:'ydb-notice',
    data(){
      return {
        title:"",
        message:"",
        showTime:2000,
        ifShow:true,
        type:"faile",
      }
    },
    mounted(){
      setTimeout(()=>{
        this.ifShow = false
      },this.showTime)
      this.judgeOuterBGC()
    },
    methods:{
      judgeOuterBGC(){
        if(this.type == "faile"){
          this.$refs.outer.style.backgroundColor = "rgb(254, 240, 240)"
          this.$refs.outer.style.color = "rgb(245, 108, 108)"
        }else if(this.type == "normal"){
          this.$refs.outer.style.backgroundColor = "rgb(243, 243, 243)"
          this.$refs.outer.style.color = "black"
        }else if(this.type == "warn"){
          this.$refs.outer.style.backgroundColor = "rgb(253, 246, 236)"
          this.$refs.outer.style.color = "rgb(230, 162, 60)"
        }else if(this.type == "success"){
          this.$refs.outer.style.backgroundColor = "rgb(240, 249, 235)"
          this.$refs.outer.style.color = "rgb(103, 194, 58)"
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @keyframes move {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
      transform: translate(-100%-10px);
    }
  }

  .outer{
    position: fixed;
    left: 100%;
    transition: all .3s ease 0s;
    animation: move .5s linear forwards alternate;
    top: 10px;
    width: 200px;
    height: 80px;
    text-align: center;
    border-radius: 10px;
    .title{
      height: 30%;
      letter-spacing: 5px;
      overflow: hidden;
      font-size: 18px;
    }
    .message{
      box-sizing: border-box;
      width: 100%;
      height: 45px;
      padding: 0px 8px;
      padding-top: 6px;
      padding-bottom: 16px;
      font-size: 14px;
      overflow: hidden;
    }

  }
</style>