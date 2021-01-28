<template>
    <div class="pagination-app">

        <!-- pagination structure -->
        <!-- start -->
      <div class="pagination-structure">
      <router-link to="/" class="circle"></router-link>
      <router-link to="/currencyprice" class="circle"></router-link>
      <router-link to="/contact" class="circle" style="margin: 0"></router-link>
      </div>
        <!-- end -->

    </div>
</template>

<script>
export default {
    name: 'PaginationApp'
}
</script>

<style lang="scss" scoped>

//== pagination app style ==//
//== start ==//
.pagination-app{
    position: absolute;
    top: 50%;
    right: 108px;
    transform: translateY(-50%);
    z-index: 1;
}
//== end ==//

//== pagination structure style ==//
//== start ==//
.pagination-structure{
    .circle{
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-bottom: 5px;
    background-color: var(--grayColor);
    transition: all 0.3s;
    &.router-link-exact-active ,&:hover{
      background-color: var(--whiteColor);
      transform: scale(1.1);
    }
}
}
//== end ==//

//== pagination media ==//
//== start ==//
@media screen and (max-width: 1200px){
  .pagination-app{
    right: 40px;
  }
}
@media screen and (max-width: 990px){
  .pagination-app{
    right: 20px;
  }
}
//== end ==//

</style>