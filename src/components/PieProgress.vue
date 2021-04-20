<template>
  <div
    ref="pie"
    class="chart-box"
  ></div>
</template>

<script>
export default {
  name: "PieProgress",
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
      let chartDom = this.$refs.pie;

      let option = {
        title: [
          {
            text: "已完成",
            x: "center",
            top: "55%",
            textStyle: {
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: "100",
            },
          },
          {
            text: "75%",
            x: "center",
            top: "38%",
            textStyle: {
              fontSize: "20",
              color: "#FFFFFF",
              fontFamily: "DINAlternate-Bold, DINAlternate",
              foontWeight: "600",
            },
          },
        ],
        polar: {
          radius: ["60%", "70%"],
          center: ["50%", "50%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 90,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [60],
            coordinateSystem: "polar",

            itemStyle: {
              normal: {
                color: this.$linearColor('#ffed00','#ff8104')
              },
            },
          },
          {
            name: "",
            type: "pie",
            startAngle: 80,
            radius: ["90%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              color: "rgba(66, 66, 66, .1)",
              borderWidth: 1,
              borderColor: "#5269EE",
            },
            data: [100],
          },
          {
            name: "",
            type: "pie",
            startAngle: 80,
            radius: ["60%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              color: "rgba(66, 66, 66, .1)",
              borderWidth: 0,
              borderColor: "#5269EE",
            },
            data: [100],
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
  height: 20vh;
}
</style>
