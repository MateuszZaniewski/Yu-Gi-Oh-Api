<template>

<div class="cardtype-filters atribute-container">
                    <div class="atribute-head"><span>Card Type</span></div>
                    <div class="atribute-items">
                        <button v-for="type in types" @click="cardtypeArrayMethod"> {{ type }}</button>
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



</script>



<style lang="scss" scoped>

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