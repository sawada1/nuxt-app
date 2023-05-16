<template>
    <div>
         <header>
        <nav class="navbar navbar-expand-sm bg-light fixed-top">
        <div class="container">

        <nuxt-link to="/" class="logo navbar-brand">
        <h1>nuxt app</h1>
        </nuxt-link>
         <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#thenav">
          <span class="navbar-toggler-icon">
          </span>
         </button>
         <div class="collapse navbar-collapse  justify-content-end" id="thenav">
        <ul class="navbar-nav">
          <li class="nav-item">
           <nuxt-link class="nav-link" to="/">home</nuxt-link>
          </li>
          <li class="nav-item">
           <nuxt-link class="nav-link" to="/about">about</nuxt-link>
          </li>
          <li class="nav-item">
           <nuxt-link class="nav-link" to="/products">products</nuxt-link>
          </li>
          <li class="nav-item">
           <nuxt-link class="nav-link" to="/landing">landing</nuxt-link>
          </li>
          <li class="nav-item">
           <nuxt-link class="nav-link" to="/dashboard">dashboard</nuxt-link>
          </li>
          <li class="nav-item">
           <nuxt-link class="nav-link" to="/steak">steak</nuxt-link>
          </li>
         </ul>
         </div>
        </div>
        
      
        </nav>
        </header>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
header .navbar ul{
    /* display: flex;
    align-items: center; */
    list-style: none;
    gap: 5px;
}
header .navbar .logo{
    text-decoration: none;
    color:brown;
    font-size: 23px;
}
header .navbar ul li a{
    text-decoration: none;
    font-size: 20px;
    color: #333;
    margin: 0px 10px;
}
header .navbar ul li a.router-link-active{
    color: red;
    font-weight: bold;
}

</style>