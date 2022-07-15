<template>
   <div class="header-margin pb-0 lg:pb-64">
      <div class="container">
         <!-- wardens informantion cards -->
         <div class="container w-full">
            <p class="capitalize pt-0 lg:pt-28 text-center lg:text-left text-2xl lg:text-4xl text-burgundy font-bold">administration</p>
            <p class="mt-4 lg:mt-52 justify-center text-center capitalize text-xl lg:text-3xl text-burgundy font-semibold">- wardens -</p>
         </div>
         <ProfileCard :people="wardens" />
      </div>

      <!-- prefects information card -->
      <div class="container">
      <div class="container w-full">
         <p class="mt-28 lg:mt-60 justify-center text-center capitalize text-xl lg:text-3xl text-burgundy font-semibold">- prefects -</p>
      </div>
      <ProfileCard :people="prefects" />
      </div>

      <!-- office staff -->
      <div class="container">
      <div class="container justify-items-center">
         <p class="mt-28 lg:mt-60 ml-20 capitalize text-xl lg:text-3xl text-burgundy font-semibold">- office staff -</p>
      </div>
      <ProfileCard :people="officeStaffs" />
      </div>

      <!-- mess convenor -->
      <div class="container">
      <div class="container justify-items-center">
         <p class="mt-28 lg:mt-60 ml-20 capitalize text-xl lg:text-3xl text-burgundy font-semibold">- Mess Convenor-</p>
      </div>
         <ProfileCard :people="messConvenors" />
      </div>
      
   </div>

</template>

<script>
import { wardens, prefects, officeStaffs, messConvenors } from './../data/administrationDetails.js';
export default {
   data() {
    return {
         wardens,
         prefects,
         officeStaffs,
         messConvenors
      };
   },
};
</script>
<style scoped>

</style>
