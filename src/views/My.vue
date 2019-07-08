<template>
  <div class="about">
    <van-nav-bar
      title="我的宝贝"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="home-o" slot="right" class="daxiao"/>
    </van-nav-bar>
    <div class="user-unlogin">
      <div class="noportrait">
        <img :src="pri" alt="">
      </div>
      <div class="operation">
        <div v-show="falge">
          <a @click="admin" class="login" href="#">登录</a>
          <div style="margin-top:4px;" class="separator"></div>
          <a @click="signup" class="signup" href="#">注册</a>
        </div>
        <div v-show="falges" class="name">
          <span>{{name}}</span>
        </div>
      </div>
    </div>
    <div class="order block">
      <div class="block-title">
        <i class="block-title-icon myorder"></i>
        我的订单
        <a @click="to" href="#" class="block-title-nav">
          <span>查看我的全部订单</span>
          <i class="arrow-right"></i>
        </a>
      </div>
      <div class="block-content">
        <a @click="tocar" class="block-item" href="#">
          <i class="unpaid"></i>
          <span>待付款</span>
        </a>
        <a class="block-item" href="#">
          <i class="unconfirm"></i>
          <span>待收货</span>
        </a>
        <a @click="topinglun" class="block-item" href="#">
          <i class="uncomment"></i>
          <span>待评价</span>
        </a>
        <a class="block-item" href="#">
          <i class="refund"></i>
          <span>退货/退款</span>
        </a>
      </div>
    </div>
    <div class="fund block">
      <div class="block-title">
        <i class="block-title-icon myfund"></i>
        我的资产
      </div>
      <div class="block-content">
        <a class="block-item" href="#">
          <div class="value"></div>
          <span>现金券</span>
        </a>
        <a class="block-item" href="#">
          <div class="value"></div>
          <span>红包</span>
        </a>
        <a class="block-item" href="#">
          <div class="value"></div>
          <span>聚美余额</span>
        </a>
        <a class="block-item" href="#">
          <div class="value"></div>
          <span>礼品卡</span>
        </a>
      </div>
    </div>
    <div class="block list">
      <a class="list-item" href="#">
        <i class="list-item-icon rmaservice"></i>
        <span>售后服务</span>
        <i class="arrow-right"></i>
      </a>
      <a class="list-item" href="#">
        <i class="list-item-icon feedback"></i>
        <span>意见反馈</span>
        <i class="arrow-right"></i>
      </a>
      <a class="list-item" href="#">
        <i class="list-item-icon address"></i>
        <span>收货地址</span>
        <i class="arrow-right"></i>
      </a>
      <a @click="out" class="list-item logout" href="#">
        <i class="list-item-icon logout"></i>
        <span>退出登录</span>
        <i class="arrow-right"></i>
      </a>
    </div>

    <footNav></footNav>
  </div>
</template>

