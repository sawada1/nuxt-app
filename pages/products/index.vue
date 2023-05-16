<template>
    <div>
    <div class="load" v-if="pending">
    
    </div>
        <div class="text" v-else>
         <h2>products page</h2>
           <div class="container">
           <div class="row justify-content-around gap-3">
            <div class="col-12 col-xl-3 col-lg-3 col-md-5 box" v-for="p in products">
            <nuxt-link :to="`/products/${p.id}`">
              {{ p.title }}
            </nuxt-link>
              <img :src="p.image" alt="">
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>  
           </div>
         
           </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
});
useHead({
    title: 'product page',
});
const {pending ,  data: products } = await useLazyFetch ('https://fakestoreapi.com/products');

</script>

<style lang="scss">
.container{
    // display: grid;
    // grid-template-columns: repeat(3 , 1fr);
    // gap: 10px;
    // margin-top: 30px;
    .box{
    box-shadow: 2px 5px 5px 2px rgba(0, 0, 0, 0.398);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    background-color: #ccc;
    }
}

.container .box img{
    width: 200px;
    height: 200px;
    mix-blend-mode: multiply;
}
.load{
  background-color: red;
  width:100%;
  height:100vh;
}

</style>