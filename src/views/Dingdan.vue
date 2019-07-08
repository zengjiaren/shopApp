<template>
  <div id="app">
    <!-- 顶部导航 -->
    <van-nav-bar
      fixed
      title="订单页"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="home-o" slot="right" class="daxiao"/>
    </van-nav-bar>
    <!-- 顶部导航end -->

    <div class="tishi" v-show="isshow">
      <img src="../assets/img/timg.gif" alt>
      <van-button type="info" size="small" to="/category">逛一逛</van-button>
    </div>

    <div class="goods" v-for="(item,index) in li" :key="index">
      <div class="cardbox">
        <div class="imgbox">
          <img :src="item.url">
        </div>
        <div class="contentbox">
          <p>{{item.title}}</p>
          <p class="distance">
            <span>
              ￥
              <b>{{item.price*item.num}}</b>
            </span>&nbsp;
          </p>
          <p>×{{item.num}}
              <span class="right">已付款</span>
              <van-button class="right" type="info" size="small" @click="add(index)">去评价</van-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: true,
      active: 0,
      li:[],
    };
  },
  methods: {
    onClickLeft() {
      // this.$router.push("/about");
      // history.back(-1); //直接返回当前页的上一页，数据全部消息，是个新页面
      // this.$router.push("/my");
      history.back(-1);
    },
    onClickRight() {
      this.$router.push("/about");
    },
    add(i){
      // console.log(this.li[i])
      // let index = this.li[i].id
      this.li[i].ischange = false;
      this.$router.push("/pinglun?id=" + i);

    }
  },
  created() {
    this.li = this.$store.state.shop2;
    // console.log(this.$store.state.shop2)

    if (this.li.length == 0) {
      this.isshow = true;
    } else {
      this.isshow = false;
    }
  },
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #eee;
  margin-top: 46px;
  // margin-bottom: 105px;
}
.daxiao {
  font-size: 20px;
}
.van-nav-bar {
  background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
  .van-nav-bar__text,
  .van-nav-bar__title {
    color: #fff;
  }
}
.van-nav-bar .van-icon {
  color: #fff;
}
.tishi {
  margin-top: 46px;
  text-align: center;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.goods {
  margin-top: 5px;
  background-color: #fff;
  position: relative;
  .cardbox::after {
    content: "";
    display: block;
    clear: both;
  }
  .cardbox {
    width: 100%;
    position: relative;
    padding-top: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(204, 204, 204);
    // overflow: hidden;
    .imgbox {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 10px;
      // float: left;
      img {
        display: block;
        width: 100%;
        position: absolute;
        top: 25px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }
    .contentbox {
      float: left;
      padding-left: 130px;
      width: calc(100% - 140px);
      p {
        font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-weight: 300;
        .van-button {
          float: right;
        }
        .right{
            float: right;
            border-radius: 25px;
            width: 60px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #b2b1b3;
        }
      }
      p:nth-child(3) {
        color: #a8a7a7;
        font-weight: 500;
      }
      .distance {
        padding-top: 40px;
        padding-bottom: 5px;
        span {
          color: #fe4070;
          font-size: 13px;
          font-weight: 500;
          b {
            font-size: 18px;
          }
        }
        span:nth-child(2) {
          text-decoration: line-through;
          color: #a8a7a7;
        }
      }
    }
  }
}
.go {
  float: right;
}
</style>