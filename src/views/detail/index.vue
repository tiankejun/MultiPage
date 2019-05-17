<template>
    <div class="detail">
        {{msg}}
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Detail',
    data () {
        return {
            msg: 'this  is  detail page'
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
            this.msg = this.name
        }
    }
}
</script>

<style lang="less" scoped>
</style>
