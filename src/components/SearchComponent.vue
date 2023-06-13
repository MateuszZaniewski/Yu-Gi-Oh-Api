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
            <!-- <div class="search-button">
                <button disabled @click="">Search</button>
            </div> -->
            <div class="clear-button">
                <button @click="resetAciveButtons(), clear()">Clear Filter</button>
            </div>
            
        </div>

        <div class="filter-field">
            <span title="Click to show/hide filters" @click="revealDropdownFilter()" class="field-head">Search Filters <span >\/</span></span>
            <div class="dropdown-filters" :style="{display: reveal}">
                <div class="simple-filters">
                    <button title="Show filters all cards" :class="{'select' : allCards}" @click="showAllFilters">All Cards</button>
                    <button title="Show filters only monster cards" :class="{'select' : monsters}" @click="showMonsterFilters">Monster Cards<img @click="expandMonsterFilters" class="downArrow" src="../assets/downArrow.png" alt="arrow" /></button>
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
                        <input v-model="attackFrom" type="number" placeholder="From"/>
                        <input v-model="attackTo" type="number" placeholder="To"/>
                    </div>
                </div>
                <div v-if="defBox" class="defence-filters atribute-container">
                    <div class="atribute-head"><span>Defence</span></div>
                    <div class="atribute-items">
                        <input v-model="defenceFrom" type="number" placeholder="From"/>
                        <input v-model="defenceTo" type="number" placeholder="To"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="additionalFilters" v-if="monsters">
            <div>
            <p>Sort by:</p>
                <input @click="sortAtkAscending" type="radio" id="attackrise" name="sorting" value="AttackRise"
                checked>
                <label for="attackrise">Attack(asc.)</label>
            </div>

            <div>
                <input @click="sortAtkDescending" type="radio" id="attackfall" name="sorting" value="AttackFall">
                <label for="attackfall">Attack(desc.)</label>
            </div>

            <div>
                <input @click="sortDefAscending" type="radio" id="defencerise" name="sorting" value="DefenceRise">
                <label for="defencerise">Defence(asc.)</label>
                </div>
            <div>
                <input @click="sortDefDescending" type="radio" id="defencefal" name="sorting" value="DefenceFall">
                <label for="defencefal">Defence(desc.)</label>
            </div>
        </div>
        
    </section>

    <Card 
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
        card.atk = 'undefined';
      }
      if (!card.hasOwnProperty('def')) {
        card.def = 'undefined';
      }
      if (!card.hasOwnProperty('level')) {
        card.level = 'undefined';
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


</script>

<style lang="scss">

@import '@/assets/_variables.scss';

* {
    background-color: #F4F9E9;
}

/* common classes */

.checked {
    background-color: $shamrockgreen;
}

.notChecked {
    background-color: $hookergreen;
}

.downArrow {
    height: 15px;
    width: 15px;
    margin-left: 15px;
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
    background-color: #284B63;
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

    .clear-button {

        button {
            padding: 0.25rem 0.5rem;
            background-color: $vinblue;
            color: white;
        }
    }

}

.filter-field {
    background-color: #284B63;
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
        background-color: #284B63;

        span {
            background-color: #284B63;
        }
    }

    .dropdown-filters {
        
        .simple-filters {
            display: flex;
            justify-content: space-around;
            padding-bottom: 0.5rem;
            background-color: #284B63;

            button {
                padding-bottom: 0.5rem;
                padding-top: 0.5rem;
                width: 20%;
                background-color: #284B63;
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

            img {
                    background-color: #284B63;
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
            background-color: #F4F9E9;

            .atribute-head {
                width: 10%;
                background-color: #284B63;
                margin: 0.25rem 0;
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                span {
                    text-align: center;
                    background-color: #284B63;
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
                background-color: #F4F9E9;

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

.additionalFilters {
    background-color: #F4F9E9;
}


</style>