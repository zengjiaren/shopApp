<template>
  <div id="app">
      <!-- 顶部导航 -->
    <van-nav-bar
      fixed
      title="评论页"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="home-o" slot="right" class="daxiao"/>
    </van-nav-bar>
    <!-- 顶部导航end -->
    <!-- <div class="goods" v-for="(item,index) in li" :key="index"> -->

    <div v-show="showpt" class="pt" :style="[h]">
        <img src="../assets/img/pinglun.png" alt="">
    </div>
    <div v-show="show" class="goods">
      <div class="cardbox">
        <div class="imgbox">
          <img :src="obj.url">
        </div>
        <div class="contentbox">
          <!-- <p>{{item.title}}</p> -->
          <p>{{obj.title}}</p>
          <p class="distance">
            <span>
              ￥
              <b>{{obj.price}}</b>
              <!-- <b>{{item.price}}</b> -->
            </span>&nbsp;
          </p>
        </div>
      </div>
      <div class="miaoshu">
            <span>描述相符</span>
            <van-rate v-model="value" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="fen">
            <p>给商铺评分</p>
            <div>
                <span>物流服务</span>
                <van-rate v-model="value1" />
            </div>
            <div>
                <span>发货速度</span>
                <van-rate v-model="value2" />
            </div>
            <div>
                <span>服务态度</span>
                <van-rate v-model="value3" />
            </div>
        </div>
        <div class="ping">
            <van-checkbox v-model="checked">匿名评价</van-checkbox>
            <van-button @click="sub" type="warning">发表评价</van-button>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
    data(){
        return {
            curHeight: 0, //当前所需屏幕高度
            h: { height: this.curHeight + "px" },
            img:"../assets/logo.png",
            value:0,
            value1:0,
            value2:0,
            value3:0,
            checked:true,
            id:null,
            obj:{
                url:"",
                title:"",
                price:"",
                ischange:null
            },
            show:true,
            showpt:false,
        }
    },
    methods: {
        onClickLeft() {
            history.back();
        },
        onClickRight() {
        this.$router.push("/about");
        },
        sub(){
            Toast.success("发表成功");
            this.$store.state.shop2.splice(this.id,1)
            this.$router.push("/dingdan");
        }
    },
    created() {
        // console.log(this.$route.query.id);
        this.id = this.$route.query.id;
        // console.log(this.$store.state.shop2)
        // this.url = this.$store.state.shop2[this.id].url
        
        this.obj.ischange = this.$store.state.shop2[this.id].ischange
            if(this.obj.ischange != false){
            this.show = false;
            this.showpt = true;
            }else{
                this.show = true;
                this.showpt = false;
                this.obj.url = this.$store.state.shop2[this.id].url
                this.obj.title = this.$store.state.shop2[this.id].title
                this.obj.price = this.$store.state.shop2[this.id].price
            }
        // this.obj.ischange = this.$store.state.shop2[this.id].ischange
        
        // console.log(this.obj.ischange)
        

        




        var h = document.documentElement.clientHeight || document.body.clientHeight;
        this.curHeight = h;
        // console.log(this.curHeight);
        this.h = { height: this.curHeight + "px" };

        
    },
}
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
.pt{
    margin-top: -50px;
    img{
        width: 100%;
        height: 100%;
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
    padding-bottom: 9px;
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
        top: -10px;
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
  .miaoshu{
      padding: 10px;
    border-bottom: 1px solid rgb(204, 204, 204);
    color: #ccc;
    .van-rate{
        float: right;
        padding-bottom: 16px;
    }
    textarea{
        padding: 5px 10px;
    }
  }
  .fen{
      padding: 10px;
    border-bottom: 1px solid rgb(204, 204, 204);
    color: #ccc;
    p{
        padding: 10px;
    }
    div{
        // padding: 10px;
        // text-align: center;
        height: 30px;
        .van-rate{
        float: right;
        // padding-bottom: 20px;
    }
    }
  }
  .ping{
      padding: 10px;
      .van-button{
          float: right;
          margin-top: -30px;
      }
      .van-checkbox{
          margin-top: 15px;
      }
  }
}
</style>