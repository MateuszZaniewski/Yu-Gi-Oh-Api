<template>

<div class="race-filters atribute-container">
                    <div class="atribute-head"><span>Race</span></div>
                    <div class="atribute-items">
                        <button class="atribute-button" @click="raceArrayMethod" v-for="race in database.races" :key="race">
                             {{ race }}</button>
                    </div>
                </div>

</template>


<script setup>

import { defineEmits, ref } from 'vue'
import { database } from '../store/collectionDB'
import { useStore } from 'vuex';

const emits = defineEmits(['pass-race-array'])
const raceArray = ref([])

const store = useStore();

console.log(store.state.reset)

const sayHello = ref('Hello')

defineExpose({
    sayHello
})

// function that remove selected level if it is present in levelArray

const removeIfPresent = (array, item) => {
        const index = array.value.indexOf(item)
        if(index !== -1){
            array.value.splice(index,1)
        }
    }

function setdefault() {
    store.commit('setdefault')
    console.log(store.state.reset)
}

// function that takes a button text and place it in levelArray, then
// check if that level exist in levelArray (if not add it, if yes remove it)
// then change color of button to indicate its pressed
// then pass levelArray to its parent

const raceArrayMethod = () => {
    const buttonText = event.target.textContent;

    if(store.state.reset == true){
        raceArray.value = []
    }
    console.log(raceArray.value)

    if(!raceArray.value.includes(buttonText)){
        raceArray.value.push(buttonText)
    } else if(raceArray.value.includes(buttonText)) {
        removeIfPresent(raceArray, buttonText)
    }
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    setdefault()

    let passArray = () => emits('pass-race-array', raceArray)
    passArray()
}


</script>


<style lang="scss" type>


</style>