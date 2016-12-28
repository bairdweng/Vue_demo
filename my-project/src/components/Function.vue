<template>
    <div>
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
                    name:'基本记录'
                },{
                    name:'备孕爸妈自我记录'
                },{
                    name:'孕前优生健康记录'
                },{
                    name:'月经周期与基础体温自测'
                }]
            }
        }
    }
</script>

