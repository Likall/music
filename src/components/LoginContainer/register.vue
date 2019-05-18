<template>
    <!--注册组件模态框-->
    <!--<div class="modal fade" id="myModal2"  data-backdrop="false">-->
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">手机号注册</h4>
                </div>
                <div class="modal-body">
                    <div class="body-container">
                        <div class="title-container">
                            <span class="span-title">手机号：</span>
                        </div>
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
                        <div>
                         <span class="span-title">密码：</span>
                        </div>
                        <div class="input-group input-password">

                            <input type="text" class="form-control" aria-label="..." placeholder="请输入密码">
                        </div>
                        <button class="btn btn-default btn-login" type="submit">下一步</button>
                    </div>

                    <div class="modal-footer">
                        <a class="footer-span"><i class="fa fa-angle-left" aria-hidden="true"></i><a @click="isshow"  data-toggle="modal" class="footer-regist">返回登录</a></a>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    <!--</div>-->

</template>

<script>
    export default {
        data(){
            return{
                show:true
            }
        },
        methods:{
            isshow(){
                this.$emit("show",this.show)
            }
        }
    }
</script>

<style lang="css" scoped>
    * {
        margin: 0px;
        padding: 0px;
    }
    #myModal2{
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
        padding: 15px 0 43px;
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
        display: block;
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
    .span-title{
        font-size: 12px;
        margin-bottom: 15px;

    }
    .title-container{
        margin-bottom: 10px;
        margin-top: 10px;
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
    .modal-footer{
        line-height: 49px;
        margin-left: 20px;
        display: block;

    }
    .footer-span{
        font-size: 12px;
        line-height: 49px;


    }
    .fa-angle-left{
        margin-left: 5px;
        color: #0c72c3;
    }
    .footer-regist{
        color: #0c72c3;
        margin-left: 5px;
    }


</style>