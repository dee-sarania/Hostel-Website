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
  <div class="header-margin pb-64">
    <div>
      <div class="container w-auto">
        <p class="m-0 justify-center text-center capitalize text-3xl text-burgundy font-semibold mb-7">- Photo Credits -</p>
        <div class="rounded-tr-3xl rounded-bl-full max-w-sm w-full lg:max-w-full lg:flex lg:h-80 transform transition duration-500 hover:scale-105" style="box-shadow: 0 40px 25px -5px rgb(175 13 13 / 16%), 0 40px 25px -5px rgb(135 67 86 / 0%); border-radius: 15px 50px;">
          <div class="h-13 lg:h-auto lg:w-50 flex-none bg-cover rounded-t lg:rounded-t lg:rounded-l text-center overflow-hidden" >
            <img src="/images/profile/pahari_di.jpeg" style="border-radius-bottom-left: 50px;">
          </div>
          <div class="ml-20 w-45 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="mt-10 text-2xl font-bold text-burgundy flex items-center mb-2"> Pahari Khanikar </p>
              <p class="text-burgundy text-xl mb-2">Masters</p>
              <p class="text-burgundy text-xl mb-2">Dept. of Mass Communication and Journalism</p>
              <p class="text-burgundy text-xl mb-2"><span class="font-bold">Phone no:</span> +91 9876542413</p>
              <p class="text-burgundy text-xl mb-2"><span class="font-bold">Email:</span> mcm21018@tezu.ernet.in</p>
            </div>
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
</style>
