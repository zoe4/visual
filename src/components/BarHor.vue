<template>
  <div
    ref="barHor"
    class="chart-box"
  ></div>
</template>

<script>
export default {
  name: "BarHor",
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
      let chartDom = this.$refs.barHor;

      console.log("data111", data);
      let bgData = data.yData.map(() => {
        let max = Math.max(...data.yData);
        return max+10
      })

      let colorBar=['#a800ff','#33ddf8','#2473ef','#33ddf8','#2473ef'];
      let colorBg=['rgba(168,0,255,0.4)','rgba(51,211,248,0.4)','rgba(36,15,239,0.4)','rgba(51,211,248,0.4)','rgba(36,15,239,0.4)'];

      let option = {
        grid: {
          left: "5%",
          right: "5%",
          bottom: "0%",
          top: "10%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          backgroundColor:"#264cee",
          borderWidth: 0 ,
          textStyle:{
            color:"#fff",
            fontSize:12
          },
          formatter: function (params) {
            console.log(params)
            return (
              `${params[0].name}: ${params[0].value}`
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
            data: data.xData,
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
              // formatter: function (value) {
              //  return value
              // },
            },
            data: data.yData,
          },
        ],
        series: [
          {
            name: "报修率",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                // color: this.$linearColor("#ffed00", "#ff8104"),
                color: function(params) {
                        var num = colorBar.length;
                        return colorBar[params.dataIndex % num]
                    },
              },
            },
            barWidth: 10,
            data: data.yData,
          },
          {
            name: "",
            type: "bar",
            barWidth: 10,
            barGap: "-100%",
            data: bgData,
            itemStyle: {
              normal: {
                // color: "rgba(24,31,68,1)",
                color: function(params) {
                        var num = colorBg.length;
                        return colorBg[params.dataIndex % num]
                    },
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
