<template>
  <div class="home">
    <Header />

    <div class="content">
      <div class="left">
        <div class="chart pie-progress">
          <PieProgress />
          <PieProgress />
          <PieProgress />
        </div>
        <div class="chart">
          <SubTitle :title="'本年装备报修率'" />
          
          <BarHor />

        </div>
        <div class="chart">
          <SubTitle :title="'本年装备报废情况'" />
          <Pie />
        </div>
      </div>
      <div class="center">
        <div class="chart">
          <CenterShow />
        </div>
        <div class="chart">
          <SubTitle :title="'本年报修单与调拨单统计'" />
          <LineDouble />
          
        </div>
      </div>
      <div class="right">
        <div class="chart">
          <SubTitle :title="'本周各营周计划子项'" />
          <LineChart />
          
        </div>
        <div class="chart">
          <SubTitle :title="'调拨单记录'" />
          <Table />
        </div>
        <div class="chart">
          <SubTitle :title="'各营装备情况统计'" />
          
          <BarVer />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    getTest() {
      this.$api.getTest().then((result) => {
        console.log(result);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: url("~@/assets/img/bg.png") no-repeat center;
  background-size: 100% 100%;
  padding: 1vh;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      height: 90vh;
      // background: burlywood;
    }
    .left {
      width: 30%;
    }
    .center {
      width: 38%;
    }
    .right {
      width: 30%;
    }
    .pie-progress {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
