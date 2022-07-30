<template>
    <div class="header-margin">
        <client-only>
            <splide :options="options">
                <splide-slide>
                    <div class="absolute left-0 right-0 bottom-0 top-0 w-full flex justify-center">
                        <div class="m-auto">
                            <h1 class="text-white text-2xl md:text-5xl font-semibold text-center opacity-90">
                                Welcome to </h1> &nbsp;
                            <h2 class=" text-white text-2xl md:text-5xl font-semibold text-center opacity-90">
                                Jiri Women's Hostel</h2>
                        </div>
                    </div>
                    <img class="w-full h-full object-cover object-center" src="\images\main.jpg" />
                </splide-slide>
                <splide-slide>
                    <img class="w-full h-full object-cover" src="\images\inauguration2.jpg" />
                </splide-slide>
                <splide-slide>
                    <img class="w-full h-full object-cover object-left-top" src="\images\inauguration13.jpeg" />
                </splide-slide>
                <splide-slide>
                    <img class="w-full h-full object-cover" src="\images\inauguration3.jpg" />
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
