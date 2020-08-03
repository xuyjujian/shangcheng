<template>
  <div>
    <div class="df jc_c ai_c wt pr" style="border-bottom: #F5F6F8 1px solid;">
      <div class="fsl" style="padding:15px;">个人资料</div>
      <div class="left" @click="left">
        <van-icon name="arrow-left" size="20" color="#52A6FB" />
      </div>
    </div>
    <div style="padding:15px;border-bottom: #F5F6F8 1px solid; ">github</div>
    <div class="df jc_b ai_c">
      <div style="padding:15px;">头像</div>
      <div class="df ai_c">
        <div>
          <img src="../../../项目资料/可能要用的图片/icon.svg" alt />
        </div>
        <div>
          <van-icon name="arrow" size="30" />
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-field v-model="username" label="用户名" />
      <van-field v-model="nickname" label="昵称" />
      <van-field v-model="gender" label="性别" />
      <van-field v-model="value" label="邮箱" placeholder="请输入邮箱" />
      <van-field v-model="time" label="出生年月" />
    </van-cell-group>
    <div class="df jc_c ai_c">
      <div style=" width:75% ;">
        <div class="mb">
          <van-button type="primary" size="large" @click="yes">确定</van-button>
        </div>
        <div class="mt">
          <van-button type="default" size="large" @click="no">取消</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      nickname: "",
      username: "",
      gender: "",
      year: "",
      month: "",
      day: "",
      time: "",
      value: "",
      id: ""
    };
  },
  methods: {
    left() {
      this.$router.go(-1);
    },
    yes() {
      this.year=this.time.slice(0,4)
      this.month=this.time.slice(5,7)
      this.day=this.time.slice(8,10)
      this.$api
        .postsaveUser({
          gender: this.gender,
          year: this.year,
          month: this.month,
          day: this.day,
          id: this.id,
          nickname: this.nickname
        })
        .then(res=>{
          
          if(res.code===200){
            this.$toast.success(res.msg);
            res.user={
               gender: this.gender,
          year: this.year,
          month: this.month,
          day: this.day,
          id: this.id,
          nickname: this.nickname
            }
          }
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    },
    no(){
      this.$api
      .postqueryUser()
      .then(res => {
        if (res.code === 200) {
          this.nickname = res.userInfo.nickname;
          this.username = res.userInfo.username;
          this.gender = res.userInfo.gender;
          this.year = res.userInfo.year;
          this.month = res.userInfo.month;
          this.day = res.userInfo.day;
          this.id = res.userInfo._id;
          this.time = `${this.year}年${this.month}月${this.day}日`;
        }
        this.time=dayjs(this.time).format('YYYY年M月D日')
         
        
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.$api
      .postqueryUser()
      .then(res => {
        if (res.code === 200) {
          this.nickname = res.userInfo.nickname;
          this.username = res.userInfo.username;
          this.gender = res.userInfo.gender;
          this.year = res.userInfo.year;
          this.month = res.userInfo.month;
          this.day = res.userInfo.day;
          this.id = res.userInfo._id;
          this.time = `${this.year}-${this.month}-${this.day}`;
        }
        this.time=dayjs(this.time).format('YYYY年MM月DD日') 
        console.log(this.time);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.left {
  position: absolute;
  left: 25px;
}
</style>