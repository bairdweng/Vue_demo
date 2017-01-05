<template>
    <div class="container">
        <div v-for="item in items">
            <router-link :to="{ name: 'record', params: { title: item.name}}">
                <mu-list-item :title="item.name">
                </mu-list-item>
                <mu-divider/>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                items:[{
                    name:'宝宝出生记录'
                },{
                    name:'宝宝基本信息'
                },{
                    name:'家庭书'
                },{
                    name:'出牙日期记录'
                }]
            }
        },
        methods:{
            reloadData:function () {
                this.$store.commit('COMM_CONF',{
                    isFooter:true,
                    isBack:false,
                    title:'育儿期',
                    selectIndex:'tab1',
                    tab1:'育儿期'
                });
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            })
        }
    }
</script>

