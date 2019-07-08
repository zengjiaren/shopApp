<template>
  <div class="about">
    <!-- 顶部导航 -->
    <van-nav-bar
      fixed
      title="分类"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="home-o" slot="right" class="daxiao"/>
    </van-nav-bar>
    <!-- 顶部导航end -->
    <van-tabs :swipe-threshold=3 v-model="active" class="tab">
      <van-tab title="手机数码">
        <div v-for="(item,i) in li1" :key="i" @click="add(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p class="title">{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
              <van-icon @click.stop="tianjia(i)" class="icon-car" name="cart-circle-o" />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="家用电器">
        <div v-for="(item,i) in li2" :key="i" @click="add2(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p class="title">{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
              <van-icon @click.stop="tianjia2(i)" class="icon-car" name="cart-circle-o" />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="电脑办公">
        <div v-for="(item,i) in li3" :key="i" @click="add3(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p class="title">{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
              <van-icon @click.stop="tianjia3(i)" class="icon-car" name="cart-circle-o" />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="美妆护肤">
        <div v-for="(item,i) in li4" :key="i" @click="add4(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p class="title">{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
              <van-icon @click.stop="tianjia4(i)" class="icon-car" name="cart-circle-o" />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="运动户外">
        <div v-for="(item,i) in li5" :key="i" @click="add5(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p class="title">{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
              <van-icon @click.stop="tianjia5(i)" class="icon-car" name="cart-circle-o" />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="酒水饮料">
        <div v-for="(item,i) in li6" :key="i" @click="add6(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p class="title">{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
              <van-icon @click.stop="tianjia6(i)" class="icon-car" name="cart-circle-o" />
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <footNav></footNav>
  </div>
