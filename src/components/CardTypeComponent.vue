<template>

<div class="cardtype-filters atribute-container">
                    <div class="atribute-head"><span>Card Type</span><span @click="resetFilter" class="reset">X</span></div>
                    <div class="atribute-items">
                        <button class="atribute-button" v-for="type in types" @click="cardtypeArrayMethod"> {{ type }}</button>
                    </div>
                </div>

</template>


<script setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['pass-cardtype-array'])

const types = ['Normal', 'Effect', 'Ritual', 'Fusion', 'Synchro', 'XYZ', 'Pendulum', 'Link', 'Toon', 'Spirit' , 'Union' , 'Gemini' , 'Tuner', 'Flip']

const cardArray = []

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

    const cardtypeArrayMethod = () => {
    const buttonText = event.target.textContent;
    if(!cardArray.includes(buttonText)){
        cardArray.push(buttonText)
    } else {
        removeIfPresent(cardArray, buttonText)
    }
    console.log(cardArray)
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    const passArray = () => emits('pass-cardtype-array', cardArray)
    passArray()
}

const resetFilter = () => {
    console.log('Filtr został zresetowany')
    const buttons = document.querySelectorAll('.atribute-button')
    buttons.forEach((button) => {
        if(button.style.backgroundColor == 'rgb(76, 159, 112)'){
            button.style.backgroundColor = 'rgb(73, 111, 93)'
            cardArray.value = types
        }
    })
}



</script>



<style lang="scss" scoped>

</style>