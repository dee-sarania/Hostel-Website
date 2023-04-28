<template>
  <div>
<div class="flex lg:pt-12 border-b border-burgundy ">
  <button class="mr-1 pr-2">
    <NuxtLink to="administration/" class="inline-block py-2 pr-2 text-para lg:text-2xl :text-burgundy  border-b-2 border-transparent hover:border-burgundy focus:border-burgundy font-semibold z-10">Current</NuxtLink>
  </button>
  <button @click="isOpen = !isOpen" class="mr-1">
    <a class="inline-block py-2 px-8 text-gray-500 lg:text-2xl border-b-2 border-transparent font-semibold focus:border-burgundy z-10">Previous</a>
  </button>
  </div>
  <div v-if="isOpen" class="absolute block z-10 w-32 h-10 ml-48 py-2 text-center rounded-md card-shadow hover:bg-gray-50">
    <NuxtLink to="prev_admin/" class=" text-burgundy font-semibold ">2022-2023</NuxtLink>
  </div>
    
</div>
</template>

<script>
export default{
  data(){
    return{
      isOpen:false
    }
  },

//created(){
//  const handleEscape = (e) => {
  //  if (e.key==='Esc' || e.key=== 'Escape'){
  //    this.isOpen=false
  //  }
 // }

 // document.addEventListener('keydown', handleEscape)
  //this.$once('hook:beforeDestroy', () => {
   // document.removeEventListener('keydown',handleEscape)

//  })
//}
}


</script>

<style scoped>
.card-shadow {
        box-shadow: 4px 4px 26px -2px rgb(175 13 13 / 16%), 4px 4px 26px -2px rgb(135 67 86 / 0%)
    }
</style>