<script>
// import $ from "jquery";
import footNav from "../components/HelloWorld";
import { Toast } from "vant";
export default {
  data(){
    return {
      falge:true,
      falges:false,
      pri:"../assets/tou.png",
      name:''
    }
  },
  methods: {
    onClickLeft() {
      // this.$router.push("/about");
      history.back()//直接返回当前页的上一页，数据全部消息，是个新页面
    },
    onClickRight() {
      this.$router.push("/about");
    },
    to(){
      // this.$router.push("/dingdan");
      if(sessionStorage.falge == 'true'){
        this.$router.push("/dingdan");
      }else{
        Toast("请先登录哦");
      }
    },
    tocar(){
      this.$router.push("/car");
    },
    topinglun(){
      if(sessionStorage.falge == 'true'){
        this.$router.push("/dingdan");
      }else{
        Toast("请先登录哦");
      }
    },
    admin(){
      
      this.$router.push('/login')
      // sessionStorage.username = username;
      // sessionStorage.password = password;
      // console.log(sessionStorage)
    },
    signup(){
      this.$router.push('/signup')
    },
    out(){
      // console.log('123')
      this.pri = "../assets/tou.png";
      this.falge = true;
      this.falges = false;
      sessionStorage.falge = false;
    }
  },
  created() {
    console.log(this.$route.query);
    // console.log(sessionStorage.falge);
      if(sessionStorage.falge == 'true'){
        this.pri = sessionStorage.pri;
        this.name = sessionStorage.name;
        this.falge = false;
        this.falges = true;
      }else if(sessionStorage.falge == 'false'){
        this.pri = "../assets/tou.png";
        this.falge = true;
        this.falges = false;
        // console.log('123')
      }
  },
  components: {
    footNav
  }
};
</script>
<style lang="scss" scoped>
.daxiao {
  font-size: 20px;
}
.van-nav-bar {
  background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
  color: #fff;
}
.van-nav-bar__text,
.van-nav-bar__title,
.van-nav-bar .van-icon{
  color: #fff;
}
.user-unlogin {
  padding-top: 50px;
  box-sizing: border-box;
  height: 158px;
  background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
  font-size: 18.75px;
  .noportrait {
    width: 60px;
    height: 60px;
    background-size: 60px;
    margin: auto;
    img{
      display: block;
      width: 100%;
      height: 100%;
      // background-image: url("../assets/tou.png");
      // background-size: cover;
      border: 1px solid transparent;
      border-radius: 50%;
    }
  }
  .operation {
    padding: 10px;
    width: 200px;
    margin: auto;
    display: flex;
    a {
      line-height: 25px;
      color: #fff;
      font-weight: 700;
      font-size: 18px;
      text-decoration: none;
      display: inline-block;
      text-align: center;
      width: 95px;
      cursor: pointer;
    }
    .separator {
      margin-top: -4px !important;
      background: #fff;
      width: 1px;
      display: inline-block;
      height: 15px;
      vertical-align: middle;
    }
    .name{
      width: 100%;
      text-align: center;
      color: #fff;
    }
  }
}
.block {
  background: #fff;
  margin-top: 12px;
  font-size: 18.75px;
  .block-title {
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    i.block-title-icon {
      background-image: url("../assets/icon/myorder.png");
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background-size: 20px;
      margin-right: 10px;
    }
    i.myfund {
      background-image: url("https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/myfund.png");
    }
    .block-title-nav {
      float: right;
      text-decoration: none;
      color: #999;
      font-size: 12px;
      margin-right: 5px;
      cursor: pointer;
      i.arrow-right {
        background-image: url("../assets/icon/advance_bg.png");
        background-size: 20px;
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
      }
    }
  }
  .block-content {
    display: flex;
    .block-item,
    .order .block-item {
      text-align: center;
      display: inline-block;
      margin: 0;
      padding: 10px 0;
      text-decoration: none;
      font-size: 12px;
      color: #666;
      width: 90px !important;
      i.unpaid {
        background-image: url("../assets/icon/unpaid.png");
      }
      i {
        display: block;
        width: 24px;
        height: 24px;
        margin: 5px auto;
        background-size: 24px;
      }
      i.unconfirm {
        background-image: url("https://f4.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/unconfirm.png");
      }
      i.uncomment {
        background-image: url("https://f4.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/uncomment.png");
      }
      i.refund {
        background-image: url("https://f4.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/refund.png");
      }
    }
  }
  .list-item {
    display: block;
    text-decoration: none;
    color: #333;
    padding-left: 8px;
    border-bottom: 1px solid #eaeaea;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    i.list-item-icon {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background-size: 20px;
      margin-right: 10px;
    }
    i.rmaservice {
      background-image: url("https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/rmaservice.png");
    }
    i.feedback {
      background-image: url("https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/feedback.png");
    }
    i.address {
      background-image: url("https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/address.png");
    }
    i.logout {
      background-image: url("https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/myjumei/logout.png");
    }
    i.arrow-right {
      float: right;
      margin-top: 6px;
      margin-right: 6px;
      background-image: url("https://f5.jmstatic.com/static_account/dist/v1.0.155018/images/mobile_usercenter/advance_bg.png");
      background-size: 20px;
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
  }
}
</style>

