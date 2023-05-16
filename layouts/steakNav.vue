<template>
  <div>
    <div class="navbar navbar-expand-sm navbar-dark" style="background-color: black;">
    <div class="container">
      <h2 class="fs-3 text-light">steakHouse</h2>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#steaknav">
      <span class="navbar-toggler-icon"></span>
      </button>
        <!-- <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#thenav">
          <span class="navbar-toggler-icon">
          </span>
         </button> -->
      <div class="collapse navbar-collapse" id="steaknav">
       <ul class="navbar-nav">
        <li class="nav-item">
         <a href="#" class="nav-link active">home</a>
        </li>
        <li class="nav-item">
         <a href="#" class="nav-link ">home</a>
        </li>
        <li class="nav-item">
         <a href="#" class="nav-link ">home</a>
        </li>
        <li class="nav-item">
         <a href="#" class="nav-link ">home</a>
        </li>
       </ul>
       <nuxt-link to="/">
       <button class="btn btn-light px-4">back</button>  
       </nuxt-link>
      </div>  
    </div>
  
    </div>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss">


</style>
