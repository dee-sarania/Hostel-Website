<template>
<div class="bg-light_pink">
    <!-- main photo with the title card saying "welcome...." -->
    <div class=" flex mt-30 items-center justify-center">
     <img src="hostel4.jpg" class=" flex w-full max-h-580 opacity-75 mt-48 mb-70 object-cover object-center ">
     <div class="absolute w-full max-h-580 top-48 right-0 bottom-0 left-0 overflow-hidden bg-fixed bg-black opacity-20"></div>
      <div class="flex items-center justify-center title_card">
        <h6 class="uppercase font-bold"> Welcome to the official website of Jiri Women's Hostel</h6>
      </div>
    </div>

    <!-- about Jiri element -->
    <div class="w-full h-96 mt-20 mb-10">
        <div class="container py-4 justify-left text-burgundy text-2xl tracking-wide font-bold underline"> <h1> ABOUT JIRI </h1></div>
        <div class="container flex px-18 py-2 space-x-32">
            <img src="/images/building2.jpeg" class="mb-4 flex max-w-sm max-h-sm object-cover object-center justify-left opacity-90 transform transition duration-500 hover:scale-105">
            <p class="w-1/2 text-justify text-burgundy text-lg font-semibold tracking-wide"> Jiri Women's Hostel is named after tributary 'Jiri' of the Barak river of Assam and originates from Boro Ninglo area of Dima Hasao district. <br>Jiri Women's Hostel was inaugurated on 26th May 2022 by Dr. Vinod Kumar Jain, Vice Chancellor of Tezpur University. Recently built, Jiri Women's Hostel has excellent infrastructure and accomodates more than 200 boarders. LOREM IPSUM DOLOR IT QWERTY SKKNDOSKXNLASKXMAL
            </p>   
            
        </div>
    </div> 

    <!-- facilities component -->
    <div class="bg-burgundy w-full h-96 mt-48 mb-78 py-4">
        <NuxtLink to="/facilities" class="nav-link"><div class=" py-4 text-red-500 text-2xl tracking-wide font-bold text-center text-light_pink underline">FACILITIES</div> </NuxtLink> <!-- clicking will lead to facilities page -->
        <div class="container flex py-6 space-x-8 item-center justify-center"></div>
         <!--   <div class="h-48 w-48 transform transition duration-500 hover:scale-105"> <img src="/icons/power.png"> <p class="text-center txt font-semibold"> 24x7 (not) power supply </p></div>
            <div class="h-48 w-48 transform transition duration-500 hover:scale-105"><img src="/icons/room.png"><p class="text-center txt font-semibold ">well furnished rooms</p></div>
            <div class="h-48 w-48 transform transition duration-500 hover:scale-105"><img src="/icons/wifi.png"><p class="text-center txt font-semibold"> average wifi connection</p></div>
            <div class="h-48 w-48 transform transition duration-500 hover:scale-105"><img src="/icons/food.png"><p class="text-center txt font-semibold">good food good life</p></div>
        -->
    </div>    

    <!-- Gallery in homepage -->
    
    <div class="mt-24 mb-24">
        <div class="container text-center text-burgundy text-2xl tracking-wide underline font-bold"> <NuxtLink to="/gallery" class="nav-link"> GALLERY</NuxtLink> </div> 
        <div class="container px-12 py-6 grid  grid-flow-row-dense grid-cols-3 grid-rows-3 gap-6">
        <div class="mt-10">
          <img class="object-cover w-full h-full" src="/images/building.jpeg" >
        </div>
        <div class="mt-10">
         <img class="object-cover w-full h-full" src="/images/building2.jpeg" >
        </div>
        <div class="mt-10">
         <img class="object-cover w-full h-full" src="/images/corridor.jpeg" >
        </div>
        <div>
         <img class="object-cover w-full h-full" src="/images/deansbuilding.jpeg" >
        </div>
        <div class="">
         <img class="object-cover w-full h-full" src="/images/jobhimain.jpeg" >
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="/images/building.jpeg" >
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="/images/building2.jpeg" >
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="/images/building2.jpeg" >
        </div>
          <div class="">
         <img class="object-cover w-full h-full" src="/images/jobhimain.jpeg" >
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="/images/building.jpeg" >
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="/images/building2.jpeg" >
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="images/building2.jpeg" >
        </div>
    </div>  
    </div>
    
</div>
      
</template>




<style scoped>

   
    












   
    


.title_card{
    position:absolute;
    padding:250px ;
    top:20px;
    left:0;
    right:0;
    bottom:10px;
    color:azure;
    font-size: 50px;
    text-align:center;
}    

    


</style>