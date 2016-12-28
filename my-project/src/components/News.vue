<template>
   <div>
       <div class="fixed_div">
           <mu-appbar :title="title">
               <mu-icon-button onclick="window.history.go(-1)" icon="close" slot="left"/>
           </mu-appbar>
       </div>
       <div class="zhanwei"></div>
       <iframe :src="news" v-bind:style="iframecontent">
       </iframe>
   </div>
</template>
<script>
  export  default{
      data(){
          return {
              news:'',
              title:'新闻',
              iframecontent:{
                  frameborder:'0',
                  'scrolling':'no',
                  width:'100%',
                  height:'100%'
              }
          }
      },
      beforeRouteEnter (to, from, next) {
          next();
      },
      beforeRouteLeave (to, from, next) {
          next();
      },
      mounted () {
          this.trigger = this.$el
          console.log('mounted');

      },
      destroyed(){
          console.log('destroyed');
      },
      created () {
          //组件创建完后获取数据，
          this.fetchData()
          var weak_this = this;
          this.iframecontent.height = window.innerHeight+'px';
          window.onresize = function(){
              weak_this.iframecontent.height = window.innerHeight+'px';
          }
      },
      watch: {
          // 如果路由有变化，会再次执行该方法
          '$route': 'fetchData'
      },
      methods:{
          //获取参数
          fetchData(){
              var newsurl = this.$route.params.id;
              var title = this.$route.params.title;
              if (newsurl){
                  this.news = newsurl;
                  this.title = title;
              }
          }
      }
  }
</script>


