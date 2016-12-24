<template>
    <div>
        <div class="fixed_div">
            <mu-appbar title="基本状况">
                <mu-icon-button onclick="window.history.go(-1)" icon="close" slot="left"/>
            </mu-appbar>
        </div>
        <div class="zhanwei"></div>
        <div v-for="item in items" class="container">
             <mu-text-field :label="item.label" :hintText="item.hintText" fullWidth/><br/>
        </div>
        <div class="container">
            <mu-raised-button v-on:click = "finish" label="完成" fullWidth/></br></br>
            <mu-toast v-if="toast" message="一段简单的文本"/><br>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                items: [{
                    label: '姓名',
                    hintText:'请输入您的姓名'
                }, {
                    label: '年龄',
                    hintText:'请输入您的年龄'
                }, {
                    label: '职业',
                    hintText:'请输入您的职业'
                }, {
                    label: '民族',
                    hintText:'请输入您的民族'
                }, {
                    label: '身份证号',
                    hintText:'请输入您的身份证号'
                }, {
                    label: '户口所在地',
                    hintText:'请输入您的户口所在地'
                }, {
                    label: '工作单位',
                    hintText:'请输入您的工作单位'
                }],
                toast: false
            }
        },
        methods:{
            finish: function (){
                console.log('卧槽你大爷')
                this.toast = true
                if (this.toastTimer) clearTimeout(this.toastTimer)
                this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
            }
        }
    }
</script>
