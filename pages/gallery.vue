<template>
  <div class="header-margin">
    <p class="capitalize pt-0 lg:pt-28 text-center lg:text-center text-2xl lg:text-4xl text-burgundy font-bold">-
      Gallery -</p>

    <div class="grid grid-cols-12 w-full gap-4 px-56 pt-20">
      <div v-for="(p, i) in images" :key="i" :class="p.styles">
        <div class="animation">
          <img :title="p.title" :alt="p.alt" :src="p.src" />
        </div>
      </div>
    </div>

    <div class="px-56 pt-20 grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-4">
      <div class="overflow-hidden">
        <div class=" h-64 bg-burgundy transform transition duration-700 hover:scale-110"><img src="\caro4.jpg"></div>
      </div>
      <div class="overflow-hidden">
        <div class=" bg-burgundy h-64 transition transform duration-700 hover:scale-110"><img
            class="h-64 w-full object-cover object-center" src="\WhatsApp Image 2022-05-01 at 11.34.36 AM.jpeg"></div>
      </div>
      <div class="overflow-hidden">
        <div class=" bg-burgundy h-64 transform transition duration-700 hover:scale-110"><img
            class="h-64 w-full object-cover object-center" src="\caro1.jpg"></div>
      </div>
      <div class="overflow-hidden">
        <div class=" bg-burgundy h-64 transform transition duration-700 hover:scale-110"><img
            class="h-64 w-full object-cover object-center" src="\caro2.jpg"></div>
      </div>
      <div class="bg-blue-500 h-64 col-span-2 row-span-1"><img class="container h-64 w-full object-cover object-center"
          src="\IMG-20220313-WA0004 - Priya Seram.jpg"></div>
    </div>

    <div class="px-56 pt-4 mb-20 grid grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4">
      <div class="overflow-hidden">
        <div class="bg-blue-500 h-64 transform transition duration-700 hover:scale-110"><img
            class="h-64 object-cover object-center" src="\bihu.jpeg"></div>
      </div>
      <div class="overflow-hidden">
        <div class="bg-blue-500 h-64 transform transition duration-700 hover:scale-110"><img
            class="h-64 object-cover object-center" src="\hostelview.jpeg"> </div>
      </div>

      <div class="overflow-hidden">
        <div class="bg-blue-500 h-64 transform transition duration-700 hover:scale-110"><img
            class="h-64 object-cover object-center" src="\images\photo.jpg"></div>
      </div>
      <div class="overflow-hidden">
        <div class="bg-blue-500 h-64 transform transition duration-700 hover:scale-110"><img
            class="h-64 object-cover object-center" src="\C8B98281-BB9C-47DA-B083-8C181419AD1A - Priya Seram.jpeg">
        </div>
      </div>
      <div class="bg-blue-500 h-64 col-span-2 row-span-2 transform transition duration-700 hover:scale-110"><img
          class="object-cover object-center" src="\WhatsApp Image 2022-07-10 at 2.46.02 PM.jpeg"></div>
      <div class="bg-blue-500 h-64 col-span-2 row-span-1 transform transition duration-700 hover:scale-110"><img
          class="container h-64 w-full object-cover object-center" src="\IMG_5745 - Anamika Mohari.JPG"></div>
      <div class="overflow-hidden">
        <div class="bg-blue-500 h-64 transform transition duration-700 hover:scale-110"><img
            class="h-64 object-cover object-center" src="\corridor.jpg"></div>
      </div>
      <div class="overflow-hidden">
        <div class="bg-blue-500 h-64 transform transition duration-700 hover:scale-110"><img
            class="h-64 object-cover object-center" src="\dark.jpg"></div>
      </div>
    </div>
  </div>




</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w3"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w3"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w3"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w3"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w2"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w2 h2"
        },
          {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w-4-2"
        },
          {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w4"
        },
        {
          src: "corridor.jpg",
          title: "Test Image",
          styles: "w4"
        },
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.animation{
  @apply transform transition duration-700 hover:scale-110 cursor-pointer h-full w-full;
}
.w2 {
  @apply col-span-8 h-64 overflow-hidden
}

.w-4-2 {
  @apply col-span-6 h-64 overflow-hidden
}

.w3 {
  @apply col-span-4 h-64 overflow-hidden
}

.w4 {
  @apply col-span-3 h-64 overflow-hidden
}

.h2{
  @apply row-span-2 h-full col-span-6 overflow-hidden;
}

img{
  @apply h-full w-full object-cover
}
</style>