<template>
    <div class="container">
         <div class="manage_page fillcontain">
            <el-row style="height: 100%;">
                <el-col :span="4"  style="min-height: 100%; background-color:#2c333b;">
                    <el-menu :default-active="defaultActive" style="min-height: 100%;"  router       
                    background-color="#2c333b"
                    text-color="#fff"
                     active-text-color="#2c333b">
                        <el-menu-item index="/manage/index"><i class="el-icon-menu"></i>首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                            <el-menu-item index="userList">用户列表</el-menu-item>
                            <el-menu-item index="shopList" @click='jump'>商家列表</el-menu-item>
                            <el-menu-item index="foodList">食品列表</el-menu-item>
                            <el-menu-item index="orderList">订单列表</el-menu-item>
                            <el-menu-item index="adminList">管理员列表</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
                            <el-menu-item index="addShop">添加商铺</el-menu-item>
                            <el-menu-item index="addGoods">添加商品</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                            <el-menu-item index="visitor">用户分布</el-menu-item>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title"><i class="el-icon-edit"></i>编辑</template>
                            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title"><i class="el-icon-setting"></i>设置</template>
                            <el-menu-item index="adminSet">管理员设置</el-menu-item>
                        </el-submenu>
                        <el-submenu index="7">
                            <template slot="title"><i class="el-icon-warning"></i>说明</template>
                            <el-menu-item index="explain">说明</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :span="20" style="height: 100%;overflow: auto;">
                    <div class="nav">
                        <el-row>
                            <el-col :span="22">
                                 <h2> 辛集慢生活后台管理系统</h2>
                            </el-col>
                            <el-col :span="2"> hello {{username}}</el-col>
                        </el-row>
                    </div>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </el-col>
            </el-row>
        </div>       
    </div>

</template>

<script>
import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                name: '王猛'
            }
        },
        created() {

        },
        methods: { 
            jump() {
               // window.location = 'https://baidu.com'
                window.open('https://group.mrourou.com/addPages.html')
            }
        },
        computed: {
            defaultActive: function(){
                return this.$route.path;
            },
            ...mapGetters([
                'username'])
        },
    }
</script>

<style scoped lang='less'>
    .manage_page{
        // position: absolute;
        // top: 60px;
    }
    .nav {
        height: 56px;
        background :#2c333b;
        line-height: 56px;
        color: #fff;
        h2{
        text-align: center;
         text-shadow: 2px 2px 2px #ffd04b;
         font-family: 'Comic Sans MS', cursive;
        }
    }
    .el-menu-item.is-active {
        background: #ffd04b!important;
    }
.container {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
}
.el-menu {
    border: 0
}
</style>