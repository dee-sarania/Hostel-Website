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
    <div class="header-margin pb-64">
      <div>
        <div class="container w-auto">
          <p class="m-0 justify-center text-center capitalize text-3xl text-burgundy font-semibold mb-7">- Database Management -</p>
          <div class="rounded-tr-3xl rounded-bl-full max-w-sm w-full lg:max-w-full lg:flex lg:h-80 transform transition duration-500 hover:scale-105" style="box-shadow: 0 40px 25px -5px rgb(175 13 13 / 16%), 0 40px 25px -5px rgb(135 67 86 / 0%); border-radius: 15px 50px;">
            <div class="h-26 lg:h-auto lg:w-50 flex-none bg-cover rounded-t lg:rounded-t lg:rounded-l text-center overflow-hidden" >
              <img src="/images/profile/noimage.jpeg" class="h-auto w-72">
            </div>
            <div class="ml-20 w-45 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="mt-10 text-2xl font-bold text-burgundy flex items-center mb-2"> Imrana Khan </p>
                <p class="text-burgundy text-xl mb-2"> B.Tech </p>
                <p class="text-burgundy text-xl mb-2">Dept. of Electronics and Communication Engineering</p>
                <p class="text-burgundy text-xl mb-2"><span class="font-bold">Phone no:</span> +91 9876542413</p>
                <p class="text-burgundy text-xl mb-2"><span class="font-bold">Email:</span> ecb21086@tezu.ernet.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
