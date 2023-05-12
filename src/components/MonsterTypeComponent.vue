<template>

<div class="type-filters atribute-container">
                    <div class="atribute-head"><span>Monster Type</span></div>
                    <div class="atribute-items">
                        <button class="atribute-button" @click="monstertypeArrayMethod" v-for="type in database.types" >{{ type }}</button>
                    </div>
                </div>


</template>



<script setup>

import { defineEmits } from 'vue'
import { database } from '../store/collectionDB'

const emits = defineEmits(['pass-monstertype-array'])

const monstertypeArray = []

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

const monstertypeArrayMethod = () => {
    const buttonText = event.target.textContent;
    if(!monstertypeArray.includes(buttonText)){
        monstertypeArray.push(buttonText)
    } else {
        removeIfPresent(monstertypeArray, buttonText)
    }
    console.log(monstertypeArray)
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    const passArray = () => emits('pass-monstertype-array', monstertypeArray)
    passArray()
}

</script>


<style lang="scss" scoped>


</style>