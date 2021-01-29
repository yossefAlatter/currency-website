<template>
    <div class="navigation-bar">

        <div class="nav-layout">

        <!--logo  -->
        <!-- start -->
        <div class="logo-con">
            <router-link to="/" class="logo" dir="ltr" lang="en">BTCALARAB</router-link>
        </div>
        <!-- end -->
      
      <!-- nav-list -->
      <!-- start -->
      <ul class="nav-list">
          <li class="nav-item">
              <router-link to="/" class="nav-link">الرئيسية</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/currencyprice" class="nav-link">اسعار العملات</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/contact" class="nav-link">اتصل بنا</router-link>
          </li>
      </ul>
      <!-- end -->

      </div>

    </div>
</template>

<script>
export default {
    name: 'AppNav'
}
</script>

<style lang="scss" scoped>

//== navigation bar style ==//
//== start ==//
.navigation-bar{
    padding-top: 33px;
    padding-left: 108px;
    padding-right: 108px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
}
.nav-layout{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
}
//== end ==//

//== logo ==//
.logo-con{
    .logo{
        font-size: 25;
            font-family: var(--arabicFont);
            font-weight: normal;
            color: var(--whiteColor);
    }
}
//== start ==//

//== end ==//

//== nav-list style ==//
//== start ==//
.nav-list{
    .nav-item{
        .nav-link{
            font-size: 17px;
            font-family: var(--arabicFont);
            font-weight: normal;
            color: var(--whiteColor);
            padding: 8px 37px;
            margin-left: 29px;
            transition: all 0.3s;
            border-radius: 100px;
            &.router-link-exact-active ,&:hover{
            background-color: var(--grayBlueColor);
            
    }
        }
    }
}
//== end ==//

//== navigation bar media ==//
//== start ==//
@media screen and (max-width: 1200px){
  .navigation-bar{
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media screen and (max-width: 990px){
  .navigation-bar{
    padding-left: 20px;
    padding-right: 20px;
  }
  .nav-link{
      padding-left: 20px !important;
      padding-right: 20px !important;
      margin: 0 !important;
  }
}
@media screen and (max-width: 475px){
  .nav-layout{
    align-items: flex-start !important;
    flex-direction: column;
  }
  .logo-con{
      margin-bottom: 15px;
      margin-right: auto;
  }
  .nav-list{
      li{
          margin-bottom: 20px;
      }
  }
}
@media screen and (max-width: 400px){

  .nav-list{
      li{
          margin-bottom: 20px;
          a{
              padding-left: 13px !important;
              padding-right: 13px !important;
              font-size: 14px !important;
          }
      }
  }
}
@media screen and (max-width: 285px){

  .nav-list{
      li{
          margin-bottom: 20px;
          a{
              padding-left: 8px !important;
              padding-right: 8px !important;
              font-size: 12px !important;
          }
      }
  }
}
//== end ==//

</style>