<template>
    <div class="header-margin mb-60">
      <div class="container">
      <div class="container justify-center items-center"> 
        <h1 class=" mt-20 px-8 text-left text-4xl text-burgundy font-bold capitalize">facilities</h1>
        <p class=" mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - Rooms -</p>
      </div>
  
      <FacilityCard :facility="rooms" />
      </div>

    <div class="container">
    <p class=" mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - Kitchen & Mess -</p>
    <FacilityCard :facility="mess" />
    </div>

    <div class="container">
    <p class=" mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - Washing & Bathroom -</p>
    <FacilityCard :facility="wash" />
    </div>

    <div class="container">
    <p class=" mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - General -</p>
    <FacilityCard :facility="gen" />
    </div>

    </div>

</template>

<script>
import {rooms,mess,wash,gen} from './../data/faciltyList.js'
export default {
  data()
  {
    return {
      rooms,
      mess,
      wash,
      gen
    }
  }
}
</script>