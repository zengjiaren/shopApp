import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shop:[],
    id:null,
    shop1:[],
    shop2:[],
    admin:[]
  },
  mutations: {
    add(state, data) {
      // state.shop.push(data);
      var index = state.shop.findIndex(val => { return val.id == data.id })
      // 1.判断商品id在购物车列表中是否存在
      if (index != "-1") {
        // 1.1存在 数量加一
        state.shop = state.shop;
      } else {
        // 1.2不存在 添加数据到购物车
        state.shop.push(data);
      }
    },
    add1(state, data){
      // state.shop1.push(data);
      // data.datetime = new Date();
      var index = state.shop1.findIndex(val => { return val.id == data.id })
      // 1.判断商品id在购物车列表中是否存在
      if (index != "-1") {
        // 1.1存在 数量加一
        state.shop1[index].num += 1;
      } else {
        // 1.2不存在 添加数据到购物车
        state.shop1.push(data);
      }
      // console.log(data)
      // console.log(state.shop1)
    },
    add2(state, data){
      state.shop2.push(data);
    },
    admin(state, data){
      var index = state.admin.findIndex(val => { return val.username == data.username })
      // 1.判断商品id在购物车列表中是否存在
      if (index != "-1" || data.username == "") {
        // 1.1存在 数量加一
        return console.log(data)
      } else {
        // 1.2不存在 添加数据到购物车
        state.admin.push(data);
      }
    }
  },
  actions: {}
});
