<template>
   <div class="header-margin pb-0 lg:pb-64">
      <div class="flex">
      
      <div class="container">
         
         <!-- wardens informantion cards -->
         <div>
         
            <p class="capitalize pt-0 lg:pt-28 text-center lg:text-left text-2xl lg:text-4xl text-burgundy font-bold">administration</p>
         <div id="wardens">
            <p class="mt-4 lg:mt-20 justify-center text-center capitalize text-xl lg:text-3xl text-burgundy font-semibold">- wardens -</p>
         </div>
         
        <ProfileCard :people="wardens" />
      </div>
      </div>
      </div>

      <!-- prefects information card -->
      <div class="container" id="prefects">
      <div class="container w-full" >
         <p class="mt-28 lg:mt-60 justify-center text-center capitalize text-xl lg:text-3xl text-burgundy font-semibold">- prefects -</p>
      </div>
         <ProfileCard :people="prefects" />
      </div>

      <!-- office staff -->
      <div class="container">
      <div class="container justify-items-center" id="office">
          <p class="mt-28 lg:mt-60 justify-center text-center capitalize text-xl lg:text-3xl text-burgundy font-semibold">- office staff -</p>
      </div>
         <ProfileCard :people="officeStaffs" />
      </div>

      <!-- mess convenor -->
      <div class="container">
      <div class="container justify-items-center" id="mess">
         <p class="mt-28 lg:mt-60 capitalize justify-center text-center text-xl lg:text-3xl text-burgundy font-semibold">- Mess Convenor -</p>
      </div>
      <ProfileCard :people="messConvenors" />
      </div>
      

      <!-- Web Team -->
       <div>
      <div class="container justify-items-center" id="web">
         <p class="mt-28 lg:mt-60 capitalize justify-center text-center text-xl lg:text-3xl text-burgundy font-semibold">- Web Team -</p>
      </div>
        <WebCard :people="webTeams" />
      </div>
      
      </div>
      


</template>

<script>
import { wardens, prefects, officeStaffs, messConvenors, webTeams } from './../data/administrationDetails.js';
export default {
   data() {
    return {
         wardens,
         prefects,
         officeStaffs,
         messConvenors,
         webTeams
      };
   },
};
</script>
<style scoped>

</style>
