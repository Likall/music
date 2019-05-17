<template>
    <div class="reviewofmusic-container">
        <section>
            <MusicDetial></MusicDetial>
        </section>
        <section>
            <MusicReview></MusicReview>
        </section>
    </div>
</template>
<script>
import MusicReview from '../ReviewContainer/musicreview.vue'
import MusicDetial from '../SongListContainer/musicdetails.vue'
export default {
    components:{
        MusicReview,
        MusicDetial
    }
}
</script>
<style scoped>
.reviewofmusic-container{
    width: 978px;
    /* border: 1px solid #d3d3d3; */
    margin: 0 auto;
}
</style>
