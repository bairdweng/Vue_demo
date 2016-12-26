<template>
    <div v-bind:style="customStyle">
        <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
        <div class="loading">
            <mu-circular-progress :size="25" :strokeWidth="2" v-if="progress"/>
        </div>
        <div v-for="item in items">
            <!--<router-link to="/newpage">-->
                <mu-card-header :title="item.author_name" :subTitle="item.title">
                    <mu-avatar :src="item.thumbnail_pic_s" slot="avatar"/>
                </mu-card-header>
                <mu-card-media :title="item.category" :subTitle="item.author_name">
                    <img :src="item.thumbnail_pic_s"/>
                </mu-card-media>
            <!--</router-link>-->
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
                    top: '55px',
                    width: '100%',
                    height:'100px',
                    'overflow-y':'auto',
                    'overflow-x':'hidden',
                    '-webkit-overflow-scrolling': 'touch',
                    position: 'relative',
                    'user-select': 'none',
                    bottom:'100px'
                }
            }
        },
        mounted () {
            this.scroller = this.$el
            this.trigger = this.$el
        },
        watch:{
            'window.onresize':{
                handler:(val,oldVal)=>{
                    console.log(val,oldVal);
                },
                deep:true
        }},
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
                                this.items = items;
                                this.progress = false;
                                this.refreshing = false
                            });
                }
            }
        },
        created () {
            this.getdate(false);
            //设定窗口高度。
            this.customStyle.height = window.innerHeight-55+'px';
//            this.customStyle.height = '100px';
        }
    }
</script>



