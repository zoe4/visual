<template>
  <div class="center-box">
    <div class="tab">
      <div class="line"></div>
      <div
        class="item"
        v-for="(item,index) in data"
        :key="index"
        :class="[index == activeIndex ? 'item-active' : '']"
        @click="tabTpype(item,index)"
      >{{item.eq_name}}</div>
    </div>
    <div class="data-show">
      <PieCenter />
      <div
        class="ball ball-left ball1"
        @click="clickBall(data[0], 0)"
      >
        <div class="info">
          <div class="name">{{data[0].eq_name}}</div>
          <div class="value">{{data[0].value}}<span>{{data[0].unit}}</span></div>
        </div>
        <img
          src="~@/assets/img/center_item.png"
          alt=""
        >
      </div>
      <div
        class="ball ball-left ball2"
        @click="clickBall(data[1], 1)"
      >
        <div class="info">
          <div class="name">{{data[1].eq_name}}</div>
          <div class="value">{{data[1].value}}<span>{{data[1].unit}}</span></div>
        </div>
        <img
          src="~@/assets/img/center_item.png"
          alt=""
        >
      </div>
      <div
        class="ball ball-left ball3"
        @click="clickBall(data[2], 2)"
      >
        <div class="info">
          <div class="name">{{data[2].eq_name}}</div>
          <div class="value">{{data[2].value}}<span>{{data[2].unit}}</span></div>
        </div>
        <img
          src="~@/assets/img/center_item.png"
          alt=""
        >
      </div>
      <div
        class="ball ball-right ball4"
        @click="clickBall(data[3], 3)"
      >
        <img
          src="~@/assets/img/center_item.png"
          alt=""
        >
        <div class="info">
          <div class="name">{{data[3].eq_name}}</div>
          <div class="value">{{data[3].value}}<span>{{data[3].unit}}</span></div>
        </div>
      </div>
      <div
        class="ball ball-right ball5"
        @click="clickBall(data[4], 4)"
      >
        <img
          src="~@/assets/img/center_item.png"
          alt=""
        >
        <div class="info">
          <div class="name">{{data[4].eq_name}}</div>
          <div class="value">{{data[4].value}}<span>{{data[4].unit}}</span></div>
        </div>
      </div>
      <div
        class="ball ball-right ball6"
        @click="clickBall(data[5], 5)"
      >

        <img
          src="~@/assets/img/center_item.png"
          alt=""
        >
        <div class="info">
          <div class="name">{{data[5].eq_name}}</div>
          <div class="value">{{data[5].value}}<span>{{data[5].unit}}</span></div>
        </div>
      </div>
    </div>

    <div v-if="isShowDetails" class="detail">
      <div class="d-title">装备入库情况</div>
      <div class="d-content">
        <div class="d-item" v-for="(item,index) in activeDetails" :key="index">
          <div class="i-date-box">
            <div class="i-date">
              {{item.date}}
            </div>
          </div>
          <div class="i-info">{{item.count}}</div>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CenterShow",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeIndex: 0,
      activeDetails: [],
      isShowDetails:false,
    };
  },
  watch: {
    data(val) {
      this.initData(val);
    },
  },

  created() {},
  methods: {
    initData(data) {
      console.log("data---", data);
      if (data.length) {
        this.activeDetails = data[0].his_in_store;
      }
    },
    tabTpype(item, index) {
      this.activeIndex = index;
      this.activeDetails = item.his_in_store;
      this.isShowDetails = true;
    },
    clickBall(item, index) {
      this.activeIndex = index;
      this.activeDetails = item.his_in_store;
      this.isShowDetails = true;
    },
  },
};
</script>


<style lang="scss" scoped>
.center-box {
  height: 54vh;
  width: 100%;
  position: relative;

  .tab {
    position: relative;
    margin-top: 3vh;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.6vh;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
          font-size: 2vh;
          span {
            font-size: 1.4vh;
            color: #fff;
          }
        }
      }
      img {
        width: 4vw;
        height: auto;
      }
    }
    .ball-left {
      justify-content: flex-end;
      text-align: right;
    }
    .ball-right {
      justify-content: flex-start;
      text-align: left;
    }
    .ball1 {
      top: 10%;
      left: 10%;
    }
    .ball2 {
      top: 45%;
      left: 0%;
    }
    .ball3 {
      bottom: 10%;
      left: 10%;
    }
    .ball4 {
      top: 10%;
      right: 10%;
    }
    .ball5 {
      top: 45%;
      right: 0%;
    }
    .ball6 {
      bottom: 10%;
      right: 10%;
    }
  }
  .detail {
    width: 36%;
    position: absolute;
    top: 10vh;
    right: 0;

    background: rgba(15, 28, 77, 0.8);
    border-radius: 10px;
    padding: 1vh;
    .d-title {
      color: transparent;
      background: linear-gradient(
        to bottom,
        #ffffff,
        #ffffff,
        #aad4fe,
        #aad4fe
      );
      -webkit-background-clip: text;

      margin-bottom: 1vh;
      font-size: 1.8vh;
      text-align: left;
      font-weight:bold;
    }
    .d-content {
      .d-item {
        height: 4vh;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-size:1.6vh;
        .i-date,
        .i-info {
          height: 4vh;
        }
        .i-date-box {
          // width: 60%;
          width: 80px;

          // padding:2vh 0;

          border-right: 1px solid #2470ea;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .i-date {
            width: 100%;
            text-align: left;
            // line-height: 26px;
            // padding:1vh 0 1vh 1vh;
            background: url("~@/assets/img/time_line_bg2.png") no-repeat right;
            background-size: 100% 26px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding:0 1vh;
          }
        }
        .i-info {
          // width: 60%;
          // text-align: left;
          padding-left: 1vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
    }
  }
}
</style>
