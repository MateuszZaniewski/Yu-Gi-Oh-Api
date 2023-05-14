<template>

<div class="level-filters atribute-container">
                    <div class="atribute-head"><span>Level/ Rank</span></div>
                    <div class="atribute-items">
                        <button class="atribute-button" v-for="level in database.levels" @click="levelArrayMethod">{{ level }}</button>
                    </div>
                </div>

</template>

<script setup>
import { defineEmits } from 'vue'
import { database } from '../store/collectionDB'
import { useStore } from 'vuex';
const store = useStore();
const emits = defineEmits(['pass-level-array'])

const levelArray = []

function setdefault() {
    store.commit('setdefault')
    console.log(store.state.reset)
}

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

const levelArrayMethod = () => {
    const buttonText = event.target.textContent;
    if(!levelArray.includes(buttonText)){
        levelArray.push(buttonText)
    } else {
        removeIfPresent(levelArray, buttonText)
    }
    console.log(levelArray)
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    const passArray = () => emits('pass-level-array', levelArray)
    passArray()
}


</script>

<style lang="scss" scoped>


</style>