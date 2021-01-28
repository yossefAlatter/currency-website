<template>
  <div class="currency-table">
    <div class="table-con">

      <!-- table heading -->
      <!-- start -->
      <ul class="table-heading">
        <li>الاسم</li>
        <li>السعر <span>(USD)</span></li>
        <li class="mb-col">التغير (24س)</li>
        <li>التغير (7 أيام)</li>
        <li class="mb-col">الرمز</li>
        <li class="mb-col">السعر <span>(BTC)</span></li>
        <li>القيمة</li>
        <li class="mb-col">حجم (24س)</li>
        <li class="mb-col">الإجمالي <span> %</span></li>
      </ul>
      <!-- start -->
      
      <!-- table body -->
      <!-- start -->
      <ul class="table-body" v-for="currency in currencies" :key="currency.id">
        <li class="currency-logo"><div class="currency-icon"><img src="./../assets/bitcoin.png" alt="bitcoin" /></div><div>Bitcoin</div></li>
        <li>33,696.6</li>
        <li class="mb-col">+6.06%</li>
        <li>-6.36%</li>
        <li class="mb-col">BTC</li>
        <li class="mb-col">1</li>
        <li>$630.87B</li>
        <li class="mb-col">$58.84B</li>
        <li class="mb-col">45.15%</li>
      </ul>
      <!-- end -->

    </div>
  </div>
</template>

<script>
export default {
  name: "CurrencyTable",
  data(){
      return {
          currencies:[
              {
                  id: 1,
              },
              {
                  id: 2,
              },
              {
                  id: 3,
              },
              {
                  id: 4,
              },
              {
                  id: 5,
              },
          ]
      }
  }
};
</script>

<style lang="scss" scoped>

//== currency table style ==//
//== start ==//
.currency-table {
  position: relative;
  width: 100%;
  margin-right: 70px;
  margin-left: 70px;
}
//== end ==//

//== table heading style ==//
//== start ==//
.table-heading{
    display: grid;
    grid-template-columns: repeat(9,1fr);
    background-color: var(--darkYellowColor);
    padding: 20px;
    border-radius: 100px;
    margin-bottom: 14px;
    li{
        font-size: 17px;
        font-weight: normal;
        font-family: var(--arabicFont);
        color: var(--whiteColor);
        cursor: default;
    }
}
//== end ==//

//== table body ==//
//== start ==//
.table-body{
    display: grid;
    grid-template-columns: repeat(9,1fr);
    margin-bottom: 14px;
    background-color: var(--lightYellowColor);
    padding: 20px;
    border-radius: 100px;
    margin-bottom: 14px;
    &:hover{
        transition: 0.3s;
        opacity: 0.8;
    }
    li{
        font-size: 17px;
        font-weight: lighter;
        font-family: var(--arabicFont);
        color: var(--blackColor);
        max-height: 32px;
        cursor: default;
        &.currency-logo{
        display: flex;
        align-items: center;
        justify-content: center;
          font-weight: normal;
          .currency-icon{
              transform: scale(0.8);
              img{
                  width: 100%;
                  transform: translateY(15%);
              }
          }
    }
    }
}
//== end ==//

//== currency table media ==//
//== start ==//
@media screen and (max-width: 1195px) {
    li{
        font-size: 13px !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
@media screen and (max-width: 990px) {
    li{
        font-size: 10px !important;
    }
    .currency-icon{
        transform: scale(0.7);
    }
}
@media screen and (max-width: 810px) {
    li{
        font-size: 8px !important;
    }
    .currency-table{
        transform: scale(0.9);
        margin-right: 20px;
  margin-left: 20px;
    }
    .table-body , .table-heading{
        transform: scaleY(0.9);
        grid-template-columns: repeat(4,1fr) !important;
    }
    .mb-col{
        display: none;
    }
}
//== end ==//

</style>
