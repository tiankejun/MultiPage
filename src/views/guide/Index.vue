<template>
    <div class="index">
        <aside class="left">
            <ul class="aside_guide_menu">
                <li class="guide_item" v-for="(route, index) in routers" :key="index">
                    <router-link :to='route.path'>{{route.name}}</router-link>
                </li>
            </ul>
        </aside>
        <menu class="right">
            <router-view/>
        </menu>
    </div>
</template>

<script>
export default {
    name: 'Index',
    components: {
    },
    data () {
        return {
        }
    },
    computed: {
        routers () {
            return this.$router.options.routes[0].children
        }
    },
    mounted () {
        console.log(this.$router.options.routes[0].children, this.$router.currentRoute.path)
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.index {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .left {
        width: 200px;
        font-size: 14px;
        color: #000;
        text-align: center;
        border-right: 1px solid #999;
        overflow-y: auto;
        .guide_item {
            width: 100%;
            border-bottom: 1px solid #999;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            a {
                display: block;
                line-height: 40px;
                text-decoration: 0;
                transition:all .2s;
                &.router-link-active {
                    color: #FFF;
                    background-color: rgb(25, 151, 201)
                }
            }
        }
    }
    .right {
        width: 100%;
    }
}
</style>
