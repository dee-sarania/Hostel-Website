<template>
<div class="bg">
    <!-- main photo with the title card saying "welcome...." -->
    <div class=" flex mt-50 items-center justify-center">
     <img src="hostel2.jpg" class=" flex imag opacity-75 mb-70 object-cover object-center ">
      <div class="flex items-center justify-center title_card" >
        <h6 class="uppercase font-bold"> Welcome to the official website of Jiri Women's Hostel</h6>
      </div>
    </div>

    <!-- about Jiri element -->
    <div class="bg1 w-full h-96 mt-5 mb-10">
        <div class="container py-4 text-center text-white text-2xl tracking-wide font-bold "> <h1> ABOUT JIRI </h1></div>
        <div class="container flex px-18 py-2 space-x-32 items-center justify-center text-white tracking-wide">
            <p> Jiri Women's hostel was created on ######## it houses more than 600 students of Tezpur university Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>   
            <img src="photo.jpg" class="mb-4 flex max-w-sm max-h-sm object-cover object-center justify-right">
        </div>
    </div>  

    <!-- facilities component -->
    <div class="w-full h-96 mb-78">
        <NuxtLink to="/facilities" class="nav-link"><div class=" py-4 text-red-500 text-2xl tracking-wide font-bold text-center hover:text-red-100 txt_color"><a>FACILITIES </a> </div> </NuxtLink> <!-- clicking will lead to facilities page -->
        <div class="container flex py-6  space-x-20 item-center justify-center">
            <div class="h-15 w-15 transform transition duration-500 hover:scale-105"> <img src="power.png"> <p class="text-center txt_color font-semibold"> 24x7 (not) power supply </p></div>
            <div class="h-15 w-15 transform transition duration-500 hover:scale-105"><img src="room.png"><p class="text-center txt_color font-semibold ">well furnished rooms</p></div>
            <div class="h-15 w-15 transform transition duration-500 hover:scale-105"><img src="wifi.png"><p class="text-center txt_color font-semibold"> average wifi connection</p></div>
            <div class="h-15 w-15 transform transition duration-500 hover:scale-105"><img src="food.png"><p class="text-center txt_color font-semibold">good food good life</p></div>
        </div>
    </div>    

    <!-- Gallery in homepage -->
    <div class=" mt-24 mb-24">
        <div class="container text-center text-2xl tracking-wide font-bold txt_color"> <NuxtLink to="/gallery" class="nav-link">  <a> GALLERY </a> </NuxtLink> </div> 
        <div class="container px-12 py-6 grid  grid-flow-row-dense grid-cols-3 grid-rows-3 gap-6">
        <div class="mt-10">
          <img class="object-cover w-full h-full" src="building.jpeg" />
        </div>
        <div class="mt-10">
         <img class="object-cover w-full h-full" src="building2.jpeg" />
        </div>
        <div class="mt-10">
         <img class="object-cover w-full h-full" src="corridor.jpeg" />
        </div>
        <div>
         <img class="object-cover w-full h-full" src="deansbuilding.jpeg" />
        </div>
        <div class="">
         <img class="object-cover w-full h-full" src="jobhimain.jpeg" />
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="building.jpeg" />
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="building2.jpeg" />
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="building2.jpeg" />
        </div>
          <div class="">
         <img class="object-cover w-full h-full" src="jobhimain.jpeg" />
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="building.jpeg" />
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="building2.jpeg" />
        </div>
        <div class="mt-20">
         <img class="object-cover w-full h-full" src="building2.jpeg" />
        </div>
    </div>  
    </div>
</div>
    



        

    
    
    
    
   



</div>        
      
</template>




<style scoped>

   
    



.imag{
    max-width: auto;
    max-height: auto;
    width: 100%;
    height:450px;
    padding: 0px 0px 0px 0px;
    margin-top: 190px;
}

.about{
    padding: 10px 10px 10px 10px;
    margin-top: 100 px;
    background-color: #ffccd2 ;
}   

.bg{
    background-color:#fae1e1;
}

.bg1{
    background-color: #874356;
}

.txt_color{
    color: #874356;

    
}




   
    


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