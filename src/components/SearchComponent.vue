<template>

    <section>
        <div class="search-field">
            <div class="searchbar">
                <input v-model="searchText" type="text" placeholder="Enter keyword">
                <span @click="clear">X</span>
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
                <button @click="allCards ? searchForAllCards() :
                 monsters ? searchForMonsters() :
                 spells ? searchForSpells() : searchForTraps()">Search</button>
            </div>
            
        </div>

        <div class="filter-field">
            <span @click="revealDropdownFilter()" class="field-head">Search Filters <span >\/</span></span>
            <div class="dropdown-filters" :style="{display: reveal}">
                <div class="simple-filters">
                    <button @click="showAllFilters(), searchForAllCards()">All Cards</button>
                    <button @click="showMonsterFilters(), searchForMonsters()">Monster Cards</button>
                    <button @click="showSpellFilter(), searchForSpells()">Spell Cards</button>
                    <button @click="showTrapsFilter(), searchForTraps()">Trap Cards</button>
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

    

</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import LevelComponent from './LevelComponent.vue'
import CardTypeComponent from './CardTypeComponent.vue';
import MonsterTypeComponent from './MonsterTypeComponent.vue'
import RaceComponent from './RaceComponent.vue'
import AtributeComponent from './AtributeComponent.vue'

const searchText = ref('')
const reveal = ref('block')
const cards = ref([]);

const allCards = ref(true)
const monsters = ref(false)
const spells = ref(false)
const traps = ref(false)


const atributeBox = ref(true)
const raceBox = ref(true)
const monsterTypeBox = ref(true)
const cardTypeBox = ref(true)
const levelBox = ref(true)
const atkBox = ref(true)
const defBox = ref(true)

let levelArray = []
let cardTypeArray = []
let monstertypeArray = []
let raceArray = []
let atributeArray = []

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
    atributeBox.value = true
    raceBox.value = true
    monsterTypeBox.value = true
    cardTypeBox.value = true
    levelBox.value = true
    atkBox.value = true
    defBox.value = true
    allCards.value = true
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



const handleLevelArray = (array) => {
      console.log('Received array from levelComponent.vue:', array);
      levelArray = array
    }

const handleCardtypeArray = (array) => {
    console.log('Recived array from cardTypeComponent.vue:', array)
    cardTypeArray = array
}

const handleMonstertypeArray = (array) => {
    console.log('Recived array from MonsterTypeComponent.vue', array)
    monstertypeArray = array
}

const handleRaceArray = (array) => {
    console.log('Recived array from RaceArrayComponent.vue', array)
    raceArray = array
}

const handleAtributeArray = (array) => {
    console.log('Recived array from AtributeComponent.vue', array)
    atributeArray = array
}



// fetching cards from api = > https://db.ygoprodeck.com/api/v7/cardinfo.php

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





const searchForAllCards = () => {
    const preFilter = cards.value.filter(card => card.type.toLowerCase().includes(''))
    console.log(preFilter)
}

const searchForMonsters = () => {
    const preFilter = cards.value.filter(card => card.type.toLowerCase().includes('monster'))

    const filterByLevel = levelArray.length > 0 ? preFilter.filter(card => {
        for(let i = 0; i < levelArray.length; i++){
            if(card.level == levelArray[i]) {
                return true
            }
        }
    }) : preFilter

    const filterByAttribute = atributeArray > 0 ? filterByLevel.filter(card => {
        for(let i = 0; i < atributeArray.length; i++){
            if(card.attribute.toLowerCase().includes(atributeArray[i].toLowerCase())) {
                return true
            }
        }
    }) : filterByLevel

    console.log(filterByAttribute)
}

const searchForSpells = () => {
    const preFilter = cards.value.filter(card => card.type.toLowerCase().includes('spell')).filter(card => {
        if(raceArray.length > 0){
            for(let i = 0; i < raceArray.length; i++){
                if(card.race == raceArray[i]){
                    return true
                }
            }
        }
    })
    console.log(preFilter)

}

const searchForTraps = () => {
    const preFilter = cards.value.filter(card => card.type.toLowerCase().includes('trap')).filter(card => {
        if(raceArray.length > 0){
            for(let i = 0; i < raceArray.length; i++){
                if(card.race == raceArray[i]){
                    return true
                }
            }
        }
    })
    console.log(preFilter) 
}



const searchCards = () => {
    console.log(levelArray)
    if(levelArray.length > 0) {
        const filteredCards = cards.value.filter(card => 
          card.type.toLowerCase().includes('monster')).filter(card => {
            for(let i = 0; i < levelArray.length; i++){
                if(card.level == levelArray[i]){
                    return true
                }
            }
        })
        console.log(filteredCards)

    }
  
}




// $vista : #8ea4d2;
// $glacious : #6279B8;
// $vinblue : #49516F;
// $hookergreen : #496F5D;
// $shamrockgreen : #4C9F70

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
                border-bottom: 1px solid transparent;
                padding-bottom: 0.5rem;
                padding-top: 0.5rem;
                width: 25%;
                background-color: #2b4570;
                border: none;
                border-bottom: 5px solid #2b4570;
                color: white;
                cursor: pointer;
            }

            button:hover {
                border-bottom: 5px solid orange;
                font-weight: bold;
            }
            
            button:active {
                border-bottom: 1px solid orange;
                font-weight: bold;
            }
        }

        .atribute-container {
            display: flex;
            flex-flow: row nowrap;
            background-color: white;
            gap: 5px;
            padding-bottom: 15px;

            .atribute-head {
                width: 10%;
                background-color: $glacious;
                margin: 0.25rem 0;
                display: flex;
                align-items: center;
                justify-content: center;

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