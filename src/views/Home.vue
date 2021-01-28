<template>
  <div class="home">

    <!-- AppBg -->
    <!-- start -->
    <app-bg :bgSrc1="bgSrc1" :bgSrc2="bgSrc2"/>
    <!-- end -->

    <!-- pargraphIntro -->
    <!-- start -->
    <pragraph-intro />
    <!-- end -->

    <!-- buttons for curency prices -->
    <!-- start -->
    <div class="btn-con">
        <router-link to="/currencyprice" class="nav-link">اسعار العملات</router-link>
    </div>
    <!-- end -->

  </div>
</template>

<script>
//== my components ==//
//== start ==//
import AppBg from '../components/AppBg.vue';
import PragraphIntro from '../components/PragraphIntro.vue';
//== end ==//


export default {
  name: "Home",
  components: {
    AppBg,
    PragraphIntro

  },
  data(){
    return{
      bgSrc1: require('./../assets/bg-1.png'),
      bgSrc2: require('./../assets/bg-mb-1.png'),
    }
  }
};
</script>

<style lang="scss" scoped>

//== home style ==//
//== start ==//
.home{
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
}
//== end ==//

//== btn style ==//
//== start ==//
.btn-con{
  margin-top: 30px;
  position: relative;
  a{
    border: none;
    outline: none;
    background-color: var(--grayBlueColor);
    color: var(--whiteColor);
    padding: 15px 30px;
    border-radius: 100px;
    min-width: 400px;
    font-family: var(--arabicFont);
    &:hover{
      transition: all 0.3s;
      opacity: 0.8;
    }
  }
}
//== end ==//


</style>
