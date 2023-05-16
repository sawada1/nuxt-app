<template>
    <div class="themainDash" :class="{'modeTheme':theme}">
        <div class="thenav">
           <div class="container d-flex align-items-center justify-content-center ">
            <div class="row justify-content-around align-items-center w-100">
             <div class="col-12 col-xl-4 col-lg-4">
              <h3>social media dashboard</h3>
              <p>total folowers 23,0560</p> 
             </div>
             <div class="col-12 col-xl-4 col-lg-4 d-flex align-items-center gap-3">
               <p>{{ theword }}</p>
               <span @click="toggle" :class="{'active':theme}"></span>
             </div>
            </div>
           </div>
        </div>
    </div>
</template>

<script setup>
let theme = ref(false);
// console.log(JSON.parse(sessionStorage.getItem('theTheme')))
let theword = ref('dark mode');
const toggle = () => {
    theme.value = !theme.value
    if (theme.value == true) {
       sessionStorage.setItem('theTheme', theme.value)
    theword.value = 'light mode'
    //   document.body.classList.toggle("dark-theme");
    } else {
 sessionStorage.setItem('theTheme', theme.value)
    theword.value = 'dark mode'
}    
}

</script>

<style lang="scss">

:root{
    --light-p: #fafafa;
    --back1:  rgb(19, 19, 42);
    --back2:  #1d1b1b;
}


.modeTheme{
   --light-p: #333;
    --back1:  #ccc;
    --back2:  #eee;
}


.themainDash{
    width: 100%;
    height: 100vh;
    margin-top: 80px;
      background-image: linear-gradient(to bottom ,
      var(--back1)
       30% , var(--back2) 70%);
   .thenav{
    p , h3{
        color: var(--light-p);
    }
    span{
        display: inline-block;
        position: relative;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        background-color: #fff;
        cursor: pointer;
        transition-duration: 1s;
        &::before{
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: red;
        transition-duration: 1s;
        }
        &.active{
        transition-duration: 1s;
            &::before{
        transition-duration: 1s;
                left: 60%;
            }
        }

    }
   }   
}

</style>