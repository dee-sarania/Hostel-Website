<template>
  <div>
    <nav class="fixed hidden lg:block z-100 w-full lg:w-full max-h-24 md:max-h-32 bg-burgundy"
      id="top-header">
      <!-- navbar with logo and title -->
      <div
        class="top-header flex items-center justify-center space-x-20 lg:space-x-26 lg:justify-center lg:items-center">
        <NuxtLink to="/" class="nav-link">
          <img :src="`${$config.baseURL}icons/logo.png`" class="w-16 h-16 lg:w-24 lg:h-24">
        </NuxtLink>
        <p class="font-semibold text-lg lg:text-2xl tracking-normal text-white mx:16 lg:mx-28">JIRI WOMEN'S HOSTEL </p>
        <div class="top-header flex items-center justify-center p-6">
          <a href="http://www.tezu.ernet.in/"><img :src="`${$config.baseURL}icons/tulogo.png`"
              class="w-14 h-14 lg:w-20 lg:h-20"></a>

        </div>
      </div>

      <!-- lower navbar -->

      <div class="hidden lg:block z-100 md:p-6 bg-burgundy shadow-md">
        <ul
          class="flex lg:items-center lg:justify-center md:space-x-16 lg:text-m font-inter justify-between space-x-1.5">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link block mt-4 mr-4 lg:inline-block lg:mt-0 text-white hover:text-red-200">
              HOME
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink to="/administration"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
              ADMINISTRATION
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink to="/facilities"
              class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
              FACILITIES
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink to="/boarders"
              class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
              BOARDERS
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink to="/gallery"
              class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
              GALLERY
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink to="contact_us"
              class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
              CONTACT US
            </NuxtLink>
          </li>

        </ul>
      </div>
    </nav>
    <div 
    id="mobile-header" class="fixed left-0 right-0 top-0 z-100 block lg:hidden">
    <div
      class="container max-w-screen-lg px-4 pt-5 pb-5 lg:pb-2 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10 bg-burgundy">
      <div class="flex justify-between items-center">
        <!-- <div class="flex items-center"> -->
        <NuxtLink to="/" class="nav-link">
          <img :src="`${$config.baseURL}icons/logomain.jpeg`" class="w-12 h-12 lg:w-24 lg:h-24">
        </NuxtLink>
        <p class="font-semibold text-lg lg:text-2xl tracking-normal text-white mx:16 lg:mx-28">JIRI WOMEN'S HOSTEL </p>
        <!-- </div> -->
        <div class="flex items-center space-x-2 lg:hidden">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-white hover:text-black p-1 hover:bg-white box-content rounded-full" @click="toggleMenuToggle">
              <path v-if="toggleMenu" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              <path v-else fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
        </div>
      </div>
      <div class="flex flex-col space-y-4 lg:hidden" v-if="toggleMenu">
        <div class="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center pt-5">
          <NuxtLink to="/" class="nav-item">Home</NuxtLink>
          <NuxtLink to="/administration" class="nav-item">Administration</NuxtLink>
          <NuxtLink to="/facilities" class="nav-item">Facilities</NuxtLink>
          <NuxtLink to="/boarders" class="nav-item">Boarders</NuxtLink>
          <NuxtLink to="/gallery" class="nav-item">Gallery</NuxtLink>
          <NuxtLink to="/contact_us" class="nav-item">Contact Us</NuxtLink>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleMenu: false,
    }
  },
  mounted() {
    var previousScroll = 0;
    var previousScrollMobile = 0;
    var navbar = document.getElementById('top-header'),
      navClasses = navbar.classList; // classList doesn't work <IE10
    var navbarMobile = document.getElementById('mobile-header'),
      navClassesMobile = navbarMobile.classList; // classList doesn't work <IE10

    window.addEventListener('scroll', function (e) {
      var currentScroll = window.scrollY;
      var isDown = currentScroll > previousScroll;
      var isDownMobile = currentScroll > previousScrollMobile

      if (isDown && !navClasses.contains('scrolled') && currentScroll > 65) {
        // scrolling down, didn't add class yet
        navClasses.add('scrolled'); // we hide the navbar
      } else if (!isDown && currentScroll <= 65) {
        // scrolling up
        navClasses.remove('scrolled'); // won't error if no class found
      }
      
      console.log(currentScroll)
      if (isDownMobile && !navClassesMobile.contains('scrolled') && currentScroll > 0) {
        // scrolling down, didn't add class yet
        navClassesMobile.add('scrolled'); // we hide the navbar
      } else if (!isDownMobile) {
        // scrolling up
        navClassesMobile.remove('scrolled'); // won't error if no class found
      }

      // always update position
      previousScroll = currentScroll;
      previousScrollMobile = currentScroll;
    });
  },
  watch: {
    $route(to, from) {
      this.toggleMenu = false;
    }
  },
  methods: {
    toggleMenuToggle() {
      this.toggleMenu = !this.toggleMenu;
    },
  }
}
</script>

<style scoped lang="scss">
#top-header {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  /* your height */
  height: 175px;
  /* .... */
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform .4s;
  -moz-transition: -moz-transform .4s;
  -o-transition: transform .4s;
  transition: transform .4s;
}

#mobile-header{
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  /* your height */
  height: 77px;
  /* .... */
  -webkit-transition: -webkit-transform .4s;
  -moz-transition: -moz-transform .4s;
  -o-transition: transform .4s;
  transition: transform .4s;
}

.scrolled {
  /* subtract your height */
  -webkit-transform: translate3d(0, -77px, 0);
  -moz-transform: translate3d(0, -77px, 0);
  transform: translate3d(0, -77px, 0);
}

.nav-item {
  @apply text-white border-b-2 border-transparent transition-all py-2
}
</style>