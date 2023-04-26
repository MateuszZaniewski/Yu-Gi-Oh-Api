<template>

    <div class="wrapper">
        <h2>Card searcher</h2>

        <div class="inputWrapper">
          <input v-model="searchCriteria" checked type="radio" id="allcards" name="cards" value="">
          <label for="allcards">All Cards</label>
          <input v-model="searchCriteria" type="radio" id="monsters" name="cards" value="Monster">
          <label for="monsters">Monsters</label>
          <input v-model="searchCriteria" type="radio" id="spells" name="cards" value="Spell Card">
          <label for="spells">Spells</label>
          <input v-model="searchCriteria" type="radio" id="traps" name="cards" value="Trap Card">
          <label for="traps">Traps</label>
        </div>

        <div class="buttonsWrapper">
          <button 
          @click="firstMinus(), lastMinus()"
          :disabled="first == 1">Previous
        </button>
        <button 
          @click="firstPlus(), lastPlus()">Next
        </button>
        <input type="text" v-model="searchText" placeholder="Search card name">
        </div>
        
        
        

        
        <div class="cards__wrapper" v-for="card, index in searchCards" :key="card.id">
          <div class="cards__card">
            <p v-if="index >= first && index < last"> {{ card.name }} </p>
            <img v-if="index >= first && index < last" :src="card.card_images[0].image_url" />
          </div>
          
        </div>
      </div>

  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  
  const cards = ref([]);
  const searchText = ref('');
  const searchCriteria = ref('')
  const cardsPerPage = 10
  const first = ref(-1)
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

  const searchCards = computed (() => {
    const filteredCards = cards.value.filter(card => card.name.toLowerCase().includes(searchText.value.toLowerCase()));
    const filteredCardsWithType = filteredCards.filter((cards => cards.type.includes(searchCriteria.value)))
    return filteredCardsWithType;
  })


  </script>


<style>

h2 {
  text-align: center;
}

.inputWrapper, .buttonsWrapper {
  display: flex;
  justify-content: center;
}

.buttonsWrapper {
  padding-top: 1rem;
}

.cards__wrapper {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }
  
  .cards__card {
    width: fit-content;
  }

  .cards__card img {
    height: 300px;
    width: 300px;
  }

</style>
