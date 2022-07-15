<template>
    <div>
        <div class="container p-12 grid grid-cols-3 grid-rows-1 gap-10">  
              <div class="mx-auto card" v-for="(fac, j ) in facility" :key="j">
                <div class="image-cover">
                  <div class="card-image">
                    <img class="w-full h-64 object-cover " :src="`${fac.image}`">
                </div>
                </div>
                <div class="p-4">
                  <span class="font-bold text-xl text-burgundy"><h1>{{fac.title}}</h1></span>
                <p class="text-sm mt-2 text-para">{{fac.description}}</p>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        facility: {
            required: true,
            type: Array
        }
    }
}


</script>

<style scoped>
 .card:hover > .image-cover > .card-image{
  transition: 1.5s;
    transform: scale(1.35);
  }
  .card > .image-cover > .card-image{

 transition: 1.5s;
    transform: scale(1);
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