<template>
<div class="container mb-96">
   <div>
      <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 " id="tabs-tab" role="tablist">
         <li class="nav-item" role="presentation">
            <a href="#tabs-home" class=" mt-48 nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
               id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">Home</a>
         </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
      aria-controls="tabs-profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-messages" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
      aria-controls="tabs-messages" aria-selected="false">Messages</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-contact" class="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
      aria-controls="tabs-contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="tabs-tabContent">
  <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
    Tab 1 content
  </div>
  <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
    Tab 3 content
  </div>
  <div class="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
    Tab 4 content
  </div>
</div>
     <!-- <ul class="flex items-center justify-center space-x-12 text-m font-inter">
            <li class="nav-item mt-72">
              <NuxtLink to="/" class="nav-link">
              <a class="block mt-4 mr-4 lg:inline-block lg:mt-0  text-red-500 hover:text-red-200 font-bold tracking-wide mr-4">WARDENS</a>
              </NuxtLink>
            </li>

            <li class="nav-item mt-72">
             <NuxtLink to="/prefects" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-red-200 font-bold tracking-wide mr-4">PREFECTS</a>
             </NuxtLink>
            </li>

            <li class="nav-item mt-72">
             <NuxtLink to="/mess_managers" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-red-200 font-bold tracking-wide mr-4">MESS MANAGERS</a>
             </NuxtLink>
            </li>  

            <li class="nav-item mt-72">
             <NuxtLink to="/facilities" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-red-200 font-bold tracking-wide mr-4">OFFICE STAFF</a>
             </NuxtLink>
            </li> 

            <li class="nav-item mt-72">
             <NuxtLink to="/web_masters" class="nav-link">
               <a class="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-red-200 font-bold tracking-wide mr-4">WEB MASTERS</a>
             </NuxtLink>
            </li> 
      </ul> -->
   </div>          
            

   <!-- administration informantion cards -->
   <div class=" container flex items-center justify-center space-x-10">
      <div class="transform transition duration-500 hover:scale-105">
      <div class="mt-20 max-w-sm rounded overflow-hidden shadow-lg">
         <img class="max-w-sm " src="/images/building2.jpeg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
               <div class="font-semibold text-l mb-2 text-center">insert warden's name</div>
               <p class="text-gray-700 text-base text-center">
                 
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
               </p>
            </div>
      </div>
      </div>


      <div class="container transform transition duration-500 hover:scale-105"> 
      <div class="max-w-sm mt-20 rounded overflow-hidden shadow-lg">
         <img class="max-w-sm object-fill object-center" src="/images/building2.jpeg">
            <div class="px-6 py-4">
               <div class="font-semibold text-l mb-2 text-center">insert warden's name</div>
               <p class="text-gray-700 text-base text-center">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
               </p>
            </div>
      </div>
      </div> 


      <div class="transform transition duration-500 hover:scale-105">
      <div class="max-w-sm mt-20 rounded overflow-hidden shadow-lg">
         <img class="max-w-sm" src="/images/deansbuilding.jpeg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
               <div class="font-semibold text-l mb-2 text-center">prefect name</div>
               <p class="text-gray-700 text-base text-center">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
               </p>
            </div>
      </div>
      </div>            
   </div>



 
</div>





</template>

<style>




</style>