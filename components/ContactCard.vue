<template>
    <div class="grid grid-row grid-cols-3 justify-items-center gap-32">
        <div class="transform transition duration-500 hover:scale-105" v-for="(q, i ) in creators" :key="i">
            <div class="max-w-sm mt-14 overflow-hidden card-shadow rounded-tr-3xl rounded-bl-3xl">
                <img class="max-w-sm object-center" :src="`${q.image}`">
                <div class="text-para p-8 leading-relaxed">
                    <h4 class="text-xl text-burgundy font-bold capitalize">{{ q.name }}</h4>
                    <p>{{ q.course }}</p>
                    <p>{{ q.department }}</p>
                    <p class="pt-5"><span class="font-bold">Phone no:</span>&nbsp;{{ q.phoneNo }}</p>
                    <p><span class="font-bold">Email:</span> <a :href="`mailto:${q.email}`" class="hover:underline">{{
                            q.email
                    }}</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        creators: {
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