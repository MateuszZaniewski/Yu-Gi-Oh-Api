<template>

    <section>
        <div class="search-field">
            <div class="searchbar">
                <input v-model="searchText" type="text" placeholder="Enter keyword">
                <span @click="clear">X</span>
            </div>
            <div>
            <div class="search-type-select">
                <select v-model="searchByName">
                    <option value="true" selected>Search by Card Name</option>
                    <option value="false">Search by Card Text</option>
                </select>
            </div>
            </div>
            <div class="search-button">
                <button @click="allCards ? searchForAllCards() :
                 monsters ? searchForMonsters() :
                 spells ? searchForSpells() : searchForTraps(), updateChild()">Search</button>
            </div>
            <div class="clear-button">
                <button @click="resetFilter(), resetFunction()">Clear Filter</button>
            </div>
            
        </div>

        <div class="filter-field">
            <span title="Click to show/hide filters" @click="revealDropdownFilter()" class="field-head">Search Filters <span >\/</span></span>
            <div class="dropdown-filters" :style="{display: reveal}">
                <div class="simple-filters">
                    <button title="Show filters all cards" :class="{'select' : allCards}" @click="showAllFilters">All Cards</button>
                    <button title="Show filters only monster cards" :class="{'select' : monsters}" @click="showMonsterFilters">Monster Cards</button>
                    <button title="Show filters only spell cards" :class="{'select' : spells}" @click="showSpellFilter">Spell Cards</button>
                    <button title="Show filters only trap cards" :class="{'select' : traps}" @click="showTrapsFilter">Trap Cards</button>
                </div>
                
                <AtributeComponent v-if="atributeBox" @pass-atribute-array="handleAtributeArray" />

                <RaceComponent v-if="raceBox" @pass-race-array="handleRaceArray"/>

                <MonsterTypeComponent v-if="monsterTypeBox" @pass-monstertype-array="handleMonstertypeArray"/>

                <CardTypeComponent v-if="cardTypeBox" @pass-cardtype-array="handleCardtypeArray" />

                <LevelComponent v-if="levelBox" @pass-level-array="handleLevelArray" />

                <div v-if="atkBox" class="attack-filters atribute-container">
                    <div class="atribute-head"><span>Attack</span></div>
                    <div class="atribute-items">
                        <input type="number" placeholder="From"/>
                        <input type="number" placeholder="To"/>
                    </div>
                </div>
                <div v-if="defBox" class="defence-filters atribute-container">
                    <div class="atribute-head"><span>Defence</span></div>
                    <div class="atribute-items">
                        <input type="number" placeholder="From"/>
                        <input type="number" placeholder="To"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

    <button @click="consoleFilters">Pokaż obecne filtry</button>

    <Card :preFilterProp="preFilter" :allCardsVal="allCards" :searchByWhat="searchByName" :searchText="searchText" :levelArray.sync="levelArray"/>

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import LevelComponent from './LevelComponent.vue'
import CardTypeComponent from './CardTypeComponent.vue';
import MonsterTypeComponent from './MonsterTypeComponent.vue'
import RaceComponent from './RaceComponent.vue'
import AtributeComponent from './AtributeComponent.vue'
import Card from './Card.vue'
import { useStore } from 'vuex';
const store = useStore();


const searchText = ref('')
const reveal = ref('block')
const cards = ref([]);
let searchByName = ref('true')


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


const preFilter = computed(() => {
  return cards.value
})


// methods //
const clear = () => {
    searchText.value = ''
}

const revealDropdownFilter = () => {
    if(reveal.value == 'block') {
        reveal.value = 'none'
    } else {
        reveal.value = 'block'
    }
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
}

const showMonsterFilters = () => {
    atributeBox.value = true
    raceBox.value = false
    monsterTypeBox.value = true
    cardTypeBox.value = true
    levelBox.value = true
    atkBox.value = true
    defBox.value = true
    allCards.value = false
    monsters.value = true
    spells.value = false
    traps.value = false
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
}

const setDefaultforArrays = () => {
    if(levelArray.length == 0){levelArray = store.state.levels}
    if(cardTypeArray.length == 0){cardTypeArray = store.state.types}
    if(monstertypeArray == 0){monstertypeArray = store.state.monsters}
    if(raceArray.length == 0){raceArray = store.state.races}
    if(atributeArray.length == 0){atributeArray = store.state.atributes}
}

setDefaultforArrays



