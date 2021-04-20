import * as echarts from 'echarts'

export default {
  install(Vue) {
    // 初始化图表
    Vue.prototype.$initCharts = (chartDom, option, fn) => {
      let chart = echarts.init(chartDom, 'light')
      chart.setOption(option)
      chart.on('click', res => {
        return fn(res)
      })

      // 图表响应式
      window.addEventListener('resize', () => {
        chart.resize()
      })

      return chart
    };

    // 图表渐变色
    Vue.prototype.$linearColor = (color1, color2) => {
      // 前四个参数分别表示四个位置依次为左、下、右、上
      return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: color1 },
        { offset: 1, color: color2 }
      ])
    };

    //通用坐标轴
    Vue.prototype.$xAxis = {
      splitLine: {
        show: false,
        lineStyle: {
          color: '#999'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#fff'
        }
      }
    }
  }
}