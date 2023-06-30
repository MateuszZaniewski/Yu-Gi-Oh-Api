<template>
<nav>
    <img src="../assets/hamburger.png"/>
    <h1>Yu-Gi-Oh!</h1>
    <img @click="handleSignOut" id="userFace" src="../assets/user.png" />
    
</nav>

<section class="searchBar">
    <input v-model="searchText" type="search" placeholder="Search">
    <select v-model="searchByName" name="card">
        <option selected value="true">in card name</option>
        <option value="false">in card text</option>
    </select>
</section>

<section class="filters">
    <div class="filters-icons">
        <img @click="showGalleryMode" :src="store.state.galleryActive ? GalleryView : GalleryViewInactive" />
        <img @click="showListMode" :src="store.state.listActive ? ListView : ListViewInactive" />
    </div>
    <div class="filters-button">
        <button @click="showFilters"><img src="../assets/filter.png" /> Filters</button>
    </div>
    
</section>

<section class="popupFilters">
    <div class="popupFiltersWrapper">
        <div class="topupSection">
            <div class="topupLeft">
                <img @click="hideFilters" src="../assets/close.png" />
                <span>Filters</span>
            </div>
            <div class="topupRight">
                <button @click="store.commit('resetAllFilters')">Clear Filters</button>
            </div>
        </div>
        <span class="sortby">sort by</span>
        <div class="sortByAttackandDefence">
            <div class="sortByAttack">
                <span>Attack</span>
                <img @click="sortAtkAscending" :src="store.state.ByAttackAscending ? TopArrorActive : TopArrowInactive" />
                <img @click="sortAtkDescending" :src="store.state.ByAttackDescending ? BottomArrowActive : BottomArrowInactive" />
            </div>
            <div class="sortByDefence">
                <span>Defence</span>
                <img @click="sortDefAscending" :src="store.state.ByDefenceAscending ? TopArrorActive : TopArrowInactive" />
                <img @click="sortDefDescending" :src="store.state.ByDefenceDescending ? BottomArrowActive : BottomArrowInactive" />
            </div>
        </div>
        <div class="atributeFilters">
            <MainCardTypes />
            <AtributeComponent />
            <MonsterTypeComponent />
            <CardTypeComponent />
            <LevelComponent />
            <SpellComponent />
            <TrapComponent />
            <AttackComponent />
            <DefenceComponent />
        </div>
    </div>
</section>

<div class="visibleCards">
    <CardMobile  
    :preFilterProp="preFilter" 
    :searchByWhat="searchByName" 
    :searchText="searchText"
    :attackFrom="attackFrom"
    :attackTo="attackTo"
    :defenceFrom="defenceFrom"
    :defenceTo="defenceTo"
    :allCards="allCards"
    :monsters="monsters"
    :spells="spells"
    :traps="traps"/>
</div>



</template>


<script setup>


import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import MainCardTypes from './MainCardTypesComponent.vue'
import LevelComponent from './LevelComponent.vue'
import CardTypeComponent from './CardTypeComponent.vue';
import MonsterTypeComponent from './MonsterTypeComponent.vue'
import RaceComponent from './RaceComponent.vue'
import SpellComponent from './SpellTypesComponent.vue'
import TrapComponent from './TrapTypesComponent.vue'
import AttackComponent from './AttackComponent.vue'
import DefenceComponent from './DefenceComponent.vue'
import AtributeComponent from './AtributeComponent.vue'
import CardMobile from './CardMobile.vue'
import { useStore } from 'vuex';
import GalleryView from '../assets/gallery.png'
import GalleryViewInactive from '../assets/galleryInactive.png'
import ListView from '../assets/list.png'
import ListViewInactive from '../assets/listInactive.png'
import TopArrowInactive from '../assets/topArrow.png'
import TopArrorActive from '../assets/topArrowActive.png'
import BottomArrowInactive from '../assets/bottomArrow.png'
import BottomArrowActive from '../assets/bottomArrowActive.png'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter()

const searchText = ref('')
const attackFrom = ref(0)
const attackTo = ref(15000)
const defenceFrom = ref(0)
const defenceTo = ref(15000)
const reveal = ref('block')
const cards = ref([]);
let searchByName = ref('true')
const cardsLength = ref(0)


const allCards = ref(true)
const monsters = ref(false)
const spells = ref(false)
const traps = ref(false)


const atributeBox = ref(false)
const raceBox = ref(false)
const monsterTypeBox = ref(false)
const cardTypeBox = ref(false)
const levelBox = ref(false)
const atkBox = ref(false)
const defBox = ref(false)

