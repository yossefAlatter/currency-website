<template>
    <div class="contact">
    <!-- AppBg -->
    <!-- start -->
    <app-bg :bgSrc1="bgSrc1" :bgSrc2="bgSrc2" />
    <!-- end -->

    <!-- telegram section -->
    <!-- start -->
    <div class="telegram-con">
        <a href="https://t.me/btcalarabi"><img src="./../assets/telegram.png" alt="telegram" /></a>
        <p>قناتنا على التلجرام</p>
    </div>
    <!-- end -->

    <!--  -->
    </div>
</template>

<script>
import AppBg from '../components/AppBg.vue'
export default {
  components: { AppBg },
    name: 'Contact',
    data(){
    return{
      bgSrc1: require('./../assets/bg-2.png'),
      bgSrc2: require('./../assets/bg-mb-2.png'),
    }
  }

}
</script>

<style lang="scss" scoped>
//== contact style ==//
//== start ==//
.contact{
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

}
//== end ==//

//== telegram-con style ==//
//== start ==//
.telegram-con{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    p{
        color: var(--whiteColor);
        font-size: 20px;
        font-family: var(--arabicFont);
        font-weight: normal;
        margin-top: 10px;
    }
}
//== end ==//

//== contact media ==//
//== start ==//

//== end ==//

</style>