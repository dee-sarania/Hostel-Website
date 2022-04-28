<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    ddsds {{show}}
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data(){
    return{
      show: false,
      variable: '',
      array: [
        1, 3, 4, 5, 6, 7, 8, 9, 10
      ],
      object: {}
    }
  },
  mounted(){
    this.show = true
    this.close()
  },
  methods: {
    close(){
      this.show = false
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}
</style>