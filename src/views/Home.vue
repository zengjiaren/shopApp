<template>
  <div class="home">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
        </div>
        <div class="swiper-slide">
        </div>
        <div class="swiper-slide">
          <a @click="gohome" href="javascript:;">
            <img src="../assets/img/jt.png" alt="">
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  methods: {
    gohome(){
      sessionStorage.falge = false;
      this.$router.push('/about')
    }
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: right;
  a{
    display: block;
    margin-top: 50px;
    margin-right: 50px;
    img{
    width: 50px;
    height: 50px;
  }
  }
}
.swiper-slide:nth-child(1) {
  background-image: url("../assets/img/bj1.jpg");
  background-size: 100% 100%;
}
.swiper-slide:nth-child(2) {
  background-image: url("../assets/img/bj2.jpg");
  background-size: 100% 100%;
}
.swiper-slide:nth-child(3) {
  background-image: url("../assets/img/bj3.jpg");
  background-size: 100% 100%;
}
</style>
