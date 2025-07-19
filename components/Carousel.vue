<template>
    <div class="mt-20 lg:mt-56">
        <client-only>
            <splide :options="options">
                <splide-slide>
                    <div class="absolute left-0 right-0 bottom-0 top-0 w-full flex justify-center">
                        <div class="m-auto">
                            <h1 class="text-white text-3xl md:text-5xl font-semibold text-center opacity-90 leading-1">
                                Welcome to </h1> &nbsp;
                            <h2 class=" text-white text-3xl md:text-5xl font-semibold text-center opacity-90 leading-1">
                                Jiri Women's Hostel</h2>
                        </div>
                    </div>
                    <img class="w-full h-full object-cover object-center" :src="`${$config.baseURL}images/main.jpg`" />
                </splide-slide>
                <splide-slide>
                    <img class="w-full h-full object-cover" :src="`${$config.baseURL}images/IMG-20230209-WA0032.jpg`" />
                </splide-slide>
                <splide-slide>
                    <img class="w-full h-full object-cover object-left-top" :src="`${$config.baseURL}images/ADS04323.JPG`" />
                </splide-slide>
                <splide-slide>
                    <img class="w-full h-full object-cover" :src="`${$config.baseURL}images/20230205_201620-01.jpeg`" />
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
                autoplay:true,
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