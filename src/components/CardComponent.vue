<template>

    <div>
        <h2>Card searcher</h2>

        <button 
          @click="firstMinus(), lastMinus()"
          :disabled="first == 1">Left
        </button>
        <button 
          @click="firstPlus(), lastPlus()">Right
        </button>
        <input type="text" v-model="searchText" placeholder="Search card name">
        <div v-for="card, index in searchCards" :key="card.id">
          <p v-if="index > first && index < last"> {{ card.name }} </p>
          <img v-if="index > first && index < last" :src="card.card_images[0].image_url" />
        </div>
      </div>

  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  
  const cards = ref([]);
  const searchText = ref('');
  const cardsPerPage = 10
  const first = ref(1)
  const last = ref(cardsPerPage)

  const firstPlus = function() {
    first.value += cardsPerPage
  }

  const firstMinus = function() {
    first.value -= cardsPerPage
  }

  const lastPlus = function() {
      last.value += cardsPerPage
  }

  const lastMinus = function()  {
      last.value -= cardsPerPage
  }

  
  
  const fetchCards = async () => {
    try {
      const response = await axios.get('cards.json');
      cards.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  onMounted(() => {
    fetchCards();
  });
  
  const monsterCards = computed(() => {
    return cards.value.filter(card => card.type.includes('Monster'));
  });

  const magicians = computed(() => {
    return cards.value.filter(card => card.name.includes('Magician'))
  })

  const searchCards = computed (() => {
    return cards.value.filter(card => card.name.toLowerCase().includes(searchText.value.toLowerCase()));
  })
  </script>

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
