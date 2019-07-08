import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 引入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入 Mint UI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI)
// 引入字体图标
import "./assets/icon/iconfont.css";
// swiper样式
import "swiper/dist/css/swiper.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
