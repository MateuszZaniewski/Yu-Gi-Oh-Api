<template>

<div class="cardtype-filters atribute-container">
                    <div class="atribute-head"><span>Card Type</span></div>
                    <div class="atribute-items">
                        <button class="atribute-button" v-for="type in store.state.types" @click="cardtypeArrayMethod"> {{ type }}</button>
                    </div>
                </div>

</template>


<script setup>
import { defineEmits, ref  } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
const emits = defineEmits(['pass-cardtype-array'])

const cardArray = ref([])

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

    if(store.state.resetType == true){
        cardArray.value = []
    }

    if(!cardArray.value.includes(buttonText)){
        cardArray.value.push(buttonText)
    } else if(cardArray.value.includes(buttonText)) {
        removeIfPresent(cardArray.value, buttonText)
    }
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    store.commit('addCardType', buttonText)

    store.commit('setDefaultForTypes')

    const passArray = () => emits('pass-cardtype-array', cardArray)
    passArray()

    console.log(Array.from(store.state.selectedCardTypes))
}


</script>



<style lang="scss" scoped>

</style>