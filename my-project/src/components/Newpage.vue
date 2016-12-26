<template>
    <div>
        <div class="fixed_div">
            <mu-appbar title="基本状况">
                <mu-icon-button onclick="window.history.go(-1)" icon="close" slot="left"/>
            </mu-appbar>
        </div>
        <div class="zhanwei"></div>
        <div v-for="item in items" class="container">
             <mu-text-field :label="item.label" :hintText="item.hintText" v-model=item.value fullWidth/><br/>
        </div>
        <div class="container">
            <mu-raised-button v-on:click = "finish" label="完成" fullWidth/></br></br>
            <mu-toast v-if="toast" :message="message"/><br>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                items: [{
                    label: '姓名',
                    hintText:'请输入您的姓名',
                    value:""
                }, {
                    label: '年龄',
                    hintText:'请输入您的年龄',
                    value:""

                }, {
                    label: '职业',
                    hintText:'请输入您的职业',
                    value:""
                }, {
                    label: '民族',
                    hintText:'请输入您的民族',
                    value:""
                }, {
                    label: '身份证号',
                    hintText:'请输入您的身份证号',
                    value:""
                }, {
                    label: '户口所在地',
                    hintText:'请输入您的户口所在地',
                    value:""

                }, {
                    label: '工作单位',
                    hintText:'请输入您的工作单位',
                    value:""
                }],
                toast: false,
                message:"一旦"
            }
        },
        methods:{
            finish: function (){
                for (var index in this.items){
                    var item = this.items[index]
                    if (item.value.length==0){
                        this.message = '请输入您的'+item.label;
                        showToast(this);
                        return;
                    }
                }
                //显示Toast。
                function showToast(obj){
                    obj.toast = true
                    if (obj.toastTimer) clearTimeout(obj.toastTimer)
                    obj.toastTimer = setTimeout(() => { obj.toast = false },2000)
                }
            }
        }
    }
</script>