</template>
<script>
import footNav from "../components/HelloWorld";
import { Toast } from 'vant';
export default {
  data() {
    return {
      active: 0,
      li1: [
        {
          id:7,
          num:1,
          ischange:"true",
          url: "../assets/img/fl11.jpg",
          title:"小米 红米Redmi Note7Pro AI双摄 6GB+128GB 梦幻蓝 全网通4G 双卡双待 水滴屏拍照游戏手机",
          price: 1599.00,
          oldPrice: 1799.00,
          text: "28万+条评论"
        },
        {
          id:8,
          num:1,
          ischange:"true",
          url: "../assets/img/fl12.jpg",
          title:"小米（MI） 小米8青春版",
          price: 1099.00,
          oldPrice: 1299.00,
          text: "36万+条评论"
        },
        {
          id:9,
          num:1,
          ischange:"true",
          url: "../assets/img/fl13.jpg",
          title:"小米（MI） 小米8屏幕指纹版",
          price: 1999.00,
          oldPrice: 2099.00,
          text: "125万+条评论"
        },
        {
          id:10,
          num:1,
          ischange:"true",
          url: "../assets/img/fl14.webp",
          title:"小米 Redmi K20Pro 4800万超广角三摄 8GB+256GB 碳纤黑 骁龙855 全网通4G 双卡双待 全面屏拍照游戏智能手机",
          price: 2999.00,
          oldPrice: 3199.00,
          text: "12万+条评论"
        },
        {
          id:11,
          num:1,
          ischange:"true",
          url: "../assets/img/fl15.webp",
          title:"小米 红米Redmi Note7Pro AI双摄 6GB+128GB 暮光金 全网通4G 双卡双待 水滴屏拍照游戏手机",
          price: 1599.00,
          oldPrice: 1699.00,
          text: "28万+条评论"
        },
        {
          id:12,
          num:1,
          ischange:"true",
          url: "../assets/img/fl16.webp",
          title:"  小米（MI） 小米9  ",
          price: 3299.00,
          oldPrice: 3499.00,
          text: "25万+条评论"
        },
      ],
      li2: [
        {
          id:13,
          num:1,
          ischange:"true",
          url: "../assets/img/fl21.jpg",
          title:"苏泊尔（SUPOR）K35FK602 家用多功能电烤箱 35升大容量专业烘焙易操作 上下独立控温可拆洗炉灯黑色",
          price: 299.00,
          oldPrice: 329.00,
          text: "5万+条评论"
        },
        {
          id:14,
          num:1,
          ischange:"true",
          url: "../assets/img/fl22.jpg",
          title:"美的（Midea）M1-L213C 快捷微波炉 微电脑操控 360°转盘加热 智能蒸煮菜单 21升",
          price: 358.00,
          oldPrice: 399.00,
          text: "62万+条评论"
        },
        {
          id:15,
          num:1,
          ischange:"true",
          url: "../assets/img/fl23.jpg",
          title:"苏泊尔（SUPOR）榨汁机家用果汁机TJE06A",
          price: 139.00,
          oldPrice: 149.00,
          text: "15万+条评论"
        },
      ],
      li3:[
        {
          id:16,
          num:1,
          ischange:"true",
          url: "../assets/img/fl31.webp",
          title:"星惠佳四核/i5/i7升八核8G独显游戏办公吃鸡台式电脑主机/DIY组装电脑整机 单主机 配置一：AMD830四核+4G独显+8G",
          price: 4599.00,
          oldPrice: 4999.00,
          text: "9100+条评论"
        }
      ],
      li4:[
        {
          id:17,
          num:1,
          ischange:"true",
          url: "../assets/img/fl41.webp",
          title:"玉兰油OLAY护肤套装水感透白光塑精华露护肤品礼盒(光感小白瓶精华液30ml+面膜水100ml) 补水保湿 美白精华露",
          price: 239.00,
          oldPrice: 259.00,
          text: "53万+条评论"
        }
      ],
      li5:[
        {
          id:18,
          num:1,
          ischange:"true",
          url: "../assets/img/fl51.webp",
          title:"森林狼 山地车 高碳钢21速/24速26寸 学生男女单车山地自行车男双碟刹 新款变速自行车男 26寸-黑蓝 24速-顶配",
          price: 538.00,
          oldPrice: 588.00,
          text: "1万+条评论"
        }
      ],
      li6:[
        {
          id:19,
          num:1,
          ischange:"true",
          url: "../assets/img/fl61.webp",
          title:"法国进口红酒 拉斐天使葡园13.5度干红葡萄酒 6支红酒整箱木箱礼盒装750ml*6",
          price: 398.00,
          oldPrice: 466.00,
          text: "15万+条评论"
        }
      ],
    };
  },
  methods: {
    onClickLeft() {
      // this.$router.push("/about");
      history.back(-1)//直接返回当前页的上一页，数据全部消息，是个新页面
    },
    onClickRight() {
      this.$router.push("/about");
    },
    add(i) {
      let index = this.li1[i].id;
      this.$router.push("/xq?id=" + index );
      // this.$store.state.shop = this.li1[i];
      // this.$store.state.shop.push(this.li1[i]);
      this.$store.commit("add",this.li1[i])
      // console.log(i);
      // console.log(this.li1[i].id);
    },
    add2(i) {
      let index = this.li2[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li2[i])
    },
    add3(i) {
      let index = this.li3[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li3[i])
    },
    add4(i) {
      let index = this.li4[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li4[i])
    },
    add5(i) {
      let index = this.li5[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li5[i])
    },
    add6(i) {
      let index = this.li6[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li6[i])
    },
    tianjia(i){
      // console.log(this.li1[i])
      // console.log(this.li1[i].id)
      this.$store.commit("add1",this.li1[i]);
      Toast.success("添加成功");
    },
    tianjia2(i){
      this.$store.commit("add1",this.li2[i]);
      Toast.success("添加成功");
    },
    tianjia3(i){
      this.$store.commit("add1",this.li3[i]);
      Toast.success("添加成功");
    },
    tianjia4(i){
      this.$store.commit("add1",this.li4[i]);
      Toast.success("添加成功");
    },
    tianjia5(i){
      this.$store.commit("add1",this.li5[i]);
      Toast.success("添加成功");
    },
    tianjia6(i){
      this.$store.commit("add1",this.li6[i]);
      Toast.success("添加成功");
    },
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
  z-index: 200 !important;
  .van-nav-bar__text,
  .van-nav-bar__title {
    color: #fff;
  }
}
.van-nav-bar .van-icon {
  color: #fff;
}
.tab {
  margin-top: 46px;
  margin-bottom: 56px;
}

.about {
  background-color:#eee;
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
    margin-top: 5px;
    background-color: #fff;
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
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }
    .contentbox {
      float: left;
      padding-left: 120px;
      padding-right: 10px;
      .title{
        font-size: 14px;
      }
      p {
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-weight: 300;
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
            font-size: 16px;
          }
        }
        span:nth-child(2) {
          text-decoration: line-through;
          color: #a8a7a7;
        }
      }
      .icon-car{
        font-size: 25px !important;
        position: absolute;
        right: 10px;
        bottom: 5px;
        color: #fc5e9f;
      }
    }
  }
}
</style>