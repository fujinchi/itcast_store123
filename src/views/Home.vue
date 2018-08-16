<template>
    <el-container class="container">
        <!-- 头部 -->
        <el-header class="header">
            <!-- 栅格 -->
            <el-row>
                <el-col :span="4">
                    <img src="@/assets/logo.png">
                </el-col>
                <el-col :span="19">
                    <div class="title">电商后台管理系统</div>
                </el-col>
                <el-col :span="1">
                    <div class="logout">
                        <a href="#">退出</a>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <!-- 侧边导航栏 -->
            <el-aside class="aside" width="200px">
                <el-menu
                unique-opened
                router
                default-active="users">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item index="/users">
                            <i class="el-icon-location"></i>
                            用户列表
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>权限管理</span>
                        </template>
                        <el-menu-item index="/roles">
                            <i class="el-icon-location"></i>
                            角色列表
                        </el-menu-item>
                        <el-menu-item index="/rights">
                            <i class="el-icon-location"></i>
                            权限列表
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品管理</span>
                        </template>
                        <el-menu-item index="3-1">
                            <i class="el-icon-location"></i>
                            商品列表
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <i class="el-icon-location"></i>
                            分类参数
                        </el-menu-item>
                        <el-menu-item index="3-3">
                            <i class="el-icon-location"></i>
                            商品分类
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>订单管理</span>
                        </template>
                        <el-menu-item index="4-1">
                            <i class="el-icon-location"></i>
                            订单列表
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>数据统计</span>
                        </template>
                        <el-menu-item index="5-1">
                            <i class="el-icon-location"></i>
                            数据报表
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 主体 -->
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    // 页面呈现出来之前要做的事
    beforeCreate () {
        // 判断是否登录，根据token来判断
        var token = sessionStorage.getItem('token');
        if(!token){
            // 提示
            this.$message.warning('请先登录');
            // 没有token，跳转到登录页面
            this.$router.push('/login');
        }
    }
}
</script>

<style>
    .container {
        height: 100%;
    }
    .header {
        background-color: #b3c0d1;
        padding: 0;
    }
    .aside {
        background-color: #d3dce6;
        height: 100%;
    }
    .main {
        background-color: #e9eef3;   
    }
    .header .title {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
        color: white;
    }
    .header .logout {
        line-height: 60px;
    }
    .header .logout a {
        text-decoration: none;
        color: blue;
    }
</style>
