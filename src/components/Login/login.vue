<template>
<!--登录组件模态框-->
    <!--<div class="modal fade" id="myModal"  data-backdrop="false">-->
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">手机号登录</h4>
                </div>
                <div class="modal-body">
                    <div class="body-container">
                        <div class="input-group">
                            <div class="input-group-btn">
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="quhao">+86</span> <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a href="#">中国+86</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div><!-- /btn-group -->
                            <input type="text" class="form-control" aria-label="..." placeholder="请输入手机号">
                        </div><!-- /input-group -->
                        <div class="input-group input-password">
                            <input type="text" class="form-control" aria-label="..." placeholder="请输入密码">
                        </div>
                        <div class="checkbox-container">
                            <div class="checkbox">
                                <label class="checkbox-label">
                                    <input type="checkbox" value="" class="login-font">自动登录
                                </label>
                            </div>
                            <span class="forget-password">
                               忘记密码？
                            </span>
                        </div>
                        <button class="btn btn-default btn-login" type="submit">登录</button>
                    </div>

                <div class="modal-footer">
                    <div class="footer-span" >
                        <div class="footer-regist" data-toggle="modal"  @click="isshow" >没有账号？免费注册</div>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                   <!--<div class="footer-span" >-->
                       <!--<router-link class="footer-regist" to="/register" data-toggle="modal" data-target="#myModal2" >没有账号？免费注册</router-link>-->
                       <!--<i class="fa fa-angle-right" aria-hidden="true"></i>-->
                   <!--</div>-->
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
        <!--<Register></Register>-->
    <!--</div>-->

</template>

<script>
    import Register from "../Login/register.vue"
    export default {
        data(){
            return{
                show:false
            }
        },
        methods:{
            isshow(){
                this.$emit("show",this.show);
            }

        },
        components:{
            Register
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