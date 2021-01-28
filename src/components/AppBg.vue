<template>
    <div class="app-bg">

        <!-- background-image container -->
        <!-- start -->
        <div class="img-con">
            <img :src="bgSrc1" alt="bg-1" class="dk">
            <img :src="bgSrc2" alt="bg-2" class="mb">
        </div>
        <!-- end -->

    </div>
</template>

<script>
export default {
    name: 'AppBg',
    props: ["bgSrc1","bgSrc2"]
}
</script>

<style lang="scss" scoped>

//== app-bg style ==//
//== start ==//
.app-bg{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    .img-con{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
//== end ==//

//== bg media ==//
//== start ==//
@media screen and (max-width: 1100px){
    .mb{ 
       display: block;
    }
    .dk{
        display: none;
    }
}
//== end ==//

</style>