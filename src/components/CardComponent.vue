<template>
    <div class="wrapper">
        <h2>Card searcher</h2>

        <div class="buttonsWrapper">
          <button
          :disabled="paginationStart == 0"
          @click="paginationStart -= 10, paginationEnd -= 10"
          >Previous
          </button>

          <button
          @click="paginationStart += 10, paginationEnd += 10"
          >Next
          </button>
          <input
          type="text"
          v-model="searchText"
          placeholder="Search card name">
        

        <input
          v-model="desc"
          type="checkbox"
          id="checkDesc"
          name="desc"
          value=""
          @click="desc = !desc">
          <label for="desc">Search in description</label>
        </div>
        <div class="cardCriteria">
          <select v-model="cardType">
            <option disabled value="">Please select card type</option>
            <option value="">All Cards</option>
            <option value="Monster">Monster Cards</option>
            <option value="Spell Card">Spell Cards</option>
            <option value="Trap">Trap Cards</option>
          </select>
          </div>
          <div>
          <select v-model="cardAttribute">
            <option disabled hidden value="">Please select card attribute</option>
            <option selected value="">All attributes</option>
            <option value="LIGHT">Light</option>
            <option value="DARK">Dark</option>
            <option value="EARTH">Earth</option>
            <option value="FIRE">Fire</option>
            <option value="WATER">Water</option>
            <option value="WIND">Wind</option>
            <option value="DIVINE">Divine</option>
          </select>
        </div>


        

        <div class="cards__wrapper">
          <Card :message="searchCards"/>
        </div>
        
      </div>

  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  import Card from './Card.vue';

  
  const cards = ref([]);
  const searchText = ref('');
  const cardType = ref('')
  const cardAttribute = ref('')

  const paginationStart = ref(0)
  const paginationEnd = ref(10)

  const desc = ref(false)

  const fetchCards = async () => {
    try {
      const response = await axios.get('cards.json');
      cards.value = response.data.data;
      console.log(cards)
    } catch (error) {
      console.log(error);
    }
  };
  
  onMounted(() => {
    fetchCards();
  });

  const searchCards = computed (() => {

      const fType = cards.value.filter(card => card.type.toLowerCase().includes(cardType.value.toLowerCase()))
      const fSearch = fType.filter(card => card.name.toLowerCase().includes(searchText.value.toLowerCase()))
      

      return fSearch.slice(paginationStart.value,paginationEnd.value)
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
