<template>
    <div class="container w-1/2 h-96">
     <img class="container flex justify-center" :src="`${$config.baseURL}icons/3747371.jpg`"> 
     <p class="mt-20 text-error text-center text-6xl font-extrabold">SEEMS LIKE YOU'RE LOST</p>
    <div class="flex mt-8 justify-center">
        <NuxtLink to="/" class="nav-link">
            <button class="justify-center bg-error py-4 px-4 text-white font-semibold hover:bg-error2 rounded">GO TO HOMEPAGE</button>
        </NuxtLink>
    </div>

    </div>
</template>
