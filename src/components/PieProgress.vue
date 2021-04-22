<template>
  <div
    ref="pie"
    class="chart-box"
  ></div>
</template>

<script>
export default {
  name: "PieProgress",
  props: {
    colorList:{
      type:Object,
      default:()=> {}
    },
    title:{
       type:String,
      default:()=> ''
    },
    data:{
       type:Number,
      default:()=> 0
    }
  },

  watch: {
    data() {
      this.drawChart();
    },
  },
  mounted() {
    // this.drawChart();
  },
  methods: {
    drawChart() {
      let chartDom = this.$refs.pie;

      let option = {
        title: [
          {
            text: this.title,
            x: "center",
            top: "55%",
            textStyle: {
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: "100",
            },
          },
          {
            text: this.data,
            x: "center",
            top: "38%",
            textStyle: {
              fontSize: 28,
              color: this.colorList.color2,
              fontFamily: "DINAlternate-Bold, DINAlternate",
              foontWeight: "600",
            },
          },
        ],
        polar: {
          radius: ["80%", "90%"],
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
              color: this.colorList.color1,
            },
            data: [25],
            coordinateSystem: "polar",

            itemStyle: {
              normal: {
                color: this.$linearColor(this.colorList.color2,this.colorList.color3)
              },
            },
          },
          // {
          //   name: "",
          //   type: "pie",
          //   startAngle: 80,
          //   radius: ["40%"],
          //   hoverAnimation: false,
          //   center: ["50%", "50%"],
          //   itemStyle: {
          //     color: "rgba(66, 66, 66, .1)",
          //     borderWidth: 1,
          //     borderColor: "#5269EE",
          //   },
          //   data: [100],
          // },
          {
            name: "",
            type: "pie",
            startAngle: 80,
            radius: ["70%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              color: "rgba(21, 59, 125, .46)",
              borderWidth: 0,
              borderColor: "#5269EE",
            },
            data: [100],
          },
          // {
          //   name: "ring5", // 蓝色
          //   type: "custom",
          //   coordinateSystem: "none",
          //   renderItem: function (params, api) {
          //     let x0 = api.getWidth() / 2;
          //     let y0 = api.getHeight() / 2;
          //     let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.40;
          //     let point = getCirlPoint(x0, y0, r, 30 + angle);
          //     return {
          //       type: "circle",
          //       shape: {
          //         cx: point.x,
          //         cy: point.y,
          //         r: 6,
          //       },
          //       style: {
          //         stroke: "#00eff0", //绿
          //         fill: "#00eff0",
          //       },
          //       silent: true,
          //     };
          //   },
          //   data: [0],
          // },
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
  padding: 1vh;
}
</style>
