<template>
<div>
  <div class="header-margin">
    <p class="capitalize pt-0 lg:pt-28 text-center lg:text-center text-2xl lg:text-4xl text-burgundy font-bold">- Gallery -</p>

    <div class="grid grid-cols-12 w-full gap-4 px-56 pt-20 mb-20">
      <div v-for="(p, i) in images" :key="i" :class="p.styles">
        <div class="animation">
          <img :title="p.title" :alt="p.alt" :src="p.src" />
        </div>
      </div>
    </div>
  </div>
  <div class="header-margin pb-0 lg:pb-64">
      <div class="container">
         <div>
            <p class="mt-0 lg:mt-0 justify-center text-center capitalize text-xl lg:text-3xl text-burgundy font-semibold">- Photo Credits -</p>
         </div>
         <ProfileCard :people="photo_credit" />
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
