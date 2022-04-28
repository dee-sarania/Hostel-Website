<template>
  <div>
    <nav class="w-full red">
        <div class="top-header flex items-center justify-center p-6">
          <NuxtLink to="/Homepage">
            <img src="logo.png" class="w-20 h-20 rounded-full mr-4">
          </NuxtLink >
        <span class="font-semibold text-2xl tracking-tight logo mr-100px">JIRI WOMEN'S HOSTEL </span>
         <div class="top-header flex items-center justify-center p-6">
             <NuxtLink to="/http://www.tezu.ernet.in/">
             <img src="TU-logo.png" class="w-14 h-14 rounded-full mr-8">
             </NuxtLink>
         </div>   
        </div>

      <div class="container bottom-header p-6">
          <ul class="flex items-center justify-center space-x-8 text-m font-inter">
            <li><a href="Homepage.vue" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> HOMEPAGE</a></li>
            <li><a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> ADMINISTRATION</a></li>
            <li><a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4" >FACILITIES</a></li>
            <li><a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> BOARDERS</a></li>
            <li><a href="gallery.vue" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> GALLERY</a></li>
            <li><a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> CONTACT US</a></li>
          </ul>
      </div>
    </nav>
    <!-- <nav class=" flex w-full red items-center justify-center">
        <div class="top-header flex items-center justify-center p-6">
          <NuxtLink to="/Homepage">
            <img src="logo.png" class="w-20 h-20 rounded-full mr-4">
          </NuxtLink >
        <span class="font-semibold text-2xl tracking-tight logo mr-100px">JIRI WOMEN'S HOSTEL </span>
        </div>

      <div class="bottom-header p-5">
          <ul class="flex items-center justify-center space-x-8 text-m font-inter ml:auto font-medium">
            <li><a href="Homepage.vue" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> HOMEPAGE</a></li>
            <li><a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> ADMINISTRATION</a></li>
            <li><a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4" >FACILITIES</a></li>
            <li><a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> BOARDERS</a></li>
            <li><a href="gallery.vue" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> GALLERY</a></li>
            <li><a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"> CONTACT US</a></li>
          </ul>
      </div>
    </nav>-->
  </div>
</template>

<style scoped>
.red{
    background-color: #ffccd2
}
.logo{
    display:inline-block;
    text-align: center;
    
}
</style>