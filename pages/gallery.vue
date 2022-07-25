<template>
<div>
  <div class="header-margin">
    <p class="capitalize pt-0 lg:pt-28 text-center lg:text-center text-2xl lg:text-4xl text-burgundy font-bold">- Gallery -</p>

    <div class="grid grid-cols-12 w-full gap-4 px-56 pt-20 mb-0">
      <div v-for="(p, i) in images" :key="i" :class="p.styles">
        <div class="animation">
          <img :title="p.title" :alt="p.alt" :src="p.src" />
        </div>
      </div>
    </div>
  </div>
  
    <div>
      <div class="container py-60 px-16">
        <p class="justify-center text-center capitalize text-3xl text-burgundy font-semibold mb-10">- Photo Credits -</p>
        <div class="bg-burgundy ml-36 rounded-tr-lg rounded-br-lg rounded-bl-lg card-shadow max-w-xs w-full lg:max-w-3xl lg:flex lg:h-80 transform transition duration-500 hover:scale-105">
          <div class="h-auto w-72 overflow-hidden" >
            <img src="/images/profile/pahari_di.jpeg" class="rounded-bl-lg rounded-tl-lg object-cover object-center">
          </div>
          <div class="ml-10 mt-5 p-4">
            <div>
              <h1 class="mt-10 text-xl font-bold text-white mb-2"> Pahari Khanikar </h1>
              <p class="text-white text-md mb-2">Masters <br> Dept. of Mass Communication and Journalism </p>&nbsp;
              <p class="text-white text-md mb-2"><span class="font-bold">Phone no:</span>+91 9876542413 <br>
              <span class="font-bold">Email:</span> mcm21018@tezu.ernet.in </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>


</template>

<script>
import { photo_credit } from './../data/GalleryDetails.js';
export default {
  data() {
    return {
      images: [
        {
          src: "/images/inauguration3.jpg",
          title: "inauguration",
          styles: "w3"
        },
        {
          src: "/images/freshers3.jpeg",
          title: "Test Image",
          styles: "w3"
        },
        {
          src: "/images/inauguration1.jpg",
          title: "Test Image",
          styles: "w3"
        },
        {
          src: "/images/inauguration2.jpg",
          title: "Test Image",
          styles: "w3"
        },
        {
          src: "/images/event1.jpg",
          title: "Test Image",
          styles: "w2"
        },
        {
          src: "/images/inauguration7.JPG",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "/images/freshers2.jpeg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "/images/inauguration5.jpeg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "/images/inauguration13.jpeg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "/images/freshers1.jpeg",
          title: "Test Image",
          styles: "w2 h2"
        },
          {
          src: "/images/inauguration.jpeg",
          title: "Test Image",
          styles: "w-4-2"
        },
          {
          src: "/images/freshers4.jpg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "/images/inauguration4.jpeg",
          title: "Test Image",
          styles: "w4"
        },
      ],
      photo_credit
    };
  },
};
</script>


<style lang="scss" scoped>
.animation{
  @apply transform transition duration-700 hover:scale-110 cursor-pointer h-full w-full;
}
.w2 {
  @apply col-span-8 h-72 overflow-hidden
}

.w-4-2 {
  @apply col-span-6 h-72 overflow-hidden
}

.w3 {
  @apply col-span-4 h-72 overflow-hidden
}

.w4 {
  @apply col-span-3 h-72 overflow-hidden
}

.h2{
  @apply row-span-2 h-520 col-span-6 overflow-hidden;
}

img{
  @apply h-full w-full object-cover
}

.card-shadow {
   box-shadow: 0 40px 20px -5px rgb(175 13 13 / 10%), 0 40px 20px -5px rgb(135 67 86 / 0%)
}
</style>
