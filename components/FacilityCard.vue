<template>
    <div>
        <div class="container p-12 grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-10">  
              <div class="lg:mx-auto mx-0 card" v-for="(fac, j ) in facility" :key="j">
                <div class="image-cover">
                  <div class="card-image">
                    <img class=" object-cover lg:w-full lg:h-64 w-full h-64" :src="`${fac.image}`">
                </div>
                </div>
                <div class="p-4">
                  <span class="font-bold text-xl text-burgundy"><h1>{{fac.title}}</h1></span>
                <p class="text-sm mt-2 text-justify text-para">{{fac.description}}</p>
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
  
  .image-cover{
    overflow: hidden;
  }
  /* .details{
    overflow: visible;
    z-index: 17;
  } */
</style>