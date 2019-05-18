<template>
    <div class="right">
        <singerruzhu></singerruzhu>
        <singerhot></singerhot>
    </div>
</template>
<style lang="css" scoped>
    .right{
        width: 799px;
        padding-bottom: 20px;
    }
</style>

<script>
    import singerruzhu from "../../components/SingerContainer/singerruzhu.vue"
    import singerhot from "../../components/SingerContainer/singerhot.vue"
    export default {
        components:{
            singerruzhu,
            singerhot
        }
    }
</script>