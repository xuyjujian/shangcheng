<template>
  <div class="box">
    <div class="arrowLeft" @click="left">
      <van-icon name="arrow-left" size="30" />
    </div>
    <div class="box1">
      <h2>登录/注册</h2>
      <van-form @submit="onSubmit">
        <van-field
          v-model="nickname"
          name="用户名"
          placeholder="USERNAME"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="PASSWORD"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field name="手机号码" label="手机号码" placeholder="仅注册用" v-model="phone" />
        <div class="df jc_b">
          <van-field name="短信验证码" label="短信验证码" placeholder="仅注册用"></van-field>
          <div class="mr">
            <van-button type="primary" size="small" @click="message" v-model="disable">{{this.name}}</van-button>
          </div>
        </div>
        <div class="df jc_b">
          <div>
            <van-field
              v-model="verify"
              name="验证码"
              placeholder="请输入验证码"
              label="验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            ></van-field>
          </div>
          <div v-html="verify1" @click="code"></div>
        </div>
        <div style="margin: 16px;" class="df jc_a ai_c">
          <van-button type="primary" @click="login">登录</van-button>
          <van-button type="info" @click="register">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      disable: false,
      nickname: "",
      password: "",
      verify: "",
      verify1: "",
      name: "发送验证码",
      phone: ""
    };
  },
  methods: {
    message() {
      if (this.phone === '') {
        this.$toast.fail('请输入手机号');
      } else {
        this.disable = true;
        let time = 30;
        let timer = setInterval(() => {
          time--;
          console.log(time);
          this.name = `${time}s后重新发送`;
          if (time === 0) {
            this.disabled = false;
            this.name = "重新发送";
            // 清除定时器
            clearInterval(timer);
          }
        }, 1000);
      }
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    getVerify() {
      this.$api
        .getVerify()
        .then(res => {
          this.verify1 = res;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    code() {
      this.$api
        .getVerify()
        .then(res => {
          this.verify1 = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    login() {
      this.$api
        .postlogin({
          nickname: this.nickname,
          password: this.password,
          verify: this.verify
        })
        .then(res => {
          if (res.code === 200) {
            let user = res.userInfo
            localStorage.setItem("user", JSON.stringify(user));
            this.$toast.success(res.msg);
            this.$router.push("/my");
          }
          if (res.code === -1) {
            this.$toast.fail(res.msg);
            this.nickname = "";
            this.password = "";
            this.verify = "";
            this.$api.getVerify().then(res => {
              this.verify1 = res;
            });
          }
          if (res.code === -2) {
            this.$toast.fail(res.msg);
            this.verify = "";
            this.$api.getVerify().then(res => {
              this.verify1 = res;
            });
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    register() {
      this.$api //23. 注册(post)
        .postregister({
          nickname: this.nickname,
          password: this.password,
          verify: this.verify
        })
        .then(res => {
          if (res.code === 200) {
            let user = res.userInfo
            localStorage.setItem("user", JSON.stringify(user));
            this.$toast.success(res.msg);
            this.$router.push("/my");
          }
          if (res.code === -1) {
            this.$toast.fail(res.msg);
            this.nickname = "";
            this.password = "";
            this.verify = "";
            this.$api.getVerify().then(res => {
              this.verify1 = res;
            });
          }
          if (res.code === -2) {
            this.$toast.fail(res.msg);
            this.verify = "";
            this.$api.getVerify().then(res => {
              this.verify1 = res;
            });
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    left(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this.getVerify();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100vw;
  height: 100vh;
  background-image: url("../../../项目资料/可能要用的图片/login.jpg");
  position: relative;
  .arrowLeft {
    width: 40px;
    height: 40px;
    background-color: gray;
    border-radius: 50%;
    color: white;
    text-align: center;
    line-height: 60px;
  }
  .box1 {
    width: 90%;
    background-color: white;
    box-shadow: 2px 2px 4px gray;
    position: absolute;
    padding: 10px;
    top: 100px;
    left: 5px;
  }
}
</style>