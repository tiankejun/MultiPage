<template>
    <div class="main_banner">
        <ul class="banner_right">
            <li class="banner_item"><a href="/guide.html" target="_blank">Guide</a></li>
            <li class="banner_item"><a href="#">test1</a></li>
            <li class="banner_item"><a href="#">test2</a></li>
            <li class="banner_item"><a href="#">test3</a></li>
            <li class="banner_item"><a href="#">test4</a></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.main_banner {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .banner_right {
        display: flex;
        flex-direction: row;
        .banner_item {
            padding: 0 10px;
            line-height: 40px;
            &.linkActiveClass {
                color: rgb(70, 209, 209)
            }
        }
    }
}
</style>
