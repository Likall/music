<template>
    <div class="hotalumb-container">
        <ul>
            <li>
                <div class="item">
                    <div class="left">
                        <a href="">
                            <img src="http://p1.music.126.net/_fZwP1hWTeJHYC3ws0iA9g==/109951164074738153.jpg?param=50y50">
                        </a>
                    </div>
                    
                    <div class="right">
                        <a href="" class="desc">
                            夜阑人静｜摇滚与温柔力并存的苦涩灵魂
                        </a>
                        <p>
                            <span>by</span>
                            <a href="" class="name">一房两人三猫四季feefefe</a>
                        </p>
                    </div>
                    
                    
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}
li{
    margin: 0;
    padding: 0;
    padding-left: 10px;
}
.item{
    display: flex;
}
.left{
    width: 60px;
    height: 60px;
}
.left img{
    width: 50px;
    height: 50px;
}
.desc{
    display: inline-block;
    font-size: 14px;
    color:#000000;
    height: 20px;
    width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.right span{
    font-size: 14px;
    color: #999999;
}
.right p{
    display: flex;
    height: 20px;
}
.name{
    display: inline-block;
    font-size: 14px;
    color:#666666;
    height: 20px;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left:5px; 
}
</style>