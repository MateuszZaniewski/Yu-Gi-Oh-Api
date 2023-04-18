<template>

    <div>
        <h2>Card searcher</h2>
        <input type="text" v-model="searchText" placeholder="Search card name">
        <div>
          <p v-for="card in searchCards" :key="card.id">
            {{ card.name }}
          </p>
        </div>
      </div>


    <div class="cards__wrapper">
        <h2>Magicians cards</h2>
          <p class="cards__card" v-for="card in magicians" :key="card.id">
            {{ card.name }}
          </p>
      </div>

    <div class="cards__wrapper">
        <h2>Monster Cards</h2>
          <p class="cards__card" v-for="card in monsterCards" :key="card.id">
            {{ card.name }}
          </p>
      </div>

  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  
  const cards = ref([]);
  const searchText = ref('');
  
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
