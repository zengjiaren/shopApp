<template>
  <div class="about">
    <van-tabs v-model="active" :swipe-threshold=3>
      <van-tab title="推荐">
        <div v-for="(item,i) in li1" :key="i" @click="add(i)">
          <!-- <img :src="item.url" alt=""> -->
          <!-- 记得将静态文件放入public文件下 -->
          <!-- <p>{{item.txt}}</p> -->
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p>{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="数码电器">
        <div v-for="(item,i) in li2" :key="i" @click="add2(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p>{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="生鲜">
        <div v-for="(item,i) in li3" :key="i" @click="add3(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p>{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="超市">
        <div v-for="(item,i) in li4" :key="i" @click="add4(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p>{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="服饰">
        <div v-for="(item,i) in li5" :key="i" @click="add5(i)">
          <div class="cardbox">
            <div class="imgbox">
              <img :src="item.url" alt>
            </div>
            <div class="contentbox">
              <p>{{item.title}}</p>
              <p class="distance">
                <span>
                  ￥
                  <b>{{item.price}}</b>
                </span>&nbsp;
                <span>￥{{item.oldPrice}}</span>
              </p>
              <p>{{item.text}}</p>
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
export default {
  data() {
    return {
      active: 0,
      li1: [
        {
          id:1,
          ischange:"true",
          url: "../assets/img/sp1.webp",
          title:
            "秃秀 连衣裙2019夏季新款时尚民族风文艺棉麻连衣裙短袖大码女装显瘦沙滩中长裙",
          price: 128.0,
          oldPrice: 299.0,
          text: "2525条评论",
          num:1
        },
        {
          id:2,
          ischange:"true",
          url: "../assets/img/sp2.webp",
          title:
            "欧莱雅（LOREAL）清润葡萄籽补水护肤化妆品套装礼盒(膜力水130ml+乳液110ml+乳液50ml+膜力水65ml)",
          price: 259.0,
          oldPrice: 455.0,
          text: "5195条评论",
          num:1
        },
      ],
      li2: [
        {
          id:3,
          num:1,
          ischange:"true",
          url: "../assets/img/sp3.dpg",
          title:
            "华为(HUAWEI)MateBook 13 全面屏轻薄性能笔记本(英特尔酷睿i3 8G 256G 集显 office 2K 一碰传)银",
          price: 4399.0,
          oldPrice: 5199.0,
          text: "10035条评论"
        }
      ],
      li3: [
        {
          id:4,
          num:1,
          ischange:"true",
          url: "../assets/img/sp4.dpg",
          title:
            "展卉 泰国进口椰青 9个装 单果800g以上 赠送开椰器和吸管 新鲜水果",
          price: 119.0,
          oldPrice: 145.0,
          text: "5035条评论"
        }
      ],
      li4: [
        {
          id:5,
          num:1,
          ischange:"true",
          url: "../assets/img/sp5.webp",
          title:
            "全棉时代 棉柔巾 婴儿超柔棉柔巾 新生儿纯棉纸巾 宝宝纯棉抽纸巾加保湿因子 80片*6包",
          price: 89.0,
          oldPrice: 128.0,
          text: "535条评论"
        }
      ],
      li5: [
        {
          id:6,
          num:1,
          ischange:"true",
          url: "../assets/img/sp6.webp",
          title:
            "【经典款】TheNorthFace北面2019春夏新品软壳夹克防风户外男|3VRR KX7/黑色 M",
          price: 498.0,
          oldPrice: 660.0,
          text: "535条评论"
        }
      ]
    };
  },
  methods: {
    add(i) {
      let index = this.li1[i].id;
      this.$router.push("/xq?id=" + index );
      // this.$store.state.shop = this.li1[i];
      // this.$store.state.shop.push(this.li1[i]);
      this.$store.commit("add",this.li1[i])
      // console.log(i);
      // console.log(this.li1[i].id);
    },
    add2(i){
      let index = this.li2[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li2[i])
    },
    add3(i){
      let index = this.li3[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li3[i])
    },
    add4(i){
      let index = this.li4[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li4[i])
    },
    add5(i){
      let index = this.li5[i].id;
      this.$router.push("/xq?id=" + index );
      this.$store.commit("add",this.li5[i])
    },
  },
  components: {
    footNav
  }
};
</script>

<style lang="scss" scoped>
.about {
  margin-bottom: 56px;
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
    background-color: white;
    margin-top: 5px;
    // overflow: hidden;
    .imgbox {
      width: 120px;
      height: 120px;
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
      padding-left: 150px;
      padding-right: 10px;
      p {
        font-size: 14px;
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
</style>
