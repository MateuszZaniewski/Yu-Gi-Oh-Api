<template>
  <div class="pagination">
      <ul class="pagination__list">
        <button @click="pagesToStart">First</button>
        <button @click="prevPage" :disabled="currentPage === 10">&lt;</button>
        <li v-if="activePage !== 1 && pagesLength == 1">{{ activePage - 1 }}</li>
        <li class="activePage">{{ activePage }}</li>
        <li v-if="activePage + 1 != pagesLength +1" > {{ activePage + 1 }}</li>
        <li v-if="activePage === 1 && pagesLength > 2">{{ activePage + 2 }}</li>
        <li v-if="pagesLength - activePage > 2">...</li>
        <li v-if="pagesLength - activePage > 2">{{ pagesLength }}</li>
        <button @click="nextPage" :disabled="currentPage >= searchByNameOrDescription.length">></button>
        <button @click="pagesToEnd">Last</button>
      </ul>
      <div class="gotoPage">
        <span>Go to page: </span>
        <input v-model="gotoPage" type="number">
        <button @click="changePage">Go</button>
      </div>
</div>

    <ul class="card__wrapper">
      <li class="card__card" v-for="card in searchByNameOrDescription.slice(startPoint,currentPage)" :key="card.id">
      <div class="uniqueCard">

        <div class="uniqueCard__image--wrapper">
          <img :src="card.card_images[0].image_url"/>
        </div>

        <div class="uniqueCard__informations--wrapper">
          <h2>{{ card.name }}</h2>
          <div class="informations--details">
            <div>
              <img class="typeImage" :src="card.type == 'Spell Card' ? spellCardPath : card.type == 'Trap Card' ? trapCardPath : monsterCardPath" />
              <span>{{ card.type == 'Spell Card' ? 'Spell Card' : card.type == 'Trap Card' ? 'Trap Card' : 'Monster Card' }}</span>
              <img :src="card.race == 'Normal' ? normal : 
              card.race == 'Continuous' ? continous :
              card.race == 'Equip' ? equip :
              card.race == 'Ritual' ? ritual :
              card.race == 'Field' ? field :
              card.race == 'Quick-Play' ? quickplay :
              card.race == 'Normal' ? normal :
              card.race == 'Continuous' ? continous :
              card.race == 'Counter' ? counter :
              card.attribute == 'DARK' ? dark :
              card.attribute == 'LIGHT' ? light :
              card.attribute == 'WATER' ? water :
              card.attribute == 'FIRE' ? fire :
              card.attribute == 'WIND' ? wind :
              card.attribute == 'DIVINE' ? divine : earth"  />
              <span>{{ card.race }}</span>
            </div>
            <div v-if="card.atk !== 'undefined' && card.def !== 'undefined'">
              <img :src="attack"/>
              <span>{{ card.atk }}</span>
              <img :src="defence"/>
              <span>{{ card.def }}</span>
            </div>
            
            
          </div>
          
          <p class="card--description">{{ card.desc }}</p>
        </div>

      </div>
      </li>
    </ul>

    <div class="pagination">
      <ul>
          <button @click="prevPage" :disabled="currentPage === 10">Previous</button>
          <button @click="nextPage" :disabled="currentPage >= searchByNameOrDescription.length">Next</button>
      </ul>
    </div>


</template>

<script setup>

import {computed, ref, watch} from 'vue'
import { useStore } from 'vuex';
const store = useStore();

const props = defineProps({
  preFilterProp: {
    type: Array,
    required: true,
  },
  searchByWhat: {
    type: String,
    required: true
  },
  searchText: {
    type: String,
    required: true
  },
  attackFrom: {
    type: Number,
    required: false,
  },
  attackTo: {
    type: Number,
    required: false,
  },
  defenceFrom: {
    type: Number,
    required: false,
  },
  defenceTo: {
    type: Number,
    required: false,
  },
  allCards: {
    type: Boolean,
    required: false,
  },
  monsters: {
    type: Boolean,
    required: false,
  },
  spells: {
    type: Boolean,
    required: false,
  },
  traps: {
    type: Boolean,
    required: false,
  },
});

