<template>
  <div class="center-box">
    <div class="tab">
      <div class="line"></div>
      <div class="item">类型1</div>
      <div class="item item-active">类型1</div>
      <div class="item">类型1</div>
      <div class="item">类型1</div>
      <div class="item">类型1</div>
    </div>
    <div class="data-show">
      <PieCenter />
      <div class="ball ball-left ball1">
        <div class="info">
          <div class="name">装备类型1</div>
          <div class="value">122<span>类</span></div>
        </div>
        <img
          src="~@/assets/img/center_item.png"
          alt=""
        >

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CenterShow",
  props: {
    msg: {
      type: String,
      default: "欢迎来到",
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>


<style lang="scss" scoped>
.center-box {
  height: 54vh;
  width: 100%;

  .tab {
    position: relative;
    margin-top: 3vh;

    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        #00ffff,
        #00ffff,
        rgba(0, 0, 0, 0)
      );
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .item {
      height: 3vh;
      line-height: 3vh;
      padding: 0 1vh;
      margin: 0 3px;
      background: rgba(0, 174, 239, 0.2);
      border-radius: 4px 4px 0px 0px;
      color: #00b0f1;
      cursor: pointer;
    }
    .item-active {
      background: #00baff;
      color: #fff;
    }
  }
  .data-show {
    height: 50vh;
    background: url("~@/assets/img/bg_center.png") no-repeat center;
    background-size: auto 100%;
    position: relative;

    .ball {
      display: flex;

      align-items: center;
      position: absolute;
      .info {
        .name {
          font-weight: bold;
          color: #00ccff;
        }
        .value {
          color: #ffaa23;
          font-size: 2.4vh;
          span{
            font-size:1.6vh;
            color:#fff;
          }
        }
      }
      img{
        width:10vh;
        height:auto;
      }
    }
    .ball-left {
      justify-content: right;
    }
    .ball-right {
      justify-content: left;
    }
    .ball1 {
      top: 0;
      left: 20%;
    }
  }
}
</style>
