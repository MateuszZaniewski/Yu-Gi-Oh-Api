<script setup>

import axios from 'axios'
import {ref} from 'vue'
let cardsArray = ref([])

axios.get('cards.json')
  .then(response => {
    cardsArray.value = response.data.data
    console.log(cardsArray)
  })
  .catch(error => {
    console.log(error)
  });
</script>

<template>
  <div>
    <!-- {{cardsArray}} -->
  </div>

  <div class="singleImage" v-for="card in cardsArray">
    {{ card.id }}
    {{ card.name }}
    {{ card.race }}
    {{ card.type }}
  </div>

</template>

<style scoped>

</style>
