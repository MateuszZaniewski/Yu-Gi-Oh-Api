<template>

<div class="atribute-filters atribute-container">
                    <div class="atribute-head"><span>Attribute</span></div>
                    <div class="atribute-items">
                        <button class="atribute-button" @click="AtributeArrayMethod" v-for="atribute in store.state.atributes" >{{ atribute }}</button>
                    </div>
                </div>


</template>


<script setup>

import { defineEmits, ref } from 'vue'
import { useStore } from 'vuex';
const store = useStore();

const emits = defineEmits(['pass-atribute-array'])

const atributeArray = ref([])


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

const AtributeArrayMethod = () => {
    const buttonText = event.target.textContent;

    if(store.state.resetAtribute == true){
        atributeArray.value = []
    }

    if(!atributeArray.value.includes(buttonText)){
        atributeArray.value.push(buttonText)
    } else if(atributeArray.value.includes(buttonText)){
        removeIfPresent(atributeArray.value, buttonText)
    }
    
    // change color for click
    const color = event.target.style.backgroundColor
    event.target.style.backgroundColor = '#4C9F70'

    // change color for unclick
    if(color == 'rgb(76, 159, 112)') {
        event.target.style.backgroundColor = '#496F5D'
    }

    store.commit('addAtribute', buttonText)

    store.commit('setDefaultForAtributes')

    const passArray = () => emits('pass-atribute-array', atributeArray)
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
                justify-content: space-around;

                .reset{
                    color: #f52424;
                    padding-left: 2px;
                    padding-right: 2px;
                    margin: 0;
                    cursor: pointer;
                }
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