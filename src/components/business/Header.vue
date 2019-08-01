<template>
    <div class="header">
        <div class="header_top">
            <ul class="small_menu">
                <li class="menu_item"><a href="login.html">登录</a></li>
                <li class="menu_item split"></li>
                <li class="menu_item"><a href="#">注册</a></li>
            </ul>
        </div>
        <div class="header_main_nav">
            <router-link to="/About">About</router-link> |
            <router-link to="guide.html" target="_blank">Guide</router-link> |
            <router-link to="login.html" target="_blank">Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.header {
    .header_top {
        line-height: 28px;
        border-bottom: 1px solid #ddd;
        background-color: #f5f5f5;
        .small_menu {
            display: block;
            padding-right: 15%;
            text-align: right;
            .menu_item {
                display: inline-block;
                padding: 2px 4px;
                font-size: 12px;
                color: #DDD;
            }
            .split::after {
                content: '|';
                color: #333;
            }
        }
    }
    .header_main_nav {
        line-height: 40px;
        text-align: center;
    }
}
</style>
