<template>
    <div class="currency-price">

    <!-- AppBg -->
    <!-- start -->
    <app-bg :bgSrc1="bgSrc1" :bgSrc2="bgSrc2"/>
    <!-- end -->

    <!-- currency table -->
    <!-- start -->
    <currency-table />
    <!-- end -->

    </div>
</template>

<script>
import AppBg from '../components/AppBg.vue'
import CurrencyTable from '../components/CurrencyTable.vue'
export default {
  components: { AppBg, CurrencyTable },
    name: 'CurrencyPrice',
    data(){
    return{
      bgSrc1: require('./../assets/bg-1.png'),
      bgSrc2: require('./../assets/bg-mb-1.png'),
    }
  }
  
}
</script>

<style lang="scss" scoped>

//== currency-price style ==//
//== start ==//
.currency-price{
    padding-top: 136px;
    padding-left: 108px;
    padding-right: 108px;
    display: flex;
    justify-content: center;
    width: 100vw;
}
//== end ==//

//== currency-price media ==//
//== start ==//
@media screen and (max-width: 1200px){
  .currency-price{
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media screen and (max-width: 990px){
  .currency-price{
    padding-left: 20px;
    padding-right: 20px;
  }
}
//== end ==//

</style>