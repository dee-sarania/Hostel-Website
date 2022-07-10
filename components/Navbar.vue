<template>
  <div>
    <nav class="fixed z-100 w-full h-32 bg-burgundy">
    <!-- navbar with logo and title -->
       <div class="top-header flex items-center justify-center space-x-26">
          <NuxtLink to="/homepage" class="nav-link">  
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