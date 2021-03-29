<template>
  <body id="paper">
    <div>
        <!--  这里绑定定义的数据-->
        <el-form v-if="this.mode==='login'" :rules="rules" class="login-container" label-position="left"
                label-width="0px" v-loading="loading">
            <h1 class="login_title">到云后台系统登录</h1>
            <el-form-item prop="account">
            <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" show-password></el-input>
            </el-form-item>
            <el-form-item  prop="smsCode">
              <el-row :gutter="10">
                <el-col :span="16">
                  <el-input type="string" v-model="loginForm.smsCode" autocomplete="off" placeholder="验证码"></el-input>
                </el-col>
                <el-col :span="8">
                  <div class="login-code" @click="refreshCode">
                    <!--验证码组件-->
                    <SIdentify :identifyCode="identifyCode"></SIdentify>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
            <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
            <el-form-item style="width: 100%">
            <el-button type="info" @click.native.prevent="submitClick" style="width: 100%">登录</el-button>
            </el-form-item>
          <div style="padding-bottom: 20px">
            <el-link style="float: left" @click="onChangeMode('register')">注册账号</el-link>
            <el-link style="float: right;" @click="onChangeMode('forgot')">忘记密码</el-link>
          </div>
        </el-form>
      <el-form v-else-if="this.mode==='register'" :rules="rules" class="login-container" label-position="left"
               label-width="0px" v-loading="loading">
        <h1 class="login_title">注册</h1>
        <el-form-item prop="account">
          <el-input type="text" v-model="registerForm.phone" auto-complete="off" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="密码" show-password></el-input>
        </el-form-item>

        <el-form-item  prop="smsCode">
          <el-row :gutter="10">
            <el-col :span="18">
              <el-input type="string" v-model="registerForm.smsCode" autocomplete="off" placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="info" @click="getMsgCode()" :disabled="disabledCodeBtn">{{codeText}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="info" @click.native.prevent="onRegister" style="width: 100%">注册</el-button>
        </el-form-item>
        <div>
          <el-link @click="onChangeMode('login')">前往登录</el-link>
        </div>
      </el-form>
      <el-form v-else :rules="rules" class="login-container" label-position="left"
               label-width="0px" v-loading="loading">
        <h1 class="login_title">修改密码</h1>
        <el-form-item prop="account">
          <el-input type="text" v-model="forgotForm.phone" auto-complete="off" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="forgotForm.password" auto-complete="off" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="forgotForm.password1" auto-complete="off" placeholder="确认密码" show-password></el-input>
        </el-form-item>

        <el-form-item  prop="smsCode">
          <el-row :gutter="10">
            <el-col :span="18">
              <el-input type="string" v-model="registerForm.smsCode" autocomplete="off" placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="info" @click="getMsgCode()" :disabled="disabledCodeBtn">{{codeText}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="info" @click.native.prevent="onModifyPassword" style="width: 100%">提交更改</el-button>
        </el-form-item>
        <div>
          <el-link @click="onChangeMode('login')">前往登录</el-link>
        </div>
      </el-form>
    </div>
  </body>
</template>
<script>
  import {postRequest} from '../utils/api'
  import SIdentify from "@/components/Identify";
  export default{
    name: 'Login',
    components: {
      SIdentify
    },
    data(){
      return {
        // 这里定义数据
        rules: {
          account: [{required: true, message: '请输入手机号', trigger: 'blur'}],
          checkPass: [{required: true, message: '请输入密码', trigger: 'blur'}],
          smsCode: [{ required: true, message: '验证码不能为空'},
                    {pattern: '/[a-zA-Z0-9}$/',message: '验证码只能为数字或字母',trigger: 'blur' }]
        },
        checked: true,
        msgValidate: false,
        mode: 'login',
        loginForm: {
          username: 'admin',
          password: '123456',
          smsCOde: ''
        },
        registerForm: {
          phone: '',
          password: '',
          smsCode: ''
        },
        forgotForm: {
          phone: '',
          password: '',
          password1: '',
          smsCOde: ''
        },
        loading: false,
        identifyCodes: '1234567890',
        identifyCode: '',
        disabledCodeBtn: false,
        codeText: '获取'
      }
    },
    methods: {
      onChangeMode: function (mode) {
        this.mode = mode
      },
      onRegister: function () {
        return
      },
      onModifyPassword: function () {

      },
      // 这里使用定义的数据
      submitClick: function () { // 提交表单
        let _this = this;
        this.loading = true;
        postRequest('/login', { // 被封装了的axios方法
          // 向服务器发送请求
          username: this.loginForm.username,
          password: this.loginForm.password
        }).then(resp => {
          _this.loading = false;
          if (resp.status == 200) { // 200 表示成功 300 表示重定向
            //成功
            let json = resp.data;
            if (json.status == 'success') { // 返回成功便跳转到home
              _this.$store.commit('login', _this.loginForm)
              _this.$router.replace({path: '/home'});
            } else {
              _this.$alert('登录失败!', '💩失败!');
            }
          } else {
            //失败
            _this.$alert('登录失败!', '💩失败!');
          }
        }, resp => {
          console.log(resp.status);
          _this.loading = false;
          _this.$alert('哎呀！找不到服务器⊙﹏⊙||!', '💩真尴尬!');
        });
      },
      getMsgCode() {
        let _this = this;
        this.loading = false;
        postRequest('/getcode',{
          code: this.loginForm.smsCode
        }).then(resp => {
          _this.$alert('验证码发送成功');
          _this.countDown(60)
        })
      },
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      refreshCode () {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      makeCode (o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
              this.randomNum(0, this.identifyCodes.length)
              ]
        }
      },
      countDown (time) {
        if (time === 0) {
          this.disabledCodeBtn = true
          this.codeText = "获取"
          return
        } else {
          this.disabledCodeBtn = false;
          this.codeText = '重新发送(' + time + ')'
          time--
        }
        setTimeout(()=> {
          this.countDown(time)
        }, 1000)
      }
    }
  }
</script>
<style>
#paper {
  background:url("../assets/backimg3.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  top: 0;
}
body {
  margin: 0;
}

.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: rgba(255,255,255,0.9);
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>
