<template>
  <div>
    <!-- 顶部导航 -->
    <van-nav-bar
      fixed
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="home-o" slot="right" class="daxiao"/>
    </van-nav-bar>
    <!-- 顶部导航end -->
    <!-- 图片预览start -->
    <!-- <van-swipe @change="onChange"> -->
    <van-swipe>
      <van-swipe-item :style="[h]">
        <img v-lazy="obj.url">
      </van-swipe-item>
    </van-swipe>
    <!-- 图片预览end -->

    <!-- 内容start -->
    <div class="buy_area">
      <!-- 介绍start -->
      <div class="fn_wrap">
        <h1 class="fn_goods_name">
          <div class="fn_text_wrap">{{obj.title}}</div>
          <a href="#" class="J_ping">关注</a>
        </h1>
        <div class="J_ping">
          优惠不停春夏新款上新，全场两件8折三件7折，欲购从速！
          <a>查看</a>
        </div>
      </div>
      <!-- 介绍end -->
      <!-- 促销start -->
      <div class="detail_row">
        <div class="de_row">
          <div class="tit">促销</div>
          <div class="de_span">
            <div class="detail_prom_tag">
              <div class="de_span">部分促销仅支持单独购买</div>
            </div>
          </div>
        </div>
        <div class="detail_prom_group">
          <div class="promoteList">
            <div class="prom_item">
              <div class="de_tag">
                <em class="hl_red_bg">多买优惠</em>
              </div>
              <div class="de_span">
                <span>满2件，总价打8折；满3件，总价打7折，包邮（限中国内地）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 促销end -->
      <!-- 选择、配送start -->
      <div class="sku_window" id="skuWindow" ptag="7145.8.18">
        <div class="sku_choose_info">
          <h3>已选</h3>
          <span id="skuChoose1">黑色碎花,3XL,1件</span>
        </div>
        <div class="sku_service" id="ybArea3">
          <span class="text">本商品支持保障服务，点击可选服务</span>
        </div>
      </div>
      <div class="detail_transfer" id="sendArea">
        <div class="J_ping detail_transfer_row" id="addrArea">
          <i class="detail_transfer_row_link"></i>
          <span class="detail_transfer_row_tit">送至</span>
          <div class="detail_transfer_row_content">
            <p class="detail_transfer_row_content_oline" id="addrName">北京朝阳区三环到四环之间</p>
            <p>
              <i
                id="beforeStockTag"
                style="display: none;"
                class="detail_transfer_row_content_icon"
              ></i>
              <span id="postNotice">
                <small>
                  <span class="now">现货</span>
                  <b id="postTip">由商家从 广东广州市 发货</b>
                </small>
              </span>
            </p>
          </div>
        </div>
        <div class="detail_transfer_row" id="postArea" style>
          <span class="detail_transfer_row_tit">运费</span>
          <div class="detail_transfer_row_content">
            <p id="postPrice">免运费</p>
          </div>
        </div>
      </div>
      <!-- 选择、配送end -->
    </div>
    <!-- 内容end -->
    <div class="ctbox" :style="[w]">
      <img src="../assets/img/ct.png" alt>
    </div>
    <!-- 底部Tab start -->
    <van-goods-action>
      <van-goods-action-icon to="/car" icon="cart-o" text="购物车"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="Toast"/>
    </van-goods-action>
    <!-- 底部Tab end -->
  </div>
</template>

<script>
import $ from "jquery";
import { Toast } from "vant";
export default {
  data() {
    return {
      id:null,
      curHeight: 0, //当前所需屏幕高度
      h: { height: this.curHeight + "px" },
      w: { width: this.curHeight + "px" },
      obj:{
        id:null,
        url: "",
        title:"",
        price: "",
        oldPrice: "",
        text: "",
        num:"",
        ischange:""
      }
    };
  },
  methods: {
    onClickLeft() {
      //   this.$router.push("/about");
      history.back(-1); //直接返回当前页的上一页，数据全部消息，是个新页面
    },
    onClickRight() {
      this.$router.push("/about");
    },
    // onChange(index) {
    //   console.log("当前 Swipe 索引：" + index);
    // },
    Toast() {
      this.$store.commit("add1",this.obj);
      Toast.success("操作成功");
    },
    onClickButton() {
      Toast.success('购买成功');
    }
  },
  created() {

    var h = document.documentElement.clientWidth || document.body.clientWidth;
    this.curHeight = h;
    // console.log(this.curHeight);
    this.h = { height: this.curHeight + "px" };

    // console.log(this)
    // console.log(this.$route.query.id)
    this.id = this.$route.query.id;
    // console.log(this.$store.state.shop)
    var arr = this.$store.state.shop;
    arr.forEach(el => {
      // console.log(el)
      if(el.id == this.id){
        // console.log(el)
        this.obj.id = el.id;
        this.obj.url = el.url;
        this.obj.text = el.text;
        this.obj.title = el.title;
        this.obj.price = el.price;
        this.obj.oldPrice = el.oldPrice;
        this.obj.num = el.num;
        this.obj.ischange = el.ischange;
      }
    });
    
  }
};
</script>

