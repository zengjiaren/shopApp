<template>
  <div id="app">
    <!-- 顶部导航 -->
    <van-nav-bar
      fixed
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="home-o" slot="right" class="daxiao" />
    </van-nav-bar>
    <!-- 顶部导航end -->
    <!-- 商品start -->
    <div class="tishi" v-show="isshow">
      <img src="../assets/img/timg.gif" alt />
      <van-button type="info" size="small" to="/category">逛一逛</van-button>
    </div>

    <div v-for="(item, i) in li" :key="i" class="goods">
      <!-- <img :src="item.url" alt=""> -->
      <!-- 记得将静态文件放入public文件下 -->
      <!-- <p>{{item.txt}}</p> -->
      <van-checkbox v-model="item.ischange" class="xuanze"></van-checkbox>
      <div class="cardbox">
        <div class="imgbox" @click="add(i)">
          <img :src="item.url" />
        </div>
        <div class="contentbox">
          <p>{{item.title}}</p>
          <p class="distance">
            <span>
              ￥
              <b>{{item.price}}</b>
            </span>&nbsp;
          </p>
          <p>
            ×{{item.num}}
            <van-button @click.stop="jian(i)" round size="mini">-</van-button>
            <van-button @click.stop="jia(i)" round size="mini">+</van-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品end -->

    <!-- 结算start -->
    <van-goods-action>
      <div class="quanxuan">
        <span>
          合计:
          <b>{{money}}</b> 元
        </span>
      </div>
      <van-goods-action-button type="danger" text="结算" @click="onClickButton" />
    </van-goods-action>
    <!-- 结算end -->

    <footNav></footNav>
  </div>
</template>

<script>
import footNav from "../components/HelloWorld";
import { Toast } from "vant";
// import $ from "jquery";
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      isshow: true,
      index: [],
      checked: true,
      money: 0,
      count: [],
      li: [],
      goli: [],
      li2: [],
      timer: null
    };
  },
  methods: {
    onClickLeft() {
      // this.$router.push("/about");
      history.back(-1); //直接返回当前页的上一页，数据全部消息，是个新页面
    },
    onClickRight() {
      this.$router.push("/about");
    },
    add(i) {
      // this.$router.push("/xq?id=" + i);
      // console.log(i)
      // console.log(this.$store.state.shop1[i])
      let index = this.$store.state.shop1[i].id;
      // console.log(index)
      this.$router.push("/xq?id=" + index);
      this.$store.commit("add", this.li[i]);
    },
    jia(index) {
      // console.log(index);
      this.li[index].num++;
      // console.log(this.li1[index])
    },
    jian(index) {
      // console.log(index);
      this.li[index].num--;
      if (this.li[index].num <= 1) {
        this.li[index].num = 1;
      }
    },
    onClickButton() {
      if (sessionStorage.falge == "true" && this.li.length != 0) {
        Toast.success("结算成功");
        // console.log(this.li)
        this.li.forEach((el) => {
          if (el.ischange != false) {
            // console.log(el)
            this.goli.push(el);
            this.$store.state.shop1 = [];
          }
        });
        for (var i = 0; i < this.li.length; i++) {
          if (this.li[i].ischange == false) {
            this.li2.push(this.li[i]);
            this.$store.state.shop1 = [];
          }
        }
        this.$store.state.shop1 = this.li2;
        // this.$store.state.shop2 = this.goli
        this.goli.forEach(el => {
          this.$store.commit("add2", el);
        });
        // console.log(this.$store.state.shop2)
        this.timer = setInterval(() => {
          this.$router.push("/dingdan");
        }, 1000);
      }else if(sessionStorage.falge == "true" && this.li.length == 0){
        Toast('购物车中没有商品呢！')
      }else {
        Toast("请先登录哦");
      }

      // console.log(this.li)
      // console.log(this.li2)
      // console.log(this.goli)
    },
    totalPrice() {
      //总价格计算
      var num = 0;
      this.li.forEach(data => {
        // num += data.num * data.price;
        if (data.ischange) {
          num += data.num * data.price;
        }
      });
      this.money = num;
      // console.log(num)
    }
  },
  created() {
    this.li = this.$store.state.shop1;
    // console.log(this.li)
    if (this.li.length == 0) {
      this.isshow = true;
    } else {
      this.isshow = false;
    }
    // console.log(this.li)
    for (var i = 0; i < this.li.length; i++) {
      // console.log(i)
      this.index.push(i);
    }
    this.totalPrice();
  },
  components: {
    footNav
  },
  beforeUpdate() {
    this.totalPrice();
  },
  beforeDestroy() {
    //销毁数据与方法
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #eee;
  margin-top: 46px;
  margin-bottom: 105px;
}
.daxiao {
  font-size: 20px;
}
.van-nav-bar {
  z-index: 200 !important;
  background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
  .van-nav-bar__text,
  .van-nav-bar__title {
    color: #fff;
  }
}
.van-nav-bar .van-icon {
  color: #fff;
}
.van-checkbox-group {
  margin-top: 46px;
}
.van-checkbox {
  margin-top: 5px;
  padding-left: 10px;
  background-color: #fff;
}
// .van-checkbox-group {
//   padding-left: 10px;
// }
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
  .xuanze {
    position: absolute;
    top: 50%;
    margin-top: -10px;
    z-index: 100;
  }
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
      left: 40px;
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
      padding-left: 150px;
      width: calc(100% - 160px);
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
.van-goods-action {
  bottom: 50px;
  z-index: 201;
}
.quanxuan {
  height: 50px;
  margin-top: 0;
  box-sizing: border-box;
  width: 50%;
  padding-left: 10px;
  background-color: #ccc;
  font-size: 13px;
  text-align: center;
  line-height: 50px;
  span {
    font-size: 12px;
    b {
      font-size: 16px;
      color: red;
    }
  }
}
</style>