let levelArray = ref(store.state.levels)
let cardTypeArray = ref(store.state.types)
let monstertypeArray = ref(store.state.monsters)
let raceArray = ref(store.state.races)
let atributeArray = ref(store.state.atributes)

const sortAtkAscending = () => {
    store.commit('sortByAttackAscending')
}
const sortAtkDescending = () => {
    store.commit('sortByAttackDescending')
}
const sortDefAscending = () => {
    store.commit('sortByDefenceAscending')
}
const sortDefDescending = () => {
    store.commit('sortByDefenceDescending')
}

const handleSignOut = () => {
        signOut(getAuth()).then(() => {
            router.push('/signin')
        })
    }


const preFilter = computed(() => {
  return cards.value
})

const checkForAciveFilters = () => {
    const htmlElements = document.querySelectorAll('.atribute-button')
    console.log(htmlElements)

    for(let i = 0 ; i < htmlElements.length ;i++){
        if(store.state.allfiltersArray.includes(htmlElements[i].innerText)){
            htmlElements[i].style.backgroundColor = 'rgb(76, 159, 112)' 
        } else {
            htmlElements[i].style.backgroundColor = 'rgb(73, 111, 93)'
        }
    }
}

// methods //
const clear = () => {
    searchText.value = ''
}


const showAllFilters = () => {
    atributeBox.value = false
    raceBox.value = false
    monsterTypeBox.value = false
    cardTypeBox.value = false
    levelBox.value = false
    atkBox.value = false
    defBox.value = false
    allCards.value = false
    monsters.value = false
    spells.value = false
    traps.value = false
    store.commit('showAllFilters')
    store.commit('resetAllFilters')
    
}

const showMonsterFilters = () => {
    allCards.value = false
    monsters.value = true
    spells.value = false
    traps.value = false
    raceBox.value = false
    store.commit('showMonsterFilters')
    store.commit('resetAllFilters')
    checkForAciveFilters()
}

const expandMonsterFilters = () => {
    atributeBox.value = !atributeBox.value
    raceBox.value = !raceBox.value
    monsterTypeBox.value = !monsterTypeBox.value
    cardTypeBox.value = !cardTypeBox.value
    levelBox.value = !levelBox.value
    atkBox.value = !atkBox.value
    defBox.value = !defBox.value
}

const showSpellFilter = () => {
    atributeBox.value = false
    raceBox.value = true
    monsterTypeBox.value = false
    cardTypeBox.value = false
    levelBox.value = false
    atkBox.value = false
    defBox.value = false
    allCards.value = false
    monsters.value = false
    spells.value = true
    traps.value = false
    store.commit('showSpellFilters')
    store.commit('resetAllFilters')
    checkForAciveFilters()
    
}

const showTrapsFilter = () => {
    atributeBox.value = false
    raceBox.value = true
    monsterTypeBox.value = false
    cardTypeBox.value = false
    levelBox.value = false
    atkBox.value = false
    defBox.value = false
    allCards.value = false
    monsters.value = false
    spells.value = false
    traps.value = true
    store.commit('showTrapsFilters')
    store.commit('resetAllFilters')
    checkForAciveFilters()
}

const setDefaultforArrays = () => {
    store.commit('setDefaultForSelectedAtributes')
    store.commit('setDefaultForSelectedMonsterTypes')
    store.commit('setDefaultForSelectedCardTypes')
    store.commit('setDefaultForSelectedLevels')
    store.commit('setDefaultForSelectedRaces')
}

setDefaultforArrays()



const handleLevelArray = (array) => {
      levelArray = array.value
    }

const handleCardtypeArray = (array) => {
    cardTypeArray = array.value
}

const handleMonstertypeArray = (array) => {
    monstertypeArray = array.value
}

const handleRaceArray = (array) => {
    raceArray = array.value

}

const handleAtributeArray = (array) => {
    atributeArray = array.value
}

// fetching cards from api = > https://db.ygoprodeck.com/api/v7/cardinfo.php

const fetchCards = async () => {
    try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const fetchedCards = response.data.data;

    fetchedCards.forEach(card => {
      if (!card.hasOwnProperty('attribute')) {
        card.attribute = 'undefined';
      }
      if (!card.hasOwnProperty('name')) {
        card.name = 'undefined';
      }
      if (!card.hasOwnProperty('race')) {
        card.race = 'undefined';
      }
      if (!card.hasOwnProperty('type')) {
        card.type = 'undefined';
      }
      if (!card.hasOwnProperty('atk')) {
        card.atk = -1;
      }
      if (!card.hasOwnProperty('def')) {
        card.def = -1;
      }
      if (!card.hasOwnProperty('level')) {
        card.level = -1;
      }
    });

    cards.value = fetchedCards;
    console.log(cards.value)
    cardsLength.value = cards.value.length
    console.log(cardsLength.value)
    } catch (error) {
      console.log(error);
    }
  };
  
  onMounted(() => {
    fetchCards();
  });


