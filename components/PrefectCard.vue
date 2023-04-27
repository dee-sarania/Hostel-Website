<template>
    <div
        class="md:flex md:flex-wrap grid-cols-none grid-row justify-center justify-items-center justify-evenly grid lg:grid lg:grid-cols-3">
        <div class="transform transition duration-500 hover:scale-105" v-for="(p, i ) in people" :key="i">
            <div class="lg:max-w-sm mt-14 overflow-hidden card-shadow rounded-tr-3xl rounded-bl-3xl">
                <div class="container overflow-hidden h-96 w-full"><img class="w-96 h-full object-cover object-center"
                        :src="`${p.image}`"></div>
                <div class="text-para py-8 lg:p-8 leading-relaxed">
                    <h4 class="text-xl text-burgundy font-bold capitalize">{{ p.name }}</h4>
                    <p>{{ p.designation }}</p>
                    <p>{{ p.department }}</p>
                    <p class="pt-5"><span class="font-bold">Phone no:</span>&nbsp;{{ p.phoneNo }}</p>
                    <p><span class="font-bold">Email:</span> <a :href="`mailto:${p.email}`" class="hover:underline">{{
                            p.email
                    }}</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        people: {
            required: true,
            type: Array
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 1024px){
    .card-shadow {
        box-shadow: 0 20px 25px -5px rgb(175 13 13 / 16%), 0 10px 10px -5px rgb(135 67 86 / 0%)
    }
}
</style>