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


</style>