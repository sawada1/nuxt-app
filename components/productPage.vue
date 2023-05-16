<template>
    <div>
        <div class="text">
        <img :src="product.image" alt="">
         <h3>product id: {{ product.id }}</h3>
         <p>product title {{ product.title }}</p>
         <p>product details {{ product.description }}</p>
         <p>product price: {{ product.price }}</p>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product']); 
</script>

<style scoped>
img{
    width: 500px;
    height: 500px;
}

</style>