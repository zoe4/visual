<template>
  <div
    ref="pie"
    class="chart-box"
  ></div>
</template>

<script>
export default {
  name: "Pie",
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
      let chartDom = this.$refs.pie;

      let colorList = [
        "#0eceff",
        "#264cee",
        "#5e2ae8",
        "#3a15d8",
        "#0040f9",
        "#0e74ff",
        "#0eceff",
        "#264cee",
        "#5e2ae8",
        "#3a15d8",
        "#0040f9",
        "#0e74ff",
      ];
      // 公用调整
      let itemStyle = {
        normal: {
          borderColor: "#0A1934",
          borderWidth: 5,
          color: function (params) {
            return colorList[params.dataIndex];
          },
        },
      };
      let leftCenter = ["50%", "60%"],
        radius1 = ["35%", "55%"], // 饼图
        radius3 = ["66%", "70%"], // 线圈
        // 公用调整-end

        option = {
          tooltip: {
            trigger: "item",
            backgroundColor: "rgba(21, 59, 125, .9)",
            borderWidth: 0,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          title: [
            {
              text: "+10%",
              x: "43%",
              y: "52%",
              textStyle: {
                color: "#0e74ff",
                fontSize: 18,
              },
            },
            {
              text: "同比",
              x: "46%",
              y: "62%",
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
          ],
          legend: {
            top: "0",
            right: "0",
            left: "40%",
            textStyle: {
              color: "#f2f2f2",
              fontSize: 12,
            },
            itemWidth: 16,
            itemHeight: 8,
            borderRadius: 16,
            itemGap: 5,
            icon: "roundRect",
            data: data,
          },
          series: [
            // 左饼图
            {
              // 饼图圈
              type: "pie",
              zlevel: 3,
              radius: radius1,
              center: leftCenter,
              itemStyle: itemStyle,
              labelLine: {
                show: false,
                normal: {
                  length: 20,
                  length2: 30,
                  lineStyle: {
                    color: "#fff",
                  },
                },
              },
              label: {
                normal: {
                  show: true,
                  formatter: "{c}",
                  textStyle: {
                    color: "#fff",
                    fontSize: 14,
                  },
                  position: "outside",
                },
              },
              data: data,
            },
            {
              // 最外圆圈
              type: "pie",
              zlevel: 1,
              silent: true, //取消高亮
              radius: radius3,
              center: leftCenter,
              itemStyle: {
                normal: {
                  color: "rgba(51,211,248,0.4)",
                },
              },
              labelLine: {
                show: false,
              },
              label: {
                show: false,
              },
              data: data,
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
  height: 32vh;
}
</style>
