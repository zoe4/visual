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
          
          <BarHor :data="repair_pro_year" />

        </div>
        <div class="chart">
          <SubTitle :title="'本年装备报废情况'" />
          <Pie :data="scrap_pro_year" />
        </div>
      </div>
      <div class="center">
        <div class="chart">
          <CenterShow />
        </div>
        <div class="chart">
          <SubTitle :title="'本年报修单与调拨单统计'" />
          <LineDouble :data="repair_and_transfer" />
          
        </div>
      </div>
      <div class="right">
        <div class="chart">
          <SubTitle :title="'本周各营周计划子项'" />
          <LineChart :data="week_plan_subitem" />
          
        </div>
        <div class="chart">
          <SubTitle :title="'调拨单记录'" />
          <Table :data="transfer_list" />
        </div>
        <div class="chart">
          <SubTitle :title="'各营装备情况统计'" />
          
          <BarVer :data="eq_by_dep" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      chartData:{},
      repair_pro_year:{},
      scrap_pro_year:[],
      repair_and_transfer:{},
      week_plan_subitem:{},
      transfer_list:[],
      eq_by_dep:[],
    };
  },
  created(){
    this.getData();

  },
  methods: {
    getData() {
      this.$api.getData().then((res) => {
        console.log('getData',res);
        let data = res.data;
        this.chartData = res.data;

        this.repair_pro_year = this.initBar(data.repair_pro_year);
        this.scrap_pro_year = this.initPie(data.scrap_pro_year);
        this.repair_and_transfer = this.initBarDouble(data.repair_and_transfer);
        this.week_plan_subitem = this.initLine(data.week_plan_subitem);
        this.transfer_list = data.transfer_list;
        this.eq_by_dep = data.eq_by_dep;
      });
    },
    initBar(oldData){
      let newData = {xData:[],yData:[]};
      oldData.forEach(e => {
        newData.xData.push(e.eq_name);
        newData.yData.push(e.value);
      });
      return newData;

    },
    initLine(oldData){
      let newData = {xData:[],yData:[]};
      oldData.forEach(e => {
        newData.xData.push(e.dep);
        newData.yData.push(e.subitem);
      });
      return newData;

    },
    initBarDouble(oldData){
      let newData = {xData:[],yData1:[],yData2:[]};
      oldData.forEach(e => {
        newData.xData.push(e.date);
        newData.yData1.push(e.repair);
        newData.yData2.push(e.transfer);
      });
      return newData;

    },
    initPie(oldData){
      let newData = oldData.map(e => {
        return {name:e.eq_name,value:e.value}
      });
      return newData;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
