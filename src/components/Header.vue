<template>
  <div class="header">
    <div class="info">装备管理科统计</div>
    <div class="title">某单位装备物资管理可视化大屏</div>
    <div class="time">时间：{{now}}{{second}}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: {
      type: String,
      default: "欢迎来到",
    },
  },
  data() {
    return {
      now: "",
      second: "",
    };
  },
  created() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  methods: {
    /*获取当前时间并处理成相应的格式*/
    getTime() {
      let now = new Date();
      let year = now.getFullYear();
      let month = this.format(now.getMonth() + 1);
      let date = this.format(now.getDate());
      let hour = this.format(now.getHours());
      let minutes = this.format(now.getMinutes());
      let second = this.format(now.getSeconds());
      let time = `${year}/${month}/${date}  ${hour} : ${minutes} : `;
      this.second = second;
      this.now = time;
    },
    format(time) {
      return time < 10 ? "0" + time : time;
    },
  },
};
</script>


<style lang="scss" scoped>
.header {
  height: 8vh;
  background: url("~@/assets/img/bg_title.png") no-repeat center;
  background-size: 100% auto;
  position: relative;
  .info,
  .time {
    font-size: 1.8vh;
    position: absolute;
    top: 0;
  }
  .info {
    left: 0;
  }
  .time {
    right: 0;
  }
  .title {
    font-size: 3.6vh;
  }
}
</style>