const handleLevelArray = (array) => {
      console.log('Received array from levelComponent.vue:', array);
      levelArray = array.value
      console.log(Array.from(levelArray))
    }

const handleCardtypeArray = (array) => {
    console.log('Recived array from cardTypeComponent.vue:', array)
    cardTypeArray = array.value
    console.log(Array.from(cardTypeArray))
}

const handleMonstertypeArray = (array) => {
    console.log('Recived array from MonsterTypeComponent.vue', array)
    monstertypeArray = array.value
    console.log(Array.from(monstertypeArray))
}

const handleRaceArray = (array) => {
    console.log('Recived array from RaceArrayComponent.vue', array)
    raceArray = array.value
    console.log(Array.from(raceArray))

}

const handleAtributeArray = (array) => {
    console.log('Recived array from AtributeComponent.vue', array)
    
    atributeArray = array.value
    console.log(Array.from(atributeArray))
}


const consoleFilters = () => {
    console.log('Atributes : ', atributeArray)
    console.log('Races : ', raceArray)
    console.log('Monsters : ', monstertypeArray)
    console.log('Types : ', cardTypeArray)
    console.log('Levels : ', levelArray)
}


// fetching cards from api = > https://db.ygoprodeck.com/api/v7/cardinfo.php

const fetchCards = async () => {
    try {
      const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
      cards.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  onMounted(() => {
    fetchCards();
  });


function resetFunction() {
  store.commit('resetAllFilters');
}

const resetFilter = () => {
    console.log('Filtr został zresetowany')
    const buttons = document.querySelectorAll('.atribute-button')
    buttons.forEach((button) => {
        if(button.style.backgroundColor == 'rgb(76, 159, 112)'){
            button.style.backgroundColor = 'rgb(73, 111, 93)'
        }  
    })
    // call reset function - commit from store
    resetFunction

    if(store.state.atributes && store.state.races && store.state.monsters && store.state.types && store.state.levels){
        raceArray = store.state.races
        atributeArray = store.state.atributes
        monstertypeArray = store.state.monsters
        cardTypeArray = store.state.types
        levelArray = store.state.levels
    }

};


</script>

<style lang="scss">

@import '@/assets/_variables.scss';

/* common classes */

.checked {
    background-color: $shamrockgreen;
}

.notChecked {
    background-color: $hookergreen;
}

section {
    max-width: 1000px;
    margin: 0 auto;
}

.search-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    background-color: $vista;
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
            cursor: pointer;
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

    .clear-button {

        button {
            padding: 0.25rem 0.5rem;
            background-color: $vinblue;
            color: white;
        }
    }

}

.filter-field {
    background-color: #2b4570;
    position: relative;
    display: flex;
    justify-content: center;
    color: white;
    flex-flow: column nowrap;

    .field-head{
        margin: 0;
        padding: 3vh 0;
        text-align: center;
        cursor: pointer;
        border: 1px solid $glacious;
    }

    .dropdown-filters {
        
        .simple-filters {
            display: flex;
            justify-content: space-around;
            padding-bottom: 0.5rem;

            button {
                padding-bottom: 0.5rem;
                padding-top: 0.5rem;
                width: 15%;
                background-color: #2b4570;
                border-top: none;
                border-right: none;
                border-left: none;
                border-bottom: none;
                color: white;
                cursor: pointer;
            }

            .select {
                border-bottom: 2px solid orange;
            }

            button:hover {
                border-bottom: 2px solid orange;
                font-weight: bold;
            }
        }

        .atribute-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            background-color: white;
            gap: 5px;
            padding-bottom: 15px;

            .atribute-head {
                width: 10%;
                background-color: $glacious;
                margin: 0.25rem 0;
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                span {
                    text-align: center;
                }

                .reset{
                    color: #f52424;
                    padding-left: 2px;
                    padding-right: 2px;
                    margin: 0;
                    cursor: pointer;
                }

            }

            .atribute-items {
                width: 90%;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 0.25rem 0;
                color: black;
                align-items: center;

                button {
                    display: flex;
                    align-items: center;
                    color: white;
                    background-color: $hookergreen;
                    justify-content: center;
                    border: 1px solid green;
                    width: 13%;
                }

                button:hover {
                    background-color: $shamrockgreen;
                    cursor: pointer;
                }

                button:active {
                    background-color: $shamrockgreen;
                }
            }

        }
    }
}


</style>