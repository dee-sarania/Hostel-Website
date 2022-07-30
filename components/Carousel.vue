<template>
    <div class="header-margin">
        <client-only>
            <splide :options="options">
                <splide-slide>
                    <div class="absolute left-0 right-0 w-full"><h1 class="mt-80 text-white text-5xl font-semibold text-center opacity-90 uppercase">Welcome to </h1> &nbsp;
                    <h2 class=" text-white text-5xl font-semibold text-center opacity-90 uppercase">Jiri Women's Hostel</h2></div>
                    <img class="w-full h-full object-cover object-center" :src="`${$config.baseURL}images/main.jpg`" />
                    
                    
                </splide-slide>  
                <splide-slide>
                    <img  class="w-full h-full object-cover"  :src="`${$config.baseURL}images/inauguration2.jpg`" />
                </splide-slide>
                <splide-slide>
                    <img  class="w-full h-full object-cover object-left-top"  :src="`${$config.baseURL}images/inauguration13.jpeg`" />
                </splide-slide>
                <splide-slide>
                    <img  class="w-full h-full object-cover"  :src="`${$config.baseURL}images/inauguration3.jpg`" />
                </splide-slide>
            </splide>
        </client-only>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                start: 0,
                rewind: true,
                height: 600,
                perPage: 1,
                gap: '1rem',
                // autoplay:true,
                interval: 5000,
                pauseOnHover: false,
                breakpoints: {
                    640: {
                        height: 300
                    }
                }
            },

            type: {
                loop: true,
                slide: true,
            }
        };
    },
}
</script>
