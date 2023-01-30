<template>
    <div class="pt-32 lg:pt-72 pb-64">
      <div class="container">
        <div class="container justify-center items-center"> 
          <h1 class="px-8 lg:text-left text-center text-4xl text-burgundy font-bold capitalize">facilities</h1>
          <p class="mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - Rooms -</p>
        </div>
    
        <FacilityCard :facility="rooms" />
      </div>

      <div class="container">
        <p class="mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - Kitchen & Mess -</p>
        <FacilityCard :facility="mess" />
      </div>

      <div class="container">
        <p class="mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - Washing & Bathroom -</p>
        <FacilityCard :facility="wash" />
      </div>

      <div class="container">
        <p class="mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - General -</p>
        <FacilityCard :facility="gen" />
      </div>
       <div class="pt-16">
        <p class="text-center capitalize text-3xl text-burgundy font-semibold mb-10">- Content Writer -</p>
        <CreditCard :src="`${$config.baseURL}images/profile/imranak.jpeg`" name="Imrana Khan" dept="B.Tech" branch="Dept. of Electronics and Communication Engg. " phone="+91 9876542413" email="mcm21018@tezu.ernet.in" />
      </div>
    </div>

</template>

<style scoped>
.card-shadow {
   box-shadow: 0 40px 20px -5px rgb(175 13 13 / 10%), 0 40px 20px -5px rgb(135 67 86 / 0%)
}
</style>

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
