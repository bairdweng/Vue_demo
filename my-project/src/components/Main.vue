<template>
    <div>
        <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
        <div class="loading">
            <mu-circular-progress :size="25" :strokeWidth="2" v-if="progress"/>
        </div>
        <div id="test"></div>
        <div v-for="item in items" >
            <router-link :to="{ name: 'news', params: { id: item.url,title: item.title}}">
                <mu-card-header :title="item.author_name" :subTitle="item.title">
                    <mu-avatar :src="item.thumbnail_pic_s" slot="avatar"/>
                </mu-card-header>
                <mu-card-media :title="item.category" :subTitle="item.author_name">
                    <img :src="item.thumbnail_pic_s"/>
                </mu-card-media>
            </router-link>
        </div>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText="加载中"/>
    </div>
</template>
<script>
    export default{
        data (){
            return {
                items:[],
                progress:true,
                loading:false,
                refreshing:false,
                scroller: null,
                trigger: null,
                page:0,
                url:'http://123.207.47.17/xgg/news',
                customStyle:{
                    top: '0px',
                    width: '100%',
                    height:'100%',
                    'overflow-y':'auto',
                    'overflow-x':'hidden',
                    '-webkit-overflow-scrolling': 'touch',
                    position: 'relative',
                    'user-select': 'none',
                }
            }
        },
        mounted () {
            this.trigger = this.$el

        },
        methods:{
            loadMore () {
               this.getdate(true);
            },
            refresh(){
                this.refreshing = true
                this.getdate(false)
            },
            getdate(ismore){
                if (ismore){
                    this.page++;
                    console.log(this.page);
                    this.loading = true;
                    this.$http.get(this.url)
                            .then((response) => {
                                this.loading = false;
                                var items = response.data['result']['data'];
                                this.items=this.items.concat(items);
                            });
                }
                else {
                    this.$http.get(this.url)
                            .then((response) => {
                                var items = response.data['result']['data'];
                                this.progress = false;
                                this.refreshing = false
                                this.items = items;
                            });
                }
            }
        },
        created () {
            this.getdate(false);
            var weak_this = this;
            //滚动监听
            window.onscroll = function(){
                if (getScrollTop() + getClientHeight() == getScrollHeight()){
                    weak_this.getdate(true);
                }
            }
            //获取滚动条的位置
            function getScrollTop() {
                var scrollTop = 0;
                if (document.documentElement && document.documentElement.scrollTop) {
                    scrollTop = document.documentElement.scrollTop;
                }
                else if (document.body) {
                    scrollTop = document.body.scrollTop;
                }
                return scrollTop;
            }
            //获取可见范围
            function getClientHeight() {
                var clientHeight = 0;
                if (document.body.clientHeight && document.documentElement.clientHeight) {
                    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
                }
                else {
                    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
                }
                return clientHeight;
            }
            //获取文档完整的位置
            function getScrollHeight() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }
        }
    }
</script>



