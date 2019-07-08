<template>
  <div class="hello">
    <!-- 底部导航 -->
    <div class="mint-tabbar is-fixed">
      <router-link to="/about" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont con icon-shouye"></span>
        </div>
        <div class="mint-tab-item-label">首页</div>
      </router-link>
      <router-link to="/category" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont con icon-fenlei"></span>
        </div>
        <div class="mint-tab-item-label">分类</div>
      </router-link>
      <router-link to="/car" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont con icon-gouwuche"></span>
        </div>
        <div class="mint-tab-item-label">购物车</div>
      </router-link>
      <router-link to="/my" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont con icon-wode"></span>
        </div>
        <div class="mint-tab-item-label">我的</div>
      </router-link>
    </div>

    <!-- 底部导航end -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-container {
  // width: 100%;
  // padding-top: 40px;
  // padding-bottom: 55px;
  overflow: hidden;
}
.mint-tab-item {
  color: #818181;
}
.mint-tab-item.is-selected {
  color: #0099ff;
}
.iconfont.con {
  font-size: 22px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.mint-tabbar{
  z-index: 202;
}
</style>
