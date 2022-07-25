<template>
  <div>
    <div class="header-margin mb-0 pb-0">
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

    <div>
      <div class="container py-60 px-16">
        
        <div class="bg-burgundy ml-36 rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-lg card-shadow max-w-xs w-full lg:max-w-3xl lg:flex lg:h-80 transform transition duration-500 hover:scale-105">
          <div class="h-auto w-72 overflow-hidden" >
            <img src="/images/profile/imranak.jpeg" class="h-80 rounded-bl-lg rounded-tl-lg object-cover object-center">
          </div>
          <div class="mt-8 p-6">
            <div>
              <p class="text-white text-md mb-2 font-bold uppercase">- Content Writer -</p>
              <h1 class="mt-5 text-xl font-bold text-white mb-2"> Imrana Khan</h1>
              <p class="text-white text-md mb-2">B.Tech <br> Dept. of Electronics and Communication Engg. </p>&nbsp;
              <p class="text-white text-md mb-2"><span class="font-bold">Phone no: </span>+91 9876542413 <br>
              <span class="font-bold">Email:</span> ecb21086@tezu.ernet.in </p>
            </div>
          </div>
        </div>
      </div>
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
