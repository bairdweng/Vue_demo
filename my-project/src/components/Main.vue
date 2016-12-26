<template>
    <div class="demo-infinite-container">
        <div class="loading">
            <mu-circular-progress :size="25" :strokeWidth="2" v-if="progress"/>
        </div>
        <div v-for="item in items">
            <router-link to="/newpage">
                <mu-card-header :title="item.author_name" :subTitle="item.title">
                    <mu-avatar :src="item.thumbnail_pic_s02" slot="avatar"/>
                </mu-card-header>
                <mu-card-media :title="item.realtype" :subTitle="item.type">
                    <img :src="item.thumbnail_pic_s02"/>
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
                scroller: null
            }
        },
        mounted () {
            this.scroller = this.$el
        },
        methods:{
            loadMore () {
               this.getdate(true);
            },
            getdate(ismore){
                if (ismore){
                    this.loading = true;
                    this.$http.get('http://v.juhe.cn/toutiao/index?type=&key=cee8d108ce2da022b1a011d68eee0743')
                            .then((response) => {
                                this.loading = false;
                            });
                }
                else {
                    this.$http.get('http://v.juhe.cn/toutiao/index?type=&key=cee8d108ce2da022b1a011d68eee0743')
                            .then((response) => {
                                var items = response.data['result']['data'];
                                this.items = items;
                                this.progress = false;
                            });
                }
            }
        },
        created () {
            this.getdate(false);
        }
    }
</script>

<style lang="css">
    .demo-infinite-container{
        width: 100%;
        height: 600px;
        overflow: auto;
        -webkit-overflow-scrolling: auto;
        border: 1px solid #d9d9d9;
    }
</style>


