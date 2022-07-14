<template>
  <div>
    <Navbar v-if="renderPage" />
    <Sidebar />
    <Nuxt />
    <Footer v-if="renderPage" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      blockedPages: ["error", null]
    }
  },
  computed: {
    renderPage() {
      return !(this.blockedPages.includes(this.$route.name))
    }
  },
  methods: {

  }
}
</script>

<style>
html {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: #ffffff;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
}

.container {
  @apply w-full relative mx-auto;
  max-width: 1024px;
}

.header-margin {
  padding-top: 175px;
}


</style>