<template>
  <div class="header-margin pb-64">
    <div class="container">
    <div class="container w-full">
      <p class="mt-32 justify-center text-center capitalize text-4xl text-burgundy font-semibold">- Web Masters -</p>
    </div>
      <ContactCard :creators= "webMasters" />
  </div>
  </div>
</template>

<script>
import {webMasters} from './../data/webMasters.js';
export default {
   data() {
      return {
         webMasters
       
      };
   },
};
</script>