<template>
    <div class="pragraph-intro" style="position: relative">

        <!-- heading -->
        <!-- start -->
        <h2 class="heading">بتكوين العرب</h2>
        <!-- end -->

        <!-- sub text -->
        <!-- start -->
        <p class="subtext">
            أسعار العملات الرقمية محدثة بأستمرار
        </p>
        <!-- end -->

    </div>
</template>

<script>
export default {
    name: 'PragraphIntro'
}
</script>

<style lang="scss" scoped>

//== heading style ==//
//== start ==//
.heading{
    font-size: 34px;
    font-weight: bold;
    color: var(--yellowColor);
    font-family: var(--arabicFont);
}
//== end ==//

//== subtext style ==//
//== start ==//
.subtext{
    font-size: 34px;
    font-weight: normal;
    color: var(--whiteColor);
    font-family: var(--arabicFont);
}
//== end ==//

//== pragraph-intro media ==//
//== start ==//
@media screen and (max-width: 730px){
  .pragraph-intro{
    transform: scale(0.9);
  }
}
@media screen and (max-width: 650px){
  .pragraph-intro{
    transform: scale(0.8);
  }
}
@media screen and (max-width: 560px){
  .pragraph-intro{
    transform: scale(0.67);
  }
}
@media screen and (max-width: 450px){
  .pragraph-intro{
    transform: scale(0.57);
  }
}
@media screen and (max-width: 350px){
  .pragraph-intro{
    transform: scale(0.47);
  }
}
@media screen and (max-width: 250px){
  .pragraph-intro{
    transform: scale(0.37);
  }
}

//== end ==//

</style>