<template>
  <div class="pt-32 lg:pt-72 pb-64">
    <div>
      <p class="capitalize pt-0 lg:pt-28 text-center lg:text-center text-2xl lg:text-4xl text-burgundy font-bold">-
        Gallery -</p>

      <div class="container grid grid-cols-12 w-full gap-4 px-6 pt-10 md:pt-20 mb-0 preview-img-list">
        <div v-for="(p, i) in images" :key="i" class="full-width rounded preview-img-item" :class="p.styles">
          <div class="animation">
            <img @click="$photoswipe.open(i, images)" :src="`${$config.baseURL}${p.src}`" />
          </div>
        </div>
      </div>
      

     <div class="pt-32">
        <p class="text-center capitalize text-3xl text-burgundy font-semibold mb-10">- Photo Credits -</p>
        <CreditCard :src="`${$config.baseURL}images/profile/pahari_di.jpeg`" name="Pahari Khanikar" dept="Masters" branch="Masters Dept. of Mass Communication and Journalism" phone="+91 9876542413" email="mcm21018@tezu.ernet.in" />
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
          src: "images/IMG_20230902_201812899.jpg",
          styles: "w3",
           w: 1024,
          h: 768
        },
        {
          src: "images/IMG-20230209-WA0030.jpg",
          styles: "w3",
           w: 1024,
          h: 768

        },
        {
          src: "images/IMG-20230205-WA0025.jpg",
          styles: "w3",
           w: 1024,
          h: 768
        },
        {
          src: "images/PXL_20230507_132613245.NIGHT.jpg",
          styles: "w3",
           w: 1024,
          h: 768
        },
        {
          src: "images/IMG_20230902_215600746.jpg",
          styles: "w2",
           w: 1024,
          h: 768
        },
        {
          src: "images/IMG-20230209-WA0010.jpg",
          styles: "w4",
           w: 1024,
          h: 768
        },
        {
          src: "images/inauguration.jpeg",
          styles: "w4",
           w: 1024,
          h: 768
        },
        {
          src: "images/IMG-20230211-WA0047.jpg",
          styles: "w4",
           w: 1024,
          h: 768
        },
        {
          src: "images/diwali1.jpg",
          styles: "w4",
           w: 1024,
          h: 768
        },
        {
          src: "images/IMG_20230902_194814935.jpg",
          styles: "w2 h2",
           w: 1024,
          h: 768
        },
          {
          src: "images/IMG_5686.JPG ",
          styles: "w-4-2",
           w: 1024,
          h: 768
        },
          {
          src: "images/freshers1.jpeg",
          styles: "w4",
           w: 1024,
          h: 768
        },
        {
          src: "images/_AIF1962.jpg",
          styles: "w4",
           w: 1024,
          h: 768
        },
        {
        src: "images/IMG-20230206-WA0028.jpg",
          styles: "w2",
           w: 1024,
          h: 768
        },
        {
          src: "images/inauguration2.jpg",
          styles: "w3",
           w: 1024,
          h: 768
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

.full-width{
  @media screen and (max-width: 800px) {
    grid-column: span 12 / span 12 !important;
  }
}

.card-shadow {
   box-shadow: 0 40px 20px -5px rgb(175 13 13 / 10%), 0 40px 20px -5px rgb(135 67 86 / 0%)
}
</style>
