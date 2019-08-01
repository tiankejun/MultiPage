<template>
    <div class="index">
        <Header></Header>
        <div class="content">
            {{skuId}}
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from '@/components/business/Header.vue'
import Footer from '@/components/business/Footer.vue'
export default {
    name: 'Index',
    components: {
        Header,
        Footer
    },
    data () {
        return {
            skuId: ''
        }
    },
    computed: {
        ...mapState('common', [
            'name'
        ])
    },
    mounted () {
        this.initPage()
    },
    methods: {
        ...mapActions('common', [
            'update_name'
        ]),
        initPage () {
            this.skuId = this.name
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    padding: 20px 0;
    font-size: 20px;
    text-align: center;
}
</style>
