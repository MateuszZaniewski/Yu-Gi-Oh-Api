<template>

<div class="level-filters atribute-container">
                    <div class="atribute-head"><span>Level/ Rank</span></div>
                    <div class="atribute-items">
                        <button class="atribute-button" v-for="level in store.state.levels" @click="levelArrayMethod">{{ level }}</button>
                    </div>
                </div>

</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
const emits = defineEmits(['pass-level-array'])

const levelArray = ref([])

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

    if(store.state.resetLevel == true){
        levelArray.value = []
    }

    if(!levelArray.value.includes(buttonText)){
        levelArray.value.push(buttonText)
    } else if(levelArray.value.includes(buttonText)) {
        removeIfPresent(levelArray.value, buttonText)
    }
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    store.commit('addLevel', buttonText)

    store.commit('setDefaultForLevels')

    const passArray = () => emits('pass-level-array', levelArray)
    passArray()

}


</script>

<style lang="scss" scoped>


</style>