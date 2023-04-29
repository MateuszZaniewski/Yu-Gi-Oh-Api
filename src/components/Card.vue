<template>
    <div v-for="card in props.message">
        <div class="cards__card">
            <h2>{{card.name}}</h2>
            <img :src="card.card_images[0].image_url" />
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['message'])
console.log(props.message)

</script>

<style scoped>


</style>