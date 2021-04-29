<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-accounton"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-wodemima"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="login_btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      // 数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则对象
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm: function() {
      // 表单规则预验证
      this.$refs.loginFormRef.validate(async valid => {
        if (valid) {
          const { data: res } = await this.$http.post('login', this.loginForm);
          if (res.meta.status !== 200) {
            this.$message.error('登录失败！');
          } else {
            this.$message({
              message: '登录成功！',
              type: 'success'
            });
          }

          // 1 将登录成功之后的token保存到客户端的sessionStorage中
          // 1.1 项目中其他api接口只能登录之后才能访问
          // 1.2 token只应在当前网页打开期间生效，所以将token保存到sessionStorage中
          window.sessionStorage.setItem('token', res.data.token);
          // 2 通过编程式导航跳转到后台主页，路由地址是 /home
          this.$router.push('/home');
        }
      });
    },
    resetForm: function() {
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>

<!-- scoped属性表明只影响当前组件 -->
<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px #ddd;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    background-color: #eee;
    border-radius: 50%;
  }
}

.login_form {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}

.login_btn {
  display: flex;
  justify-content: flex-end;
}
</style>
