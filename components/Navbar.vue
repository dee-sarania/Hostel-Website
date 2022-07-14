<template>
  <div>
    <nav class="fixed z-100 w-full lg:w-full max-h-24 md:max-h-32 bg-burgundy"  id="top-header">
    <!-- navbar with logo and title -->
       <div class="top-header flex items-center justify-center space-x-20 lg:space-x-26 lg:justify-center lg:items-center" >
          <NuxtLink to="/" class="nav-link">  
            <img src="logomain.jpeg" class="w-16 h-16 lg:w-24 lg:h-24">
          </NuxtLink >
        <p class="font-semibold text-lg lg:text-2xl tracking-normal text-white mx:16 lg:mx-28">JIRI WOMEN'S HOSTEL </p>
         <div class="top-header flex items-center justify-center p-6">
             <a href="http://www.tezu.ernet.in/"><img src="tulogo.png" class="w-14 h-14 lg:w-20 lg:h-20"></a>
             
         </div>  
        </div> 

      <!-- lower navbar --> 
      
      <div class="block invisible md:visible z-100 md:p-6 bg-burgundy">
          <ul class="flex lg:items-center lg:justify-center md:space-x-16 lg:text-m font-inter justify-between space-x-1.5">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link block mt-4 mr-4 lg:inline-block lg:mt-0 text-white hover:text-red-200">
                  HOMEPAGE
              </NuxtLink>
            </li>

            <li class="nav-item">
             <NuxtLink to="/administration" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
                ADMINISTRATION
             </NuxtLink>
            </li>

            <li class="nav-item">
             <NuxtLink to="/facilities" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
               FACILITIES
             </NuxtLink>
            </li>   
            
             <li class="nav-item">
              <NuxtLink to="/boarders" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
               BOARDERS   
              </NuxtLink>
             </li>

            <li class="nav-item">
              <NuxtLink to="/gallery" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
               GALLERY         
              </NuxtLink>
            </li>
            
            <li class="nav-item">
              <NuxtLink to="contact_us" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
               CONTACT US
              </NuxtLink>
            </li>
            
          </ul>
      </div> 
      


    









    </nav>
  </div>
</template>

<script>
export default {
  mounted(){
     var previousScroll = 0;
    var navbar = document.getElementById('top-header'),
        navClasses = navbar.classList; // classList doesn't work <IE10

    window.addEventListener('scroll', function(e){
       var currentScroll = window.scrollY;
       var isDown = currentScroll > previousScroll;

       if ( isDown && !navClasses.contains('scrolled') && currentScroll > 65){
          // scrolling down, didn't add class yet
          navClasses.add('scrolled'); // we hide the navbar
       } else if ( !isDown ){
          // scrolling up
          navClasses.remove('scrolled'); // won't error if no class found
       }

       // always update position
       previousScroll = currentScroll;
    });
  },
  methods:{


  }
}
</script>

<style scoped>
#top-header {
    position: fixed;
    right: 0; left: 0; top: 0; 
    /* your height */
    height: 175px;
    /* .... */
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-transition: -webkit-transform .4s;
    -moz-transition: -moz-transform .4s;
    -o-transition: transform .4s;
    transition: transform .4s;
}
#top-header.scrolled {
    /* subtract your height */
    -webkit-transform: translate3d(0,-112px,0);
    -moz-transform: translate3d(0,-112px,0);
    transform: translate3d(0,-112px,0);
}
</style>