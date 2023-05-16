<template>
    <div>
   <Head>
    <Title>{{ product.title.substring(0 , 20) }}</Title>
   </Head>
        <ProductPage :product="product"/>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`
const { data: product } = await useFetch(uri,{key:id});

if (!product.value) {
    throw createError({ statusCode: '404', statusMessage: 'product is not found', fatal:true});
}
definePageMeta({
    layout: 'products'
});
</script>

<style lang="scss">


</style>