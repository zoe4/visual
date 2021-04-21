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
    this.drawChart();
  },
  methods: {
    drawChart(data) {
      let chartDom = this.$refs.barVer;

      // console.log("data1", data);
      let timedata = [];
      let name = [];
      let _data = [];
      data.forEach(e => {
        timedata.push(e.category);
        let xData = [],
          yData = [];
        e.dep_data.forEach(k => {
          xData.push(k.dep);
          yData.push(k.count);

        })
        name.push(xData);
        _data.push(yData);

      })

      let opts = [];
      
      for (var i = 0; i < data.length; i++) {
        // conditions = [
        //   {
        //     类别: timedata[i],
        //   },
        // ];
        
        opts.push({
          backgroundColor: "#051F54",
          xAxis: {
            type: "category",
            axislabel: {
              interval: 0,
            },
            splitLine: {
              show: false,
            },
            data: name[i],
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
            name: "人数占比",
            data: _data[i],
          },
        });
      }

      var option = {
        baseOption: {
          grid: {
            left: "10%",
            top: "18%",
            bottom: "25%",
            //height:'50%',
          },
          timeline: {
            axisType: "category",
            autoPlay: true,
            //rewind: true,
            playInterval: 5000,
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
            bottom: "13%",
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
              //rotate:40,
              textStyle: {
                fontSize: 12,
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
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
  height: 28vh;
}
</style>