// search for active buttons and set them to default state

const resetAciveButtons = () => {
    console.log('Filtry zostały zresetowane')
    const buttons = document.querySelectorAll('.atribute-button')
    buttons.forEach((button) => {
        if(button.style.backgroundColor == 'rgb(76, 159, 112)'){
            button.style.backgroundColor = 'rgb(73, 111, 93)'
        }  
    })
    store.commit('resetAllFilters')
};


const showGalleryMode = () => {
    store.commit('showGallery')
}

const showListMode = () => {
    store.commit('showList')
}

const showFilters = () => {
    console.log('Filters expanded')
    document.querySelector('.visibleCards').style.filter = 'blur(2px)'
    document.querySelector('.popupFilters').style.display = 'block'

};

const hideFilters = () => {
    console.log('Filters hidden')
    document.querySelector('.visibleCards').style.filter = 'blur(0px)'
    document.querySelector('.popupFilters').style.display = 'none'
}


;
</script>


<style lang="scss">

.blur {
    filter: blur(5px);
}


nav {
    background-color: #2D61AF;
    padding: 1rem 2.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        background-color: #2D61AF;
        height: 30px;
        width: 30px;
    }

    h1 {
        color: white;
        background-color: #2D61AF;
        font-size: 1.875rem;
        text-shadow: 0px 2px 3px #000000;
        background-clip: text;
    }

}

.searchBar {
    padding: 0 5%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: #2D61AF;
    padding-bottom: 1.25rem;


    input {
        height: 2.7rem;
        width: 70%;
        margin: 0 auto;
        border-radius: 1.5rem 0 0 1.5rem;
        background-image: url('../assets/glass.png');
        background-repeat: no-repeat;
        background-position: 5%;
        padding-left: 10%;
        font-size: 16px;
        border: 1px solid #2D61AF;
    }

    input::-webkit-search-cancel-button {
        padding-right: 10%;
    }

    select {
        border-left: 1px solid black;
        border-radius: 0 1.5rem 1.5rem 0;
        appearance: none;
        width: 40%;
        padding-left: 0.3rem;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 0.5rem center;
        background-size: 1.5rem;
        
    }
}

.filters {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: #2D61AF;
    padding-bottom: 1.25rem;
    margin-bottom: 1rem;
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0px 0px 0px 0px rgba(36, 26, 26, 0.10), 0px 1px 2px 0px rgba(36, 26, 26, 0.10), 0px 4px 4px 0px rgba(36, 26, 26, 0.09), 0px 10px 6px 0px rgba(36, 26, 26, 0.05), 0px 17px 7px 0px rgba(36, 26, 26, 0.01), 0px 26px 7px 0px rgba(36, 26, 26, 0.00);

    * {
        background-color: #2D61AF;
    }

    .filters-icons {
        padding-left: 2.5rem;
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 1.25rem;
    }
    
    .filters-button {

        padding-right: 2.5rem;

        button {
        padding: 0.5rem 0.75rem;
        border-radius: 1.5rem;
        border: 1px solid white;
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    }

}

.popupFilters {
    position: absolute;
    z-index: 99;
    display: none;
    top: 4rem;
    left: 0;
    right: 0;
    margin: auto;
    padding-bottom: 1rem;
    width: 90%;
    border-radius: 1rem;  
    height: fit-content;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.582);
    border: 1px solid #FFFFFF;

    * {
        background-color: #FFFFFF;
    }

    .popupFiltersWrapper {

        * {
                font-family: "Lato", sans-serif;
            }

        width: 90%;
        height: 100%;
        margin: 0 auto;
        padding-top: 0.6rem;
        

        .topupSection {

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 1.8rem;
            
            .topupLeft {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
            }

            img {
                height: auto;
                width: auto;
            }

            span {
                font-size: 1.25rem;
                font-weight: bold;
            }

            button {
                border: none;
                font-size: 0.9rem;
                color: #4E4646;
            }
        }

        .sortby {
            font-weight: bold;
            text-transform: uppercase;
        }

        .sortByAttackandDefence {
            padding-top: 0.6rem;
            display: flex;
            justify-content: space-between;

            .sortByAttack, .sortByDefence {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                gap: 1rem;
            }
        }

        .atributeFilters {
            display: flex;
            flex-flow: column;
            gap: 1rem;
             
        }
    }
}

</style>