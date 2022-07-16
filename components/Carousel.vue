<template>
    <div class="header-margin">
        <client-only>
            <splide :options="options">
                <splide-slide>
                    <img class="w-full h-full object-cover object-center" src="\hostel4.jpg" />
                    <h1 class="mt-96 z-100 text-black font-semibold text-center">fefewrgrg</h1>
                </splide-slide>
                <splide-slide>
                    <img  class="w-full h-full object-cover"  src="\caro2.jpg" />
                </splide-slide>
                <splide-slide>
                    <img  class="w-full h-full object-cover object-left-top"  src="\bihu.jpeg" />
                </splide-slide>
                <splide-slide>
                    <img  class="w-full h-full object-cover"  src="\caro4.jpg" />
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
                start:0,
                rewind: true,
                height: 600,
                perPage: 1,
                gap: '1rem',
                autoplay:true,
                interval:5000,
                pauseOnHover: false
            },

            type: {
                loop: true,
                slide: true,
            }
        };
    },
}
</script>
