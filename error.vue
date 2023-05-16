<template>
    <div>
        <h2>{{ error.statusCode }}</h2>
        <h5>{{ error.message }}</h5>
         <button @click="handleError">back to home</button>
    </div>
</template>

<script setup>
const { error } = defineProps(['error']);
const handleError = () => clearError({ redirect: '/' });
</script>

<style lang="scss">


</style>