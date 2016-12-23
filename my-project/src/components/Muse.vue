<template>
    <div>
        <li><router-link to="/hello">点击跳转</router-link></li>
        <div v-for="item in items">
        <mu-card-header :title = "item.title" :subTitle = "item.sutitle">
        <mu-avatar :src="item.thumb" slot="avatar"/>
        </mu-card-header>
        <mu-card-media :title="item.imgtitle" :subTitle="item.imgsubtitle">
        <img :src="item.bigimg"/>
        </mu-card-media>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                items: [{
                    thumb: 'http://img4.imgtn.bdimg.com/it/u=2295037338,1744957210&fm=15&gp=0.jpg',
                    bigimg: 'http://img4.imgtn.bdimg.com/it/u=2295037338,1744957210&fm=15&gp=0.jpg',
                    title: '我是谁',
                    sutitle: '傻B',
                    imgtitle: '图片标题',
                    imgsubtitle: '图片副标题'
                },{
                    thumb: 'http://img4.imgtn.bdimg.com/it/u=2295037338,1744957210&fm=15&gp=0.jpg',
                    bigimg: 'http://img4.imgtn.bdimg.com/it/u=2295037338,1744957210&fm=15&gp=0.jpg',
                    title: '我是谁',
                    sutitle: '傻B',
                    imgtitle: '图片标题',
                    imgsubtitle: '图片副标题'
                },{
                    thumb: 'http://img4.imgtn.bdimg.com/it/u=2295037338,1744957210&fm=15&gp=0.jpg',
                    bigimg: 'http://img4.imgtn.bdimg.com/it/u=2295037338,1744957210&fm=15&gp=0.jpg',
                    title: '我是谁',
                    sutitle: '傻B',
                    imgtitle: '图片标题',
                    imgsubtitle: '图片副标题'
                }]
            }
        }
    }
</script>


