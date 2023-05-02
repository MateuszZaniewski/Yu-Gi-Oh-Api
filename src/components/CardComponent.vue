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

          

        <div class="cards__wrapper">
          <Card :message="searchCards"/>
        </div>

        <div class="downButtons">
          <button
          :disabled="paginationStart == 0"
          @click="paginationStart -= 10, paginationEnd -= 10, ScrolltoTop()"
          >Previous
          </button>

          <button
          @click="paginationStart += 10, paginationEnd += 10, ScrolltoTop()"
          >Next
          </button>
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

      if(desc.value) {
        const fSearch = cards.value.filter(card => 
          card.desc.toLowerCase().includes(searchText.value.toLowerCase()) &&
          card.type.toLowerCase().includes(cardType.value.toLowerCase()))
        return fSearch.slice(paginationStart.value,paginationEnd.value)
      }
      else {
        const fSearch = cards.value.filter(card => 
          card.name.toLowerCase().includes(searchText.value.toLowerCase()) && 
          card.type.toLowerCase().includes(cardType.value.toLowerCase()))
      

      return fSearch.slice(paginationStart.value,paginationEnd.value)
      }
      
    })


  const ScrolltoTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


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
    gap: 5vh;
    justify-content: center;
  }

.downButtons {
  display: flex;
  justify-content: center;
  padding: 2vh 0 2vh 0;
  
}

.downButtons button {
  font-size: 1.6rem;
}

</style>
