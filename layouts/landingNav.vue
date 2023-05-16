<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-body-tertiary fixed-top">
      <div class="container">
     <img src="~/assets/img/logo.png" class="navbar-brand"/>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggler">
        <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse justify-content-end " id="navbartoggler">
        <ul class="navbar-nav">
          <li class="nav-item">
           <a  href="#" class="nav-link active">home</a>
          </li>
          <li class="nav-item">
           <a  href="#" class="nav-link">home</a>
          </li>
          <li class="nav-item">
           <a  href="#" class="nav-link">home</a>
          </li>
          <li class="nav-item">
           <a  href="#" class="nav-link">home</a>
          </li>
        </ul>
        <nuxt-link to="/">
        <button class="btn btn-primary px-5">back</button>   
        </nuxt-link>
     
       </div>
      </div>
    </nav>

    <slot/>
     <footer class="bg-primary p-3 text-center text-light">
      <h3>created by khaled sawada</h3>
     </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss">


</style>