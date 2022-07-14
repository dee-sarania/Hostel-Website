<template>
    <div class="grid grid-row grid-cols-2 justify-items-center gap-16 lg:gap-24">
        <div class="transform transition duration-500 hover:scale-105" v-for="(p, i ) in people" :key="i">
            <div class="max-h-full lg:max-w-sm mt-14 overflow-hidden card-shadow rounded-tr-3xl rounded-bl-3xl">
                <img class="max-h-52 lg:max-h-full lg:max-w-sm object-center" :src="`${p.image}`">
                <div class="text-para p-4 lg:p-8 leading-relaxed">
                    <h4 class="text-sm lg:text-xl text-burgundy font-bold capitalize">{{ p.name }}</h4>
                    <p class="text-sm lg:text-lg" >{{ p.designation }}</p>
                    <p class="text-sm lg:text-lg" >{{ p.department }}</p>
                    <p class="pt-5 text-sm lg:text-lg"><span class="font-bold">Phone no:</span>&nbsp;{{ p.phoneNo }}</p>
                    <p class="text-sm lg:text-lg"><span class="font-bold">Email:</span> <a :href="`mailto:${p.email}`" class="hover:underline">{{
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
.card-shadow {
   box-shadow: 0 20px 25px -5px rgb(175 13 13 / 16%), 0 10px 10px -5px rgb(135 67 86 / 0%)
}
</style>