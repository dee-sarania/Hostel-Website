<template>
  <div class="header-margin pb-64">
    <div>
    <div class="container w-auto">
      <p class="mt-32 justify-center text-center capitalize text-4xl text-burgundy font-semibold">- Web Team -</p>
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