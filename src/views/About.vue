<template>
  <div class="about">

    <!-- 顶部导航 -->
    <mt-header fixed title="轻量商城"></mt-header>
    <!-- 顶部导航end -->

    <!-- 轮播图 -->
    <mt-swipe :auto="4000" :style="[h]">
      <mt-swipe-item v-for="item in lunbotuList" :key="item">
        <img :src="item" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 轮播图end -->
    
    <tab></tab>
    <footNav></footNav>
  </div>
</template>

<script>
import footNav from "../components/HelloWorld";
import tab from "../components/Tab";
import $ from 'jquery';
export default {
  data() {
    return {
      curHeight:0,//当前所需屏幕高度
      h:{"height":this.curHeight + "px"},
      lunbotuList: [
        "../assets/img/lb1.webp",
        "../assets/img/lb2.webp",
        "../assets/img/lb3.webp",
        "../assets/img/lb4.webp"
      ]
    };
  },
  methods: {
    add(i) {
      console.log(i);
    }
  },
  components: {
    footNav,
    tab
  },
  created() {
    var h = document.documentElement.clientWidth || document.body.clientWidth;
        this.curHeight = h/2;
        // console.log(this.curHeight);
        return this.h = {"height":this.curHeight + "px"}
  },
};
</script>

<style lang="scss" scoped>
.mint-header{
  background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
}
.mint-swipe {
  // height: 200px;
  padding-top: 40px;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>