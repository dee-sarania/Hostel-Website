<template>
  <div>
    <div class="text-red-500">{{counter}}</div>
    <div class="bg-red-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
    @click="increment"
    >Click me</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data(){
    return{
      counter: 0
    }
  },
  methods:{
    increment(){
      this.counter++
    },
    goNext(){
      this.$router.push('/about')
    }
  }

})
</script>

<style scoped>

</style>