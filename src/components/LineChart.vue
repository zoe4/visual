<template>
  <div
    ref="lineChart"
    class="chart-box"
  ></div>
</template>

<script>
export default {
  name: "LineChart",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  watch: {
    data(val) {
      this.drawChart(val);
    },
  },
  mounted() {
    // this.drawChart();
  },
  methods: {
    drawChart(data) {
      let chartDom = this.$refs.lineChart;

      console.log(data)

      let option = {
        
        tooltip: {
          trigger: "axis",
          backgroundColor:"#1198b9",
          borderWidth: 0 ,
          textStyle:{
            color:"#fff",
            fontSize:12
          },
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "15%",
          left: "10%",
          right: "5%",
          bottom: "15%",
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: "#f00",
              lineStyle: {
                color: "#f00",
              },
            },
            axisLabel: {
              color: "#fff",
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            boundaryGap: false,
            data: data.xData,
          },
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              margin: 20,
              textStyle: {
                color: "#d1e6eb",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "数量",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#44f0ff",
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#00b3f4",
              },
            },
            itemStyle: {
              color: "#fff",
              borderColor: "#00ffd2",
              borderWidth: 3,
            },
            
            areaStyle: {
              normal: {
                color: this.$linearColor(
                  "rgba(0,179,244,0.3)",
                  "rgba(0,179,244,0)"
                ),

                shadowColor: "rgba(0,179,244, 0.9)",
                shadowBlur: 20,
              },
            },
            data: data.yData,
          }
          
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
  height: 26vh;
}
</style>
