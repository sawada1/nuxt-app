<template>
    <div>
              <header>
        <nav class="navbar">
        <nuxt-link to="/products" class="logo">
        <h1>products page</h1>
        </nuxt-link>
         <ul>
          <li>
           <nuxt-link to="/">home</nuxt-link>
          </li>
          <li>
           <nuxt-link to="/about">about</nuxt-link>
          </li>
          <li>
           <nuxt-link to="/products">products</nuxt-link>
          </li>
          <li>
           <nuxt-link to="/contact">contact</nuxt-link>
          </li>
         </ul>
        </nav>
        </header>
        
        <div>
        <slot/>  
        </div>
      

       <footer>
         <h3>this is footer</h3>
       </footer>
    </div>
</template>