<style lang="scss" scoped>
.daxiao {
  font-size: 20px;
}
.van-nav-bar {
  background-image: linear-gradient(
    90deg,
    rgb(255, 171, 115),
    rgb(255, 77, 77)
  );
  .van-nav-bar__text,
  .van-nav-bar__title {
    color: #fff;
  }
}
.van-nav-bar .van-icon {
  color: #fff;
}
.van-swipe {
  margin-top: 46px;
  .van-swipe-item {
    //   width: 375px;
    //   height: 375px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
.buy_area {
  overflow: hidden;
  background: #fff;
  padding: 10px 10px;
  // margin-bottom: 40px;
  overflow: hidden;
  .fn_wrap {
    // padding-top: 12px;
    padding-bottom: 10px;
    position: relative;
    .fn_goods_name {
      font-weight: 700;
      line-height: 24px;
      min-height: 36px;
      padding-right: 52px;
      .fn_text_wrap {
        font-size: 16px;
        // font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        // font-weight: 300;
      }
      .J_ping {
        position: absolute;
        right: 0;
        top: 0;
        display: inline-block;
        padding-top: 26px;
        margin-right: -10px;
        line-height: 1em;
        height: 20px;
        line-height: 20px;
        width: 50px;
        font-size: 10px;
        color: #333;
        text-align: center;
        text-decoration: none;
      }
      .J_ping::before {
        content: "";
        width: 0;
        display: block;
        border-left: 1px solid #ddd;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
      }
      .J_ping::after {
        content: "";
        display: block;
        position: absolute;
        top: 10px;
        left: 14px;
        width: 22px;
        height: 18px;
        background-image: url("../assets/img/jlt.png");
        background-size: 100px 100px;
        background-position: -50px -3px;
      }
    }
    .J_ping {
      color: #999;
      padding: 5px 0 0;
      line-height: 1.3;
      position: relative;
      font-size: 12px;
      max-height: 46px;
      overflow: hidden;
      a {
        color: #e4393c;
        text-decoration: underline;
      }
    }
  }
  .detail_row {
    position: relative;
    padding: 0 10px;
    display: block;
    font-size: 12px;
    min-height: 45px;
    .de_row {
      padding-top: 0;
      padding-bottom: 0;
      position: relative;
      display: flex;
      .tit {
        min-width: 40px;
        font-size: 12px;
        color: #999;
        font-weight: 400;
        padding-top: 14px;
      }
      .de_span {
        color: #333;
        overflow: hidden;
        display: block;
        width: 100%;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        .detail_prom_tag {
          padding: 14px 0;
          line-height: 20px;
        }
      }
    }
    .de_row::before {
      content: "";
      height: 0;
      display: block;
      border-bottom: 1px solid #ddd;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
    .detail_prom_group {
      color: #333;
      font-size: 12px;
      .prom_item {
        position: relative;
        padding: 14px 0;
        .de_tag {
          margin-right: 5px;
          padding-top: 1px;
          .hl_red_bg {
            position: relative;
            padding: 0 3px;
            margin-right: 0;
            height: 15px;
            line-height: 15px;
            font-size: 10px;
            color: #e4393c;
            background: #fff;
            margin: 0;
          }
          .hl_red_bg::before {
            content: "";
            display: block;
            border: 1px solid #ddd;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            pointer-events: none;
            border-color: #e4393c;
            border-radius: 2px;
          }
        }
        .de_span {
          color: #333;
          overflow: hidden;
          display: block;
        }
      }
      .prom_item::before {
        content: "";
        height: 0;
        display: block;
        border-bottom: 1px solid #ddd;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      }
    }
  }
  .sku_window {
    background: #fff;
    padding: 12px 0 12px 10px;
    position: relative;
    font-size: 12px;
    color: #999;
    .sku_choose_info {
      position: relative;
      padding: 0 40px 0 33px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      h3 {
        position: absolute;
        top: 50%;
        left: 0;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 35px;
        font-weight: 400;
        font-size: 100%;
        font-family: inherit;
        vertical-align: baseline;
      }
      span {
        font-size: 14px;
        color: #333;
        line-height: 22px;
      }
    }
    .sku_service {
      padding: 0 10px 0 33px;
    }
  }
  .sku_window::after {
    content: "...";
    position: absolute;
    right: 15px;
    top: 15px;
    width: 15px;
    height: 3px;
    font-size: 20px;
    font-weight: 700;
  }
  .detail_transfer {
    position: relative;
    padding: 13px 0 12px;
    .detail_transfer_row {
      position: relative;
      padding: 0 40px 0 10px;
      font-size: 12px;
      margin-bottom: 3px;
      display: flex;
      .detail_transfer_row_link::after {
        content: "...";
        display: block;
        position: absolute;
        right: 15px;
        top: 8px;
        width: 15px;
        height: 3px;
        font-size: 20px;
        font-weight: 700;
        color: #999;
      }
      .detail_transfer_row_tit {
        width: 35px;
        color: #999;
      }
      .detail_transfer_row_content {
        font-size: 14px;
        color: #333;
        overflow: hidden;
        .detail_transfer_row_content_oline {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: baseline;
        }
        .now {
          font-size: 12px;
          color: #e4393c;
          margin-right: 3px;
        }
        b {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .detail_transfer::before {
    content: "";
    height: 0;
    display: block;
    border-top: 1px solid #ddd;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    left: 10px;
  }
}
.van-button--normal {
  width: 100%;
}
.mint-tab-item {
  padding: 0;
}
.ctbox {
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.van-goods-action-icon{
      min-width: 30%;
}
</style>