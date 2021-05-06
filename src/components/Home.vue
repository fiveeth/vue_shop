<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/mainPage.png" alt="logo" />
        <span>manage</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
<<<<<<< HEAD
      <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span> 
=======
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          :unique-opened="true"
          :collapse-transition="false"
          :collapse="isCollapse"
          :router="true"
          :default-active="activePath"
        >
          <div class="toggle_bottun" @click="toggleCollapse">|||</div>
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavPath('/' + subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
>>>>>>> dev
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
<<<<<<< HEAD
      <el-main>Main</el-main>
=======
      <el-main>
        <router-view></router-view>
      </el-main>
>>>>>>> dev
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
<<<<<<< HEAD
      menuList: []
=======
      menuList: [],
      iconObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      isCollapse: false,
      activePath: ''
>>>>>>> dev
    };
  },
  created() {
    this.getMenuList();
<<<<<<< HEAD
=======
    this.activePath = window.sessionStorage.getItem('activePath');
>>>>>>> dev
  },
  methods: {
    logout: function() {
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
    getMenuList: async function() {
      const { data: res } = await this.$http.get('menus');
      if (res.meta.status !== 200) {
        this.$message.error(res.meta.msg);
      }
      this.menuList = res.data;
<<<<<<< HEAD
=======
    },
    toggleCollapse: function() {
      this.isCollapse = !this.isCollapse;
    },
    saveNavPath: function(activePath) {
      window.sessionStorage.setItem('activePath', activePath);
      this.activePath = activePath;
>>>>>>> dev
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #373d41;
  color: #fff;
  font-size: 22px;
  > div {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
<<<<<<< HEAD
=======
  .el-menu {
    border-right: none;
  }
>>>>>>> dev
}

.el-main {
  background-color: #eaedf1;
}
<<<<<<< HEAD
=======

.iconfont {
  margin-right: 10px;
}

.toggle_bottun {
  background-color: #4a5064;
  color: #fff;
  letter-spacing: 0.12em;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
}
>>>>>>> dev
</style>
