<template>
  <div class="center-box">
    <div class="tab"></div>
    <div class="data-show">

    </div>
    
  </div>
</template>

<script>
export default {
  name: "CenterShow",
  props: {
    msg: {
      type: String,
      default: "欢迎来到",
    },
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
  },
};
</script>


<style lang="scss" scoped>
.center-box {
  height:58vh;
  width:100%;
  // background: burlywood;
  .data-show{
    height:50vh;
    background:url("~@/assets/img/bg_center.png") no-repeat center;
    background-size: auto 100%;

  }
}
</style>
