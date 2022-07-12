<template>
  <div>
    <nav class="fixed z-100 w-full h-32 bg-burgundy"  id="top-header">
    <!-- navbar with logo and title -->
       <div class="top-header flex items-center justify-center space-x-26">
          <NuxtLink to="/" class="nav-link">  
            <img src="logomain.jpeg" class="w-24 h-24">
          </NuxtLink >
        <p class="font-semibold text-2xl tracking-normal text-red-50 logo mx-28">JIRI WOMEN'S HOSTEL </p>
         <div class="top-header flex items-center justify-center p-6">
             <a href="http://www.tezu.ernet.in/"><img src="tulogo.png" class="w-20 h-20"></a>
             
         </div>  
        </div> 

      <!-- lower navbar --> 
      
      <div class="z-100 p-6 bg-burgundy">
          <ul class="flex items-center justify-center space-x-16 text-m font-inter">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link block mt-4 mr-4 lg:inline-block lg:mt-0 text-white hover:text-red-200">
                  HOMEPAGE
              </NuxtLink>
            </li>

            <li class="nav-item">
             <NuxtLink to="/administration" class="block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4">
                ADMINISTRATION
             </NuxtLink>
            </li>

            <li class="nav-item">
             <NuxtLink to="/facilities" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4">
               FACILITIES
             </NuxtLink>
            </li>   
            
             <li class="nav-item">
              <NuxtLink to="/boarders" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4">
               BOARDERS   
              </NuxtLink>
             </li>

            <li class="nav-item">
              <NuxtLink to="/gallery" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4">
               GALLERY         
              </NuxtLink>
            </li>
            
            <li class="nav-item">
              <NuxtLink to="contact_us" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4">
               CONTACT
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

<!--<script>
       export default{
         data(){
           return{
             isVisble: false
           };
           };
         };
         methods:{
           toggleVisibilty(){
             this.isVisble= !this.isVisble;
           }
         }
       
    </script> -->
<!--
<style>
.nav{
    z-index:99;
    width:100%;
    height: 128px;
    position:fixed;
    background-color:#874356;
    margin-top: 0px;
    
    
}
    

.logo{
    display:inline-block;
    text-align: center;
    
}
</style> -->

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
    -webkit-transition: -webkit-transform .3s;
    -moz-transition: -moz-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
}
#top-header.scrolled {
    /* subtract your height */
    -webkit-transform: translate3d(0,-112px,0);
    -moz-transform: translate3d(0,-112px,0);
    transform: translate3d(0,-112px,0);
}
</style>