const pagesLength = ref(null)
const startPoint = ref(0)
const currentPage = ref(10)
const activePage = ref(1)
const gotoPage = ref(1)
import monsterCardPath from '../assets/Monster.jpg'
import spellCardPath from '../assets/SpellCard.jpg'
import trapCardPath from '../assets/TrapCard.jpg'
import normal from '../assets/Normal.png'
import continous from '../assets/Continuous.png'
import counter from '../assets/Counter.png'
import equip from '../assets/Equip.png'
import field from '../assets/Field.png'
import quickplay from '../assets/Quick-play.png'
import ritual from '../assets/Ritual.png'
import dark from '../assets/DARK.png'
import light from '../assets/LIGHT.png'
import divine from '../assets/DIVINE.png'
import earth from '../assets/EARTH.png'
import fire from '../assets/FIRE.png'
import water from '../assets/WATER.png'
import wind from '../assets/WIND.png'
import attack from '../assets/swords.png'
import defence from '../assets/shield.png'


const changePage = computed(() => { 
  if(gotoPage.value > pagesLength.value || gotoPage.value < 1 ) { 
    alert('Strona nie istnieje')
    currentPage.value = 10
    startPoint.value = 0
    activePage.value = 1
    gotoPage.value = 1
  }
  else {
    activePage.value = gotoPage.value
    currentPage.value = gotoPage.value * 10
    startPoint.value = gotoPage.value * 10 - 10
  }
})

const nextPage = () => {
  currentPage.value += 10
  startPoint.value += 10
  activePage.value++
} 
const prevPage = () => {
  currentPage.value -= 10
  startPoint.value -= 10
  activePage.value--
}

const pagesToStart = () => {
  currentPage.value = 10
  startPoint.value = 0
  activePage.value = 1
}
const pagesToEnd = () => {
  activePage.value = pagesLength.value
  startPoint.value = pagesLength.value * 10 - 10
  currentPage.value = pagesLength.value * 10
}



const searchByNameOrDescription = computed(() => {
  let filteredArray = [];
  if(store.state.allBox){
    filteredArray = props.preFilterProp.filter(card => {
      if (props.searchByWhat === 'true') {
      return card.name.toLowerCase().includes(props.searchText.toLowerCase());
    } else if (props.searchByWhat === 'false') {
      return card.desc.toLowerCase().includes(props.searchText.toLowerCase());
    }
    })
  }
  else if(store.state.monstersBox){
    filteredArray = props.preFilterProp.filter(card => {
    if (props.searchByWhat === 'true') {
      return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchByLevelOnly(card) && searchByAtributeOnly(card) && searchByMonsterTypeOnly(card) && searchByCardTypeOnly(card) && searchByAttackAndDefenceOnly(card);
    } else if (props.searchByWhat === 'false') {
      return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchByLevelOnly(card) && searchByAtributeOnly(card) && searchByMonsterTypeOnly(card) && searchByCardTypeOnly(card) && searchByAttackAndDefenceOnly(card);
    }
  });
  }
  else if(store.state.spellsBox){
    filteredArray = props.preFilterProp.filter(card => {
      if(props.searchByWhat === 'true'){
        return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('spell')

      } else if(props.searchByWhat === 'false') {
        return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('spell')

      }
    });
  }
  else if(store.state.trapsBox){
    filteredArray = props.preFilterProp.filter(card => {
      if(props.searchByWhat === 'true'){
        return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('trap')

      } else if(props.searchByWhat === 'false') {
        return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('trap')

      }
    });
  }

  pagesLength.value = Math.ceil(filteredArray.length/10);
  console.log(pagesLength.value)
  console.log(filteredArray)
  return store.state.ByAttackAscending ? filteredArray.sort((cardA, cardB) => cardA.atk - cardB.atk) :
         store.state.ByAttackDescending ? filteredArray.sort((cardA, cardB) => cardA.atk - cardB.atk).reverse() :
         store.state.ByDefenceAscending ? filteredArray.sort((cardA, cardB) => cardA.def - cardB.def) :
         filteredArray.sort((cardA, cardB) => cardA.def - cardB.def).reverse() 

});

