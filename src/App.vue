<template>
    <div id="app">
        <el-header id="header">
            <div id="title">
                <span id="big-title">User Portrait and Realtime Data Census System</span>
                <span id="small-title">v1.1</span>
            </div>
        </el-header>
        <el-container>
            <el-aside width="16%">
                <el-menu unique-opened="true">
                    <el-submenu index="1">
                        <template slot="title" class="down"><i class=""></i>用户基础信息统计</template>
                        <el-menu-item @click="goTo('/yearBase')" onfocus="changeBgColor()">年代群体统计</el-menu-item>
                        <el-menu-item @click="goTo('/carrierLike')" ondragenter="changeBgColor()">手机网络使用统计</el-menu-item>
                        <el-menu-item @click="goTo('/emailLike')" ondragover="changeBgColor()">电子邮件使用统计</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class=""></i>用户实时偏好</template>
                        <el-menu-item @click="goTo('/brandLikeOfClothes')">服装品牌实时偏好</el-menu-item>
                        <el-menu-item @click="goTo('/brandLikeOfBags')">包类品牌实时偏好</el-menu-item>
                        <el-menu-item @click="goTo('/brandLikeOfShoes')">鞋类品牌实时偏好</el-menu-item>
                        <el-menu-item @click="goTo('/useTypeLike')">用户终端实时偏好</el-menu-item>
                        <el-menu-item @click="goTo('/payTypeLike')">用户支付类型偏好</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class=""></i>用户本月实时消费</template>
                        <el-menu-item @click="goTo('/consumptionLevel')">实时消费水平统计</el-menu-item>
                        <el-menu-item @click="goTo('/consumptionLabel')">用户实时消费标签</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class=""></i>商品浏览数据实时统计</template>
                        <el-menu-item @click="goTo('/productTypeScanCountNew')">各类商品浏览数据实时统计</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class=""></i>商品类每日实时销售额</template>
                        <el-menu-item @click="goTo('/productTypeSale')">各类商品实时销售额Top5</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            goTo(path) {
                this.$router.replace(path)
            },
            changeBgColor(){
                this.css("background-image: linear-gradient(to right, white, #d4f8ff)");
                this.emitChange();
            }
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        background-image: linear-gradient(to right, white, #d4f8ff, #eaffff, white, white, white);
        width: 100%;
        height: 666px;
    }

    #title{
        position: absolute;
        top: 15px;
        left: 30px;
    }

    #big-title{
        font-size: 25px;
        font-family: "Microsoft YaHei UI",serif;
        font-weight: lighter;
        color: #404040;
    }

    #small-title{
        font-size: 15px;
        color: #404040;
    }

    .el-header{
        height: 10%;
        background-color: #d4f8ff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    .el-container{
        background-color: #edffff;
    }

    .el-menu{
        background-image: linear-gradient(to right, white, #d4f8ff);
        font-family: 黑体, Arial,serif;
        font-size: xx-large;
        color: #404040;
        text-align: left;
    }

    .el-menu-item:hover{
        background-image: linear-gradient(to left, white, #d4f8ff);
    }

    .el-main{
        background-image: linear-gradient(to right, #d4f8ff, white, white);
        background-color: #edffff;
    }
</style>

