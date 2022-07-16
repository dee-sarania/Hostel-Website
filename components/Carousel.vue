<template>
    <div class="header-margin">
        <client-only>
            <splide :options="options">
                <splide-slide>
                    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1657866203466-d8aaa7fbad22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </splide-slide>
                <splide-slide>
                    <img  class="w-full h-full object-cover"  src="https://images.unsplash.com/photo-1657866203466-d8aaa7fbad22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
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
                rewind: true,
                height: 500,
                perPage: 1,
                gap: '1rem',
            },
        };
    },
}
</script>
