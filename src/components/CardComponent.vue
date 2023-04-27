<template>

    <div class="wrapper">
        <h2>Card searcher</h2>

        <div class="buttonsWrapper">
          <button 
          @click="firstMinus(), lastMinus()"
          :disabled="first == 1">Previous
        </button>
        <button 
          @click="firstPlus(), lastPlus()">Next
        </button>
        <input type="text" v-model="searchText" placeholder="Search card name">
        

        <input v-model="desc" type="checkbox" id="checkDesc" name="desc" value="">
          <label for="desc">Search in description</label>
        </div>
        <div class="cardCriteria">
          <select v-model="searchCriteria">
            <option disabled value="">Please select card type</option>
            <option value="Monster">Monster Cards</option>
            <option value="Spell Card">Spell Cards</option>
            <option value="Trap">Trap Cards</option>
          </select>
        </div>
        
        
        

        <div class="cards__wrapper">
          <div class="" v-for="card, index in searchCards" :key="card.id">
            <div class="cards__card">
              <p v-if="index >= first && index < last"> {{ card.name }} </p>
              <img v-if="index >= first && index < last" :src="card.card_images[0].image_url" />
            </div>
          
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
  const search = ref('')
  const cardsPerPage = 10
  const first = ref(-1)
  const last = ref(cardsPerPage)
  const desc = ref(false)

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
    // if true search in description of a cards
    if(desc.value) {
      const filteredCards = cards.value.filter(card => card.desc.toLowerCase().includes(searchText.value.toLowerCase()));
      return filteredCards

    // if false search only in name of a cards
    } else if(!desc.value) {
      const filteredCards = cards.value.filter(card => card.name.toLowerCase().includes(searchText.value.toLowerCase()));
      const filteredCardsWithType = filteredCards.filter((cards => cards.type.includes(searchCriteria.value)))
      const filteredCardsWithRace = filteredCards.filter((cards => cards.race.includes(searchCriteria.value)))
      return filteredCardsWithRace.length > 0 ? filteredCardsWithRace : filteredCardsWithType;
    }


    
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

.inputWrapper label {
  font-size: 1.8rem;
}

.buttonsWrapper {
  padding-top: 1rem;
}

.cards__wrapper {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 20px;
    justify-content: center;
  }
  
  .cards__card {
    width: fit-content;
    cursor: pointer;
  }

  .cards__card img {
    height: 100%;
    width: 100%;
  }

  .cards__card p {
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
  }

</style>
