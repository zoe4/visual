<template>
  <div
    ref="barHor"
    class="chart-box"
  ></div>
</template>

<script>
export default {
  name: "BarHor",
  props: {},

  watch: {
    // diseasesKeys() {
    //   this.drawChart();
    // },
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let chartDom = this.$refs.barHor;
      
      let option = {
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          top: "10%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return (
              params[0].name +
              "<br/>" +
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].seriesName +
              " : " +
              Number(
                (params[0].value.toFixed(4) / 10000).toFixed(2)
              ).toLocaleString() +
              " 万元<br/>"
            );
          },
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: ["大米", "玉米", "蔬菜", "鸡蛋", "坚果"],
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "12",
              },
              formatter: function (value) {
                if (value >= 10000) {
                  return (value / 10000).toLocaleString() + "万";
                } else {
                  return value.toLocaleString();
                }
              },
            },
            data: [50000000, 22000000, 10000000, 5000000, 1],
          },
        ],
        series: [
          {
            name: "金额",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: this.$linearColor('#ffed00','#ff8104'),
              },
            },
            barWidth: 20,
            data: [50000000, 22000000, 10000000, 5000000, 1],
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 20,
            barGap: "-100%",
            data: [50000000, 50000000, 50000000, 50000000, 1],
            itemStyle: {
              normal: {
                color: "rgba(24,31,68,1)",
                barBorderRadius: 30,
              },
            },
          },
        ],
      };
      this.$initCharts(chartDom, option);
    },
  },
};
</script>

<style scoped lang="scss">
.chart-box {
  width: 100%;
  height: 28vh;
}
</style>
