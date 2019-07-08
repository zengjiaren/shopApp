<template>
  <div class="login">
    <!-- 顶部导航 -->
    <van-nav-bar
      fixed
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="home-o" slot="right" class="daxiao"/>
    </van-nav-bar>
    <!-- 顶部导航end -->
    <h1>登入页面</h1>
    <div class="other-login-outer">
      <div class="other-login">
        <span class="other-title">使用帐号登录</span>
      </div>
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
    </van-cell-group>
    <!-- <van-button type="info" to="/signup">还没账户？去注册></van-button> -->
    <a @click="goto" href="#">还没账号？去注册></a>
    <div class="conme">
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "admin",
      password: "123456",
      pir:"../assets/img/touxiang.jpg"
    };
  },
  methods: {
    onClickLeft() {
      history.back(-1); //直接返回当前页的上一页，数据全部消息，是个新页面
    },
    onClickRight() {
      this.$router.push("/about");
    },
    goto() {
      this.$router.push("/signup");
    },
    login(){
      if(this.username =='' || this.password == ''){
        return Toast("请输入正确的账号密码");
      }
      var index = this.$store.state.admin.find(val => { return val.username == this.username })
      if(this.username == index.username && this.password == index.password){
        Toast("登录成功");
        sessionStorage.falge = true;
        sessionStorage.name = index.username;
        sessionStorage.pri = this.pir;
        this.$router.push(`/my`)
      }
      // console.log(index)
      console.log(this.$store.state.admin)
    }
  },
  created() {
    let obj = {
        "username" : "admin",
        "password" : 123456
      }
    this.$store.commit('admin',obj);
    // console.log(this.$store.state.admin)
  },
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
</style>