<template>

<div class="race-filters atribute-container">
                    <div class="atribute-head"><span>Race</span></div>
                    <div class="atribute-items">
                        <button @click="raceArrayMethod" v-for="race in races" :key="race">
                             {{ race }}</button>
                        
                        <button >Normal</button>
                    </div>
                </div>


</template>


<script setup>

import { defineEmits } from 'vue'

const emits = defineEmits(['pass-race-array'])
const races = ['Equip', 'Field', 'QuickPlay', 'Ritual', 'Continuous', 'Counter']

const raceArray = []


// function that remove selected level if it is present in levelArray

const removeIfPresent = (array, item) => {
        const index = array.indexOf(item)
        if(index !== -1){
            array.splice(index,1)
        }
    }

// function that takes a button text and place it in levelArray, then
// check if that level exist in levelArray (if not add it, if yes remove it)
// then change color of button to indicate its pressed
// then pass levelArray to its parent

const raceArrayMethod = () => {
    const buttonText = event.target.textContent;
    if(!raceArray.includes(buttonText)){
        raceArray.push(buttonText)
    } else {
        removeIfPresent(raceArray, buttonText)
    }
    console.log(raceArray)
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    const passArray = () => emits('pass-race-array', raceArray)
    passArray()
}


</script>


<style lang="scss" type>

@import '@/assets/_variables.scss';
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



</style>