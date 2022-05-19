<template>
  <div>
    <Navbar/>
    <Nuxt/>
    
    
  </div>
</template>

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
  background-color: #fae1e1;
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
  max-width: 960px;
}
</style>