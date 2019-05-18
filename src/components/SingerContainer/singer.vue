<template>
    <div >
        <div class="singer-container">
        <SingerList></SingerList>
        <SingerMain></SingerMain>
        </div>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
    import SingerList from "../../components/SingerContainer/singerlist.vue"
    import SingerMain from "../../components/SingerContainer/singermain.vue"
    import Footer from "../../components/MainContainer/footer.vue"
    export default {
        components:{
            SingerList,
            SingerMain,
            Footer
        }
    }
</script>

<style lang="css" scoped>
    .singer-container{
        border: 1px red solid;
        display: flex;
 }
    *{
        padding: 0;
        margin: 0;
    }
    body{
        background-color: rgb(245,245,245);

    }
    .singer-container{
        margin: 0 auto;
        border: 1px lightgray solid;
        width: 980px;
    }
    .footer{
        width: 100%;
        background-color: #f3f3f3;
        height: 100px;
        border: 1px solid #d3d3d3;

    }


</style>