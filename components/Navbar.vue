<template>
  <div>
    <nav class="nav">
      <!-- navbar with logo and title -->
        <div class="top-header flex items-center justify-center p-2">
          <NuxtLink to="/homepage" class="nav-link">  
            <img src="logo.png" class="w-20 h-20 rounded-full mr-4">
          </NuxtLink >
        <span class="font-semibold text-2xl tracking-tight logo mx-20 text-red-50">JIRI WOMEN'S HOSTEL </span>
         <div class="top-header flex items-center justify-center p-6">
             <a href="http://www.tezu.ernet.in/"><img src="TU-logo.png" class="w-20 h-20"></a>
             
         </div>   
        </div>

      <!-- lower navbar --> 
      <div class=" sticky container bottom-header p-6">
          <ul class="flex items-center justify-center space-x-12 text-m font-inter">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">
              <a class="block mt-4 mr-4 lg:inline-block lg:mt-0  text-red-50 hover:text-red-200 active:text-black focus:text-black"> HOMEPAGE</a>
              </NuxtLink>
            </li>

            <li class="nav-item">
             <NuxtLink to="/administration" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4"> ADMINISTRATION</a>
             </NuxtLink>
            </li>

            <li class="nav-item">
             <NuxtLink to="/facilities" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4"> FACILITIES</a>
             </NuxtLink>
            </li>   
            
             <li class="nav-item">
             <NuxtLink to="/boarders" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4"> BOARDERS</a>
             </NuxtLink>
            </li>

            <li class="nav-item">
             <NuxtLink to="/gallery" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4"> GALLERY</a>
             </NuxtLink>
            </li>
            
            <li class="nav-item">
             <NuxtLink to="contact_us" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-50 hover:text-red-200 mr-4"> CONTACT</a>
             </NuxtLink>
            </li>
            
          </ul>
      </div>
    </nav>
  </div>
</template>

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

<style>
.nav{
    z-index:99;
    width:100%;
    position:fixed;
    background-color:#874356 ;
    margin-top: 0px;
    
    
}
    

.logo{
    display:inline-block;
    text-align: center;
    
}
</style>