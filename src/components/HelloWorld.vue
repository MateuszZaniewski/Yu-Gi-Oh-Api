<script setup>

import axios from 'axios'
import {onMounted, ref} from 'vue'
import CardComponent from './CardComponent.vue';
let cardsArray = []

axios.get('cards.json')
  .then(response => {
    cardsArray = response.data.data
  })
  .catch(error => {
    console.log(error)
  });


</script>

<template>

<CardComponent />

</template>

<style scoped>

</style>
