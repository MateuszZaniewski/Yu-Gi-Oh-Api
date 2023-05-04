<template>

  <section>
    <div class="search-field">
        <div class="searchbar">
            <input type="text" v-model="searchText" placeholder="Enter keyword">
            <span>X</span>
        </div>
        <div>
        <div class="search-type-select">
            <select>
                <option selected value="CardName">Search by Card Name</option>
                <option value="CardText">Search by Card Text</option>
            </select>
        </div>
        </div>
        <div class="search-button">
            <button>Search</button>
        </div>
        
    </div>

    <div class="filter-field">
        <span class="field-head">Search Filters <span>\/</span></span>
    </div>
</section>

    <div class="wrapper">

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
      const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
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


<style lang="scss" scoped>


section {
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid #e49273;
}

.search-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    background-color: #a8d0db;
    padding: 0.5rem 0;

    .searchbar {
        width: 40vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    
        input {
            border: none;
            outline: none;
            padding: 0.25rem 0.5rem;
            width: 100%;
        }
    
        span {
            padding-right: 0.5rem;
            color: rgb(36, 35, 35);
            position: absolute;
            right: 0;
        }
    }
    
    .search-type-select {
        width: fit-content;

        select {
            padding: 0.25rem 0.5rem;
        }
    }

    .search-button {

        button {
            padding: 0.25rem 0.5rem;
            background-color: #e49273;
        }
    }

}


.filter-field {
    background-color: #2b4570;
    position: relative;
    display: flex;
    justify-content: center;
    color: white;

    .field-head{
        margin: 0;
        padding: 2vh 0;
        text-align: center;
    }
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

.cardCriteria {
  margin-top: 3vh;
  font-size: 1.4rem;
}

.cards__wrapper {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 5vh;
    justify-content: center;
    margin-top: 3vh;
    max-width: 1440px;
    margin: 0 auto;
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
