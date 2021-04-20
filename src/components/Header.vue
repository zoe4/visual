<template>
  <div class="header">
    <div class="info">装备管理科统计</div>
    <div class="title">某单位装备物资管理可视化大屏</div>
    <div class="time">时间：2021/02/20  10：30：30</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: {
      type: String,
      default: "欢迎来到",
    },
  },
};
</script>


<style lang="scss" scoped>
.header {
  height:8vh;
  background: url("~@/assets/img/bg_title.png") no-repeat center;
  background-size: 100% auto;
  position: relative;
  .info,.time{
    font-size: 1.8vh;
    position: absolute;
    top:0;
  }
  .info{
    left:0;
  }
  .time{
    right:0;
  }
  .title{
    font-size: 3.6vh;
  }
  
}
</style>
