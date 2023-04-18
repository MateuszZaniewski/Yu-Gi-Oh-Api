<script setup>

import axios from 'axios'
import {onMounted, ref} from 'vue'
import CardComponent from './CardComponent.vue';
let cardsArray = []

axios.get('cards.json')
  .then(response => {
    cardsArray = response.data.data
    console.log(cardsArray)
  })
  .catch(error => {
    console.log(error)
  });


</script>

<template>

<CardComponent />

</template>

<style scoped>

.cards__wrapper {
  height: auto;
  border: 1px solid black;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;

}

.cards__card {
  width: 30%;
  border: 1px solid blue;
}

</style>
