<template>
    <div>
    <div class="text">
       <h2>home page</h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Odio accusamus assumenda 
       accusantium suscipit ea, mollitia, repudiandae 
       nostrum doloribus, iusto quia veniam. Ducimus exercitationem,
        corporis vel veritatis enim delectus quos velit?</p>   
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Odio accusamus assumenda 
       accusantium suscipit ea, mollitia, repudiandae nostrum doloribus, 
       iusto quia veniam. Ducimus exercitationem, corporis vel 
       veritatis enim delectus quos velit?</p>
       <button class="btn btn-danger px-5">click here</button>
       <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
    </div>
</template>

<script setup>


function getnum(arr1, arr2) {
  let result = false;
  let common = [];
  // common.indexOf
  //  common.includes
  for (let i = 0; i < arr1.length; i++){
    if (arr1.indexOf(arr2[i]) != -1) {
      result = true;
      common.push(arr2[i]);
    }
  }

  return `${result}  /  ${common}`;
}

// console.log(getnum([1, 2, 4 , 5], [1, 5, 4]));

</script>

<style>
.text{
    padding: 20px;
    margin: 20px;
}



</style>