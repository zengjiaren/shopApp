<template>
  <div class="login">
    <!-- 顶部导航 -->
    <van-nav-bar
      fixed
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="home-o" slot="right" class="daxiao"/>
    </van-nav-bar>
    <!-- 顶部导航end -->
    <h1>注册页面</h1>
    <div class="other-login-outer">
      <div class="other-login">
        <span class="other-title">帐号注册</span>
      </div>
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />

      <van-field v-model="password" type="password" label="密码" required/>
      <p v-show="flag">输入密码不一致</p>
      <van-field @blur="to" v-model="passwordto" type="password" label="确认密码" required/>
    </van-cell-group>
    <a @click="goto" href="#">已注册？去登录></a>
    <div class="conme">
      <button @click="signup">注册</button>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data(){
    return {
      username:"",
      password:"",
      passwordto:"",
      flag:false
    }
  },
  methods: {
    onClickLeft() {
    //   this.$router.push("/my");
    history.back(-1)//直接返回当前页的上一页，数据全部消息，是个新页面
    },
    onClickRight() {
      this.$router.push("/about");
    },
    goto() {
      this.$router.push("/login");
    },
    to(){
      if(this.password != this.passwordto){
        this.flag = true
      }else{
        this.flag = false
      }
    },
    signup(){
      if(this.username == "" || this.password == "" || this.passwordto == ""){
        Toast("账号密码不能为空！");
      }else if(this.password != this.passwordto){
        this.flag = true
      }else{
        this.flag = false
        let obj = {
          "username":this.username,
          "password":this.password
        }
        this.$store.commit('admin',obj);
        Toast.success("注册成功");
        // console.log(obj)
        // console.log(this.$store.state.admin)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  background-color: #fff;
}
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
.other-login-outer {
  padding: 0 10%;
  color: #999;
  .other-login {
    position: relative;
    height: 58px;
    line-height: 58px;
    text-align: center;
    background-color: #fff;
  }
  .other-title {
    padding: 0px 5px;
    background: #fff;
  }
}
.van-cell-group {
  // text-align: center;
  // background-color: #eee;
  .van-cell {
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
    border: 1px solid #fff;
    border-radius: 25px;
    background-color: #eee;
  }
}
.conme {
  margin-top: 30px;
  button {
    width: 50%;
    height: 40px;
    margin-left: 25%;
    // outline: none;
    border: 1px solid transparent;
    border-radius: 25px;
    background-color: rgb(255, 171, 115);
    color: rgb(68, 62, 62);
  }
}
a {
  text-decoration: none;
  outline: none;
  color: #999;
  font-size: 12px;
  float: right;
  margin-right: 20%;
}
p{
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>