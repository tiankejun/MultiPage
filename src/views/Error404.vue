<template>
    <div class="error">
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'Errow404',
    data () {
        return {
            msg: '错误页面'
        }
    }
}
</script>

<style lang="less" scoped>
.error {
    padding: 20px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
}
</style>
