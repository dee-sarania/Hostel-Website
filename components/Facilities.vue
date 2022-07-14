<template>
  <div class="header-margin mb-60">
      <div class="container justify-center items-center"> 
        <h1 class=" mt-20 px-8 text-left text-4xl text-burgundy font-bold capitalize">facilities</h1>
        <p class=" mt-16 text-center justify-center text-3xl text-burgundy font-semibold"> - Rooms -</p>
          <div class="container p-12 grid grid-cols-3 grid-rows-1 gap-10">  
              <div class="mx-auto card" v-for="room in rooms" :key="room.title">
                <div class="image-cover">
                  <div class="card-image  ">
                    <img class=" " src="/images/building2.jpeg">
                </div>
                </div>
                <div class="p-4">
                  <span class="font-bold text-xl"><h1>{{room.title}}</h1></span>
                <p class="text-sm ">{{room.description}}</p>
                </div>
              </div>
              
               <!-- <div class="mx-auto card ">
                <div class="image-cover">
                  <div class="card-image  ">
                    <img class=" " src="/images/building2.jpeg">
                </div>
                </div>
                <div class="p-4">
                  <span class="font-bold text-xl"><h1>Pantry</h1></span>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium animi mollitia doloremque facilis, amet doloribus odio architecto endis ipsam accusamus quis?</p>
                </div>
              </div>

                <div class="mx-auto card ">
                <div class="image-cover">
                  <div class="card-image  ">
                    <img class=" " src="/images/corridor.jpeg">
                </div>
                </div>
                <div class="p-4">
                  <span class="font-bold text-xl"><h1>Boarder's room</h1></span>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium animi mollitia doloremque facilis, amet doloribus odio architecto endis ipsam accusamus quis?</p>
                </div>
              </div> -->
          </div>
          
      </div>
  </div>

</template>

<script>
import {rooms} from './../data/rooms'
export default {
  data()
  {
    return {
      rooms
    }
  }
}
</script>

<style scoped>
 .card:hover > .image-cover > .card-image{
  transition: 1.5s;
    transform: scale(1.35);
  }
  .card{
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;


  }
  .card:hover{
    box-shadow: 0 0 15px -2px #874356;
  }
  .image-cover{
    overflow: hidden;
  }
  /* .details{
    overflow: visible;
    z-index: 17;
  } */
</style>
    <!--
      <div class="container justify-center items-center"> 
      <h1 class=" mt-20 px-8 text-left text-4xl text-burgundy font-bold capitalize">facilities</h1>
      <p class=" mt-20 text-center justify-center text-3xl text-burgundy font-semibold"> - Rooms -</p>

      <div class="container p-8 grid grid-cols-3 grid-rows-1 gap-6">  
        <div class="mx-auto transform transition duration-500 hover:scale-110  ">
          <img class="object-cover w-full h-full hover:backdrop-opacity-60 " src="/images/building.jpeg">
        </div>
        <div class="transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full hover:blur-lg" src="/images/building2.jpeg" >
        </div>
        <div class="transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full" src="/images/corridor.jpeg">
        </div>
      </div>
      </div>


      <p class=" mt-20 text-center justify-center text-3xl text-burgundy font-semibold"> - Kitchen & Mess -</p>

      <div class="container p-8 grid grid-cols-3 grid-rows-1 gap-6">  
        <div class="mx-auto transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full hover:backdrop-opacity-60 " src="/images/building.jpeg">
        </div>
        <div class="transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full hover:blur-lg" src="/images/building2.jpeg">
        </div>
        <div class="transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full" src="/images/corridor.jpeg">
        </div>
      </div>
      </div>
 yeh wala section add karne se error aa raha hai ki only one root element should be there under template tag
       <p class=" mt-20 text-center justify-center text-3xl text-burgundy font-semibold"> - Washing & Bathroom -</p>

      <div class="container p-8 grid grid-cols-3 grid-rows-1 gap-6">  
        <div class="mx-auto transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full hover:backdrop-opacity-60 " src="/images/building.jpeg">
        </div>
        <div class="transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full hover:blur-lg" src="/images/building2.jpeg">
        </div>
        <div class="transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full" src="/images/corridor.jpeg">
        </div>
      </div>
      </div>

 </div>
</template>
      
      <p class=" mt-20 text-center justify-center text-3xl text-burgundy font-semibold"> - General -</p>
     
      <div class="container p-8 grid grid-cols-3 grid-rows-1 gap-6">  
        <div class="mx-auto transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full hover:backdrop-opacity-60 " src="/images/building.jpeg">
        </div>
        <div class="transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full hover:blur-lg" src="/images/building2.jpeg" >
        </div>
        <div class="transform transition duration-500 hover:scale-110">
          <img class="object-cover w-full h-full" src="/images/corridor.jpeg">
        </div>
      </div> -->
    
    
    



      
    
    
