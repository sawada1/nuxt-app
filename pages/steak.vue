<template>
  <div>
   
   <div class="landsteak d-flex justify-content-center align-items-center">
      <div class="thetext text-light d-flex flex-column align-items-center">
       <h2>steakhouse</h2>
       <p>a premium and authenatic steakhouse</p>
       <div class="btns d-flex align-items-center gap-4">
       <button class="btn btn-dark">see menu</button>
       <button class="btn btn-dark">see menu</button>
       </div>
      </div>
   </div>

    <div class="dicover bg-light p-3">
     <div class="container">
      <div class="row justify-content-center text-center align-items-center">
       <div class="col-12 col-xl-3 col-lg-3">
         <h4>dicover our menu</h4>
       </div>
       <div class="col-12 col-xl-5 col-lg-5">
       <p>Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
         Explicabo ex esse blanditiis 
         voluptatum nam natus dolorum quisquam 
         culpa quidem placeat. Architecto 
       aliquid nobis eum velit laboriosam, 
       doloremque veritatis! A, magnam.</p>
       </div>
      </div>
     </div>
    </div>
   <div class="promise p-3" style="background-color: black;">
     <div class="container text-light">
      <h3 class="text-center my-5">our promise</h3>
      <div class="row align-items-center justify-content-center g-5">
       <div class="col-12 my-3">
        <div class="row align-items-center justify-content-center ">
         <div class="col-12 col-xl-5 col-lg-5 d-flex flex-column ">
           <h4 class="text-end">100% meat</h4>
           <p class="text-end">Lorem ipsum dolor sit 
           amet consectetur adipisicing 
           elit. Voluptas, distinctio at? Adipisci 
           laborum commodi officiis.</p>
         </div>
         <div class="col-12 col-xl-5 col-lg-5">
           <img src="~/assets/img2/1.jpg" class="img-fluid" alt="">
         </div>
        </div>
       </div>
       <div class="col-12 my-3">
        <div class="row align-items-center justify-content-center ">
         <div class="col-12 col-xl-5 col-lg-5">
           <img src="~/assets/img2/2.jpg" class="img-fluid" alt="">
         </div>
         <div class="col-12 col-xl-5 col-lg-5 d-flex flex-column ">
           <h4 class="text-end">100% meat</h4>
           <p class="text-end">Lorem ipsum dolor sit 
           amet consectetur adipisicing 
           elit. Voluptas, distinctio at? Adipisci 
           laborum commodi officiis.</p>
         </div>
        </div>
       </div>
       <div class="col-12 my-3">
        <div class="row align-items-center justify-content-center ">
         <div class="col-12 col-xl-5 col-lg-5 d-flex flex-column ">
           <h4 class="text-end">100% meat</h4>
           <p class="text-end">Lorem ipsum dolor sit 
           amet consectetur adipisicing 
           elit. Voluptas, distinctio at? Adipisci 
           laborum commodi officiis.</p>
         </div>
         <div class="col-12 col-xl-5 col-lg-5">
           <img src="~/assets/img2/3.jpg" class="img-fluid" alt="">
         </div>
        </div>
       </div>
       <div class="col-12 my-3">
        <div class="row align-items-center justify-content-center ">
         <div class="col-12 col-xl-5 col-lg-5">
           <img src="~/assets/img2/1.jpg" class="img-fluid" alt="">
         </div>
         <div class="col-12 col-xl-5 col-lg-5 d-flex flex-column ">
           <h4 class="text-end">100% meat</h4>
           <p class="text-end">Lorem ipsum dolor sit 
           amet consectetur adipisicing 
           elit. Voluptas, distinctio at? Adipisci 
           laborum commodi officiis.</p>
         </div>
        </div>
       </div>
      </div>
     </div>
   </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'steak-nav'
});
useHead({
  title:'steak'
})
 
</script>

<style lang="scss">

.landsteak{
  height: 600px;
  width: 100%;
    background-image: url('~/assets/img2/intro.jpg');
    background-size: cover;
    background-repeat: no-repeat;
.thetext{
}
}

</style>
