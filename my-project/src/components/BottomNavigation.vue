<template>
    <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item value="recents" title="主页" icon="restore"/>
            <mu-bottom-nav-item value="favorites" title="收藏" icon="favorite"/>
            <mu-bottom-nav-item value="nearby" title="位置" icon="location_on"/>
        </mu-bottom-nav>
    </mu-paper>
</template>

<script>
    export default {
        data () {
            return {
                bottomNav: 'recents'
            }
        },
        methods: {
            handleChange (val) {
                this.bottomNav = val
            }
        }
    }
</script>

