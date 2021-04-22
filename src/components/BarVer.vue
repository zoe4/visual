<template>
  <div
    ref="barVer"
    class="chart-box"
  ></div>
</template>

<script>
export default {
  name: "BarVer",
  props: {
    data: {
      type: Array,
      default: () => [],
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
      let chartDom = this.$refs.barVer;

      // console.log("data1", data);
      let timedata = [];
      let name = [];
      let _data = [];
      data.forEach((e) => {
        timedata.push(e.category);
        let xData = [],
          yData = [];
        e.dep_data.forEach((k) => {
          xData.push(k.dep);
          yData.push(k.count);
        });
        name.push(xData);
        _data.push(yData);
      });

      let opts = [];

      for (var i = 0; i < data.length; i++) {
        // conditions = [
        //   {
        //     类别: timedata[i],
        //   },
        // ];

        opts.push({
          legend: {
            data: ["数量"],
            top: "0%",
            right: "0",
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          toolTip: {
            trigger: "axis",
            backgroundColor: "#264cee",
            borderWidth: 0,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          xAxis: {
            type: "category",
            axislabel: {
              interval: 0,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            data: name[i],
          },
          yAxis: {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12,
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.9)",
              },
            },
          },
          series: {
            type: "bar",
            barWidth: 15,
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: 20,
                color: this.$linearColor("#1166ff", "#8906dd"),
              },
            },
            name: "数量",
            data: _data[i],
          },
        });
      }

      var option = {
        baseOption: {
          grid: {
            left: "10%",
            top: "18%",
            bottom: "30%",
            //height:'50%',
          },
          timeline: {
            axisType: "category",
            autoPlay: true,
            //rewind: true,
            playInterval: 3000,
            //orient: "vertical",
            // symbolSize:6,
            lineStyle: {
              color: "#fff",
            },
            label: {
              fontSize: 12,
              textStyle: {
                color: "#fff",
              },
            },
            checkpointStyle: {
              color: "#4c647c",
            },
            left: "4%",
            right: "4%",
            top: "95%",
            bottom: "15%",
            //padding: [30, 10, 20, -10],
            data: timedata,
          },
          legend: {
            right: "37%",
            top: "2%",
            itemWidth: 18,
            itemHeight: 10,
            textStyle: {
              color: "#fff",
              fontStyle: "normal",
              fontFamily: "微软雅黑",
              fontSize: 12,
            },
          },
          calculable: true,
          xAxis: {
            type: "category",
            axisTick: {
              //坐标轴刻度相关设置。
              show: false,
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#fff",
                opacity: 1,
              },
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                fontSize: 12,
                color: "#fff",
              },
            },

            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            data: opts,
          },
          yAxis: {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12,
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#000"],
                opacity: 0.06,
              },
            },
          },
        },

        //图表内数据
        options: opts,
      };
      this.$initCharts(chartDom, option);
    },
  },
};
</script>

<style scoped lang="scss">
.chart-box {
  width: 100%;
  height: 32vh;
}
</style>
