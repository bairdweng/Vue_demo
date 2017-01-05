
<template>
    <div class="container">
        <mu-list>
            <mu-raised-button label="退出登录" fullWidth @click="LogOut"/>
        </mu-list>
    </div>
</template>
<script>
    export default {
        methods:{
            reloadData(){
                this.$store.commit('COMM_CONF',{
                    isFooter:true,
                    isBack:false,
                    title:'我',
                    selectIndex:'tab3',
                    tab3:'我'
                });
            },
            LogOut(){
                this.$router.push('/login');
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            })
        }
    }
</script>