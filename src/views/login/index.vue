<template>
    <div class="login">
        <div class="logo">
            <img class="logo_pic" src="~assets/logo.png" alt="">
        </div>
        <div class="login_wrap">
            <div class="buss_info">
                {{msg}}
            </div>
            <div class="login_form">
                <!-- <a class="login_btn" href="index.html" target="_blank" @click="login">登录</a> -->
                <a class="login_btn" href="#" @click="login">登录</a>
                <a class="login_btn" href="#" @click="detail">详情</a>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Login',
    data () {
        return {
            msg: 'this  is  login page'
        }
    },
    computed: {
        ...mapState('common', [
            'name'
        ])
    },
    methods: {
        ...mapActions('common', [
            'update_name'
        ]),
        login () {
            this.update_name('123456')
            let param = '?id=' + '123456'
            window.open('index.html' + param, '_blank')
        },
        detail () {
            this.update_name('abcdefg')
            let param = '?id=' + 'abcdefg'
            window.open('detail.html' + param, '_blank')
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 600px;
    height: 300px;
    margin: 0 auto;
    transform: translateY(50%);
    .logo {
        width: 120px;
        height: 60px;
        .logo_pic {
            display: block;
            width: 120px;
            height: 60px;
        }
    }
    .login_wrap {
        padding: 20px 0;
        font-size: 0;
        border: 1px solid #DDD;
        border-left: 0;
        border-right: 0;
        .buss_info {
            display: inline-block;
            width: 60%;
            font-size: 14px;
        }
        .login_form {
            display: inline-block;
            width: 40%;
            .login_btn {
                display: inline-block;
                padding: 4px 8px;
                font-size: 12px;
                text-decoration: none;
                cursor: pointer;
            }
        }
    }
}
</style>
