<template>
     <div class="container pb-10 px-6">
        <div class="mx-auto flex justify-center">
        <div class="bg-burgundy rounded-tr-lg rounded-br-lg rounded-bl-lg card-shadow max-w-xs w-full lg:max-w-3xl lg:flex lg:h-80 transform transition duration-500 hover:scale-105">
          <div class="h-auto w-full lg:w-72 overflow-hidden" >
            <img :src="src" class="h-full object-cover object-center">
          </div>
            <div class="flex flex-col justify-center mx-6 md:mx-10 my-5">
              <h1 class="text-xl font-bold text-white mb-2">{{name}}</h1>
              <p class="text-white text-md mb-2">{{dept}}<br>{{branch}}</p>
              <p class="text-white text-md mb-2"><span class="font-bold">Phone no:</span>{{phone}}<br>
              <span class="font-bold">Email:</span> {{email}}</p>
            </div>
        </div>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    dept: {
      required: true,
      type: String
    },
    branch: {
      required: true,
      type: String
    },
    phone: {
      required: true,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    src:{
      required: true,
      type: String
    }
  }
}
</script>