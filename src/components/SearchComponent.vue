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
                <button>Search</button>
            </div>
            
        </div>

        <div class="filter-field">
            <span @click="revealDropdownFilter()" class="field-head">Search Filters <span >\/</span></span>
            <div class="dropdown-filters" :style="{display: reveal}">
                <div class="simple-filters">
                    <button @click="showAllFilters">All Cards</button>
                    <button @click="showMonsterFilters">Monster Cards</button>
                    <button @click="showSpellandTrapsFilter">Spell Cards</button>
                    <button @click="showSpellandTrapsFilter">Trap Cards</button>
                </div>
                <div v-if="atributeBox" class="atribute-filters atribute-container">
                    <div class="atribute-head"><span>Attribute</span></div>
                    <div class="atribute-items">
                        <button ><img :src="DARK"/>DARK</button>
                        <button ><img :src="LIGHT"/>LIGHT</button>
                        <button ><img :src="EARTH"/>EARTH</button>
                        <button ><img :src="WATER"/>WATER</button>
                        <button ><img :src="FIRE"/>FIRE</button>
                        <button ><img :src="WIND"/>WIND</button>
                        <button ><img :src="DIVINE"/>DIVINE</button>
                    </div>
                </div>
                <div v-if="raceBox" class="race-filters atribute-container">
                    <div class="atribute-head"><span>Race</span></div>
                    <div class="atribute-items">
                        <button ><img :src="Equip" />Equip</button>
                        <button ><img :src="Field" />Field</button>
                        <button ><img :src="QuickPlay" />Quick-spell</button>
                        <button ><img :src="Ritual" />Ritual</button>
                        <button ><img :src="Continuous" />Continous</button>
                        <button ><img :src="Counter" />Counter</button>
                        <button >Normal</button>
                    </div>
                </div>
                <div v-if="monsterTypeBox" class="type-filters atribute-container">
                    <div class="atribute-head"><span>Monster Type</span></div>
                    <div class="atribute-items">
                        <button >Spellcaster</button>
                        <button >Dragon</button>
                        <button >Zombie</button>
                        <button >Warrior</button>
                        <button >Beast-Warrior</button>
                        <button >Beast</button>
                        <button >Winged Beast</button>
                        <button >Fiend</button>
                        <button >Fairy</button>
                        <button >Insect</button>
                        <button >Dinosaur</button>
                        <button >Reptile</button>
                        <button >Fish</button>
                        <button >Sea Serpent</button>
                        <button >Aqua</button>
                        <button >Pyro</button>
                        <button >Thunder</button>
                        <button >Rock</button>
                        <button >Plant</button>
                        <button >Machine</button>
                        <button >Psychic</button>
                        <button >Divine-Beast</button>
                        <button >Wyrm</button>
                        <button >Cyberse</button>
                        <button >Creator-God</button>
                    </div>
                </div>
                <div v-if="cardTypeBox" class="cardtype-filters atribute-container">
                    <div class="atribute-head"><span>Card Type</span></div>
                    <div class="atribute-items">
                        <button >Normal</button>
                        <button >Effect</button>
                        <button >Ritual</button>
                        <button >Fusion</button>
                        <button >Synchro</button>
                        <button >XYZ</button>
                        <button >Pendulum</button>
                        <button >Link</button>
                        <button >Toon</button>
                        <button >Spirit</button>
                        <button >Union</button>
                        <button >Gemini</button>
                        <button >Tuner</button>
                        <button >Flip</button>
                    </div>
                </div>
                <div v-if="levelBox" class="level-filters atribute-container">
                    <div class="atribute-head"><span>Level/ Rank</span></div>
                    <div class="atribute-items">
                        <button @click="levelArrayMethod">0</button>
                        <button @click="levelArrayMethod">1</button>
                        <button @click="levelArrayMethod">2</button>
                        <button @click="levelArrayMethod">3</button>
                        <button @click="levelArrayMethod">4</button>
                        <button @click="levelArrayMethod">5</button>
                        <button @click="levelArrayMethod">6</button>
                        <button @click="levelArrayMethod">7</button>
                        <button @click="levelArrayMethod">8</button>
                        <button @click="levelArrayMethod">9</button>
                        <button @click="levelArrayMethod">10</button>
                        <button @click="levelArrayMethod">11</button>
                        <button @click="levelArrayMethod">12</button>
                        <button @click="levelArrayMethod">13</button>
                    </div>
                </div>
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

import { ref, computed } from 'vue';
import DARK from '../assets/DARK.png';
import LIGHT from '../assets/LIGHT.png';
import DIVINE from '../assets/DIVINE.png';
import EARTH from '../assets/EARTH.png';
import FIRE from '../assets/FIRE.png';
import WATER from '../assets/WATER.png';
import WIND from '../assets/WIND.png';

import Counter from '../assets/Counter.png';
import Continuous from '../assets/Continuous.png';
import QuickPlay from '../assets/Quick-Play.png';
import Field from '../assets/Field.png';
import Ritual from '../assets/Ritual.png';
import Equip from '../assets/Equip.png';

import Level from '../assets/level.png';
import Atk from '../assets/swords.png';
import Def from '../assets/shield.png';



const searchText = ref('')
const reveal = ref('block')

const atributeBox = ref(true)
const raceBox = ref(true)
const monsterTypeBox = ref(true)
const cardTypeBox = ref(true)
const levelBox = ref(true)
const atkBox = ref(true)
const defBox = ref(true)


const textArray = ['123', '444', '33412', '47770', '8972']
console.log(textArray)

// methods //
const clear = () => {
    searchText.value = ''
}

const removeIfPresent = (array, item) => {
        const index = array.indexOf(item)
        if(index !== -1){
            array.splice(index,1)
        }
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
}

const showMonsterFilters = () => {
    atributeBox.value = true
    raceBox.value = false
    monsterTypeBox.value = true
    cardTypeBox.value = true
    levelBox.value = true
    atkBox.value = true
    defBox.value = true
}

const showSpellandTrapsFilter = () => {
    atributeBox.value = false
    raceBox.value = true
    monsterTypeBox.value = false
    cardTypeBox.value = false
    levelBox.value = false
    atkBox.value = false
    defBox.value = false
}

const levelArray = []
const levelArrayMethod = () => {
    const buttonText = event.target.textContent;
    if(!levelArray.includes(buttonText)){
        levelArray.push(buttonText)
    } else {
        removeIfPresent(levelArray, buttonText)
    }
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    const filterByLevel = () => {
        return textArray.filter(item => {
            for(let i = 0; i < levelArray.length; i++){
                if(item.includes(levelArray[i])){
                    return true
                }
            }
            return false
        })
    }
    console.log(levelArray)
    console.log(filterByLevel())
}
// $vista : #8ea4d2;
// $glacious : #6279B8;
// $vinblue : #49516F;
// $hookergreen : #496F5D;
// $shamrockgreen : #4C9F70

</script>

<style lang="scss" scoped>

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
                background-color: $vista;
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