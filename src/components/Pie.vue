<template>
  <div
    ref="pie"
    class="chart-box"
  ></div>
</template>

<script>
export default {
  name: "Pie",
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

      let names = ["屠宰", "兽药", "诊疗", "调运", "饲料", "其他"];
      let values = [300, 200, 150, 120, 100, 50];
      let colorList = [
        "#03acd1",
        "#04cab7",
        "#03c781",
        "#fce348",
        "#fc2d8a",
        "#0292fe",
      ];
      let data = [];
      for (let i = 0; i < names.length; i++) {
        data.push({
          name: names[i],
          value: values[i],
        });
      }
      data.reverse();
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
      let leftCenter = ["50%", "50%"],
        radius1 = ["40%", "60%"], // 饼图
        radius3 = ["75%", "80%"], // 线圈
        // 公用调整-end

        option = {
          tooltip: {
            trigger: "item",
          },
          title: [
            {
              text: "30日",
              x: "50%",
              y: "40%",
              textStyle: {
                color: "#559dbd",
                fontSize: 20,
              },
            },
            {
              text: "半年",
              x: "50%",
              y: "55%",
              textStyle: {
                color: "#559dbd",
                fontSize: 20,
              },
            },
          ],
          legend: {
            top: "0",
            right: "0%",
            textStyle: {
              color: "#f2f2f2",
              fontSize: 16,
            },
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
                  length2: 10,
                  lineStyle: {
                    color: "#fff",
                  },
                },
              },
              label: {
                normal: {
                  show: true,
                  formatter: "{c}%",
                  textStyle: {
                    color:"#fff",
                    fontSize: 18,
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
                  color: "#333",
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
  height: 28vh;
}
</style>