const searchByLevelOnly = (card) => {
  const selectedLevelsArray = Array.from(store.state.selectedLevels)
  const levelsArrayLength = selectedLevelsArray.length
  
  return levelsArrayLength === 0 ? 
    store.state.levels.some(level => card.level.toString().includes(level)) : 
    selectedLevelsArray.some(level => card.level.toString().includes(level))
};

const searchByAtributeOnly = (card) => {
  const selectedAtributesArray = Array.from(store.state.selectedAtributes)
  const atributesArrayLength = selectedAtributesArray.length

  return atributesArrayLength === 0 ?
  store.state.atributes.some(atribute => card.attribute.includes(atribute)) :
  selectedAtributesArray.some(atribute => card.attribute.includes(atribute))
}

const searchByMonsterTypeOnly = (card) => {
  const selectedMonstersArray = Array.from(store.state.selectedMonsters)
  const monstersArrayLength = selectedMonstersArray.length

  return monstersArrayLength === 0 ? 
  store.state.monsters.some(race => card.race.includes(race)) :
  selectedMonstersArray.some(race => card.race.includes(race))
}

const searchByCardTypeOnly = (card) => {
  const selectedCardTypesArray = Array.from(store.state.selectedCardTypes)
  const selectedCardTypesLength = selectedCardTypesArray.length

  return selectedCardTypesLength === 0 ?
  store.state.types.some(type => card.type.includes(type)) :
  selectedCardTypesArray.some(type => card.type.includes(type))
}

const searchBySpellOrTrapOnly = (card) => {
  const selectedRacesArray = Array.from(store.state.selectedRaces)
  const selectedRacesLength = selectedRacesArray.length

  return selectedRacesLength === 0 ?
  store.state.races.some(race => card.race.includes(race)) :
  selectedRacesArray.some(race => card.race.includes(race))
}

const searchByAttackAndDefenceOnly = (card) => {
  return card.atk >= props.attackFrom && card.atk <= props.attackTo &&
         card.def >= props.defenceFrom && card.def <= props.defenceTo
};


watch(() => props.searchText, () => {
      startPoint.value = 0
      currentPage.value = 10
      activePage.value = 1;
    });

watch([() => props.monsters, () => props.spells, () => props.allCards, () => props.traps], () => {
  gotoPage.value = 1
  startPoint.value = 0
  currentPage.value = 10
  activePage.value = 1;

});


</script>

<style lang="scss" scoped>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

.pagination {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;

    ul {
        list-style: none;
        display: flex;
        gap: 2vw;
    }

    li {
      padding: 0.25rem 0.5rem;
      color: rgb(56, 55, 55);
    }

    .activePage {
      border: 1px solid #d0f5d0;
      border-radius: 0.5rem;
      background-color: #d0f5d0;
      color: green;
      font-weight: bold;
      padding: 0.25rem 0.5rem;
    }

    button {
      padding: 0.5rem 0.5rem;
      font-weight: bold;
    }

    .gotoPage {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 20px;
      gap: 10px;
      
      input {
        width: 50px;
      }
    }
}


.card__wrapper {
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  gap: 2vw;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 2vh;

  .card__card {
   
    

    .uniqueCard {
      display: flex;
      flex-flow: row nowrap;

      .uniqueCard__image--wrapper{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 250px;
          width: 170px;
          border-radius: 0.5rem;
          cursor: zoom-in;
        }

        img:hover {
          scale: 1.7;
        }
      }

      .uniqueCard__informations--wrapper{
        width: 80%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        h2 {
          padding: 1vh 0;
        }

        .card--description{
          width: 80%;
          margin: 0 auto;
          padding-top: 2vh;
          border-top: 1px solid grey;
          font-size: 1.2rem;
        }

        .informations--details{
          display: flex;
          gap: 30px;
          align-items: center;
          padding-bottom: 2vh;

          div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
        }

        .typeImage {
          height: 20px;
          width: 15px;
        }
      }
    }
  }
}



</style>