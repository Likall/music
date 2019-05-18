<template>
    <!--这是点击登录页面后弹出的模态框-->
    <div class="modal fade" id="myModal"  data-backdrop="false">
        <!--登陆组件，点击登录时出现，若用户要登录则显示这个组件-->
        <!--当loginshow为true是才会显示登陆组件-->
        <Login v-on:show="showfromchildLogin" v-show="loginshow"></Login>
        <!--注册，点击注册时出现，若用户要注册则显示这个组件-->
        <!--当loginshow为false是才会显示注册组件-->
        <Register v-on:show="showfromchildRegister" v-show="!loginshow"></Register>

    </div>

</template>

<script>
    // 引入Login和Register组件
    import Login from ".//login.vue"
    import Register from ".//register.vue"
    export default {
        data(){
            return{
                //登陆组件是否显示，若为true,显示登陆组件，否则显示注册组件
                loginshow:true
            }
        },
        methods:{
            //从Login子组件传过来的方法，告诉我们该显示登陆组件还是注册组件
            showfromchildLogin:function(data){
               this.loginshow = data;
            },
            //从Register子组件传过来的方法，告诉我们该显示登陆组件还是注册组件
            showfromchildRegister:function(data){
                this.loginshow = data;
                console.log("login"+this.loginshow)
            }
        },
        components:{
            Register,
            Login
        }
    }
</script>

<style lang="css" scoped>
    * {
        margin: 0px;
        padding: 0px;
    }
    #myModal{
        height: 313.5px;
        width: 530px;
        position: relative;
        margin: 0 auto;
        margin-top: 200px;
    }

    .modal-header{
        height: 38px;
        background:  #2D2D2D;
        border-bottom: 1px solid #191919;
        color: white;

    }
    .modal-title{
        line-height: 38px;
        font-size: 14px;
        padding: 0;
        padding-left: 18px;
    }
    .close{
        position: absolute;
        right: 4%;
        color: white;

    }
    .modal-dialog{
        max-width: 530px;
        width: 100%;
        height: 100%;
    }
    .modal-content{
        padding: 0;
        height: 100%;
    }
    .modal-open .modal{
        overflow-y: hidden;
    }
    /*输入框*/
    .input-group{
        border: 1px solid #cdcdcd;
        height: 32px;
    }
    .body-container{
        padding: 30px 0 43px;
        margin: 0 auto;
        width: 250px;
        height: 224.5px;

    }
    .input-group-btn{
        position: relative;
        width: 20%;
    }

    .dropdown-toggle{
        position: absolute;
        font-size: 12px;
        margin-top: 5px;
    }
    .form-control{
        height: 100%;
        padding-left: 10px;
    }
    .btn:focus{
        box-shadow:none;
    }
    .form-control{
        font-size: 14px;
        border-bottom: none;
        border-top: none;
        border-right: none;
    }
    .form-control:focus{
        box-shadow: none;
    }
    .input-password{
        margin-top: 15px;
    }
    /*checkbox*/
    .checkbox{
        font-size: 14px;
        line-height: 16.5px;
    }
    .login-font{
        margin-right: 10px;
    }
    .checkbox-label{
        line-height: 16.5px;
    }
    .checkbox-container{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 16.5px;
        margin-top: 20px;
        color: #666;
        /*position:relative ;*/
    }
    .forget-password{
        font-size: 12px;
        /*position: absolute;*/
        line-height: 16.5px;
    }
    /*按钮*/
    .btn-login{
        height: 31px;
        background: #3080cc;
        color: white;
        font-size: 14px;
        width: 100%;
        margin-top: 20px;
    }
    /*modal-footer*/
    。modal-footer{
        line-height: 49px;

    }
    .footer-span{
        font-size: 12px;
        line-height: 49px;
        margin-right: 20px;

    }
    .fa-angle-right{
        margin-left: 5px;
        color: gray;
    }
    .footer-regist{
        color: gray;
    }

</style>