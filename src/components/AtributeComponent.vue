<template>

<div class="atribute-filters atribute-container">
                        <div @click="!isSpellCardSelected && !isTrapCardSelected && openFilter()" class="atribute-head" 
                        :class="{'disabled' : (isSpellCardSelected || isTrapCardSelected)}">
                            <div class="atribute-name-count">
                                <span  class="atribute-name">Attribute</span>
                                <div v-if="store.state.selectedAtributes.length > 0" class="atribute-count-clear">
                                    <span class="atribute-count">{{ store.state.selectedAtributes.length }}</span>
                                    <img class="closeWhite" src="../assets/closeWhite.png" @click="clearThisFilter">
                                </div>
                                
                            </div>
                            
                            <img :src="store.state.attributeOpen ? NavigateOpen : isSpellCardSelected ? NavigateClosedDisabled : isTrapCardSelected ? NavigateClosedDisabled : NavigateClosed " />
                            
                        </div>
                        <div v-show="store.state.attributeOpen" class="atribute-items">
                            <button class="atribute-button AtributeButton" @click="AtributeArrayMethod" v-for="atribute in store.state.atributes" :class="isButtonActive(atribute)"  >{{ atribute }}</button>
                        </div>
                    </div>
</template>


<script setup>

import { defineEmits, ref, computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
import NavigateClosed from '../assets/navigateClosed.png'
import NavigateOpen from '../assets/navigateOpen.png'
import NavigateClosedDisabled from '../assets/NavigateClosedDisabled.png'
const emits = defineEmits(['pass-atribute-array'])

const isButtonActive = (atribute) => {
    return store.state.selectedAtributes.includes(atribute) ? 'active' : '';
    };


    const openFilter = () => {
        if(!event.target.classList.contains('closeWhite')){
            store.commit('openAndCloseAttributeFilter')
        }
        
        const allButtons = document.querySelectorAll('.AtributeButton')
        allButtons.forEach((el) => {
            if(store.state.selectedAtributes.includes(el)){
                el.classList.add('active')
            }
        })
    };
    
    const AtributeArrayMethod = () => {
        const allButtons = document.querySelectorAll('.AtributeButton')
        const button = event.target
        const buttonText = event.target.innerText

        button.classList.toggle('active')
        store.commit('addAtribute', buttonText)
    
    };

    const clearThisFilter = () => {
        store.commit('resetAtributes')
    };

    const isSpellCardSelected = computed(() => {
            return store.state.selectedMainCardTypes.includes('Spell Cards');
        })

    const isTrapCardSelected = computed(() => {
        return store.state.selectedMainCardTypes.includes('Trap Cards');
    })


</script>


<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.active {
        background-color: #2D61AF;
        border: 1px solid #2D61AF;
        color: white;
    }

    .disabled {
            color : #D9D9D9;
    }

    .enabled {
            color : black;
    }
    
    .atribute-filters {
        padding-bottom: 0.4rem;
        border-bottom: 1px solid #AAA0A0;
    
        .atribute-head {
            display: flex;
            align-items: center;
            justify-content: space-between;


            .atribute-name-count {
                display: flex;
                gap: 1rem;

                .atribute-count-clear {
                    background-color: #2D61AF;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.75rem;
                    * {
                        background-color: #2D61AF;
                    }

                    border: 1px solid #2D61AF;
                    border-radius: 1.25rem;
                    padding: 0.25rem 0.625rem;

                    img {
                        width: 0.9375rem;
                        height: 0.9375rem;
                    }
                }
            }
            
        }
    
        .atribute-items {
            display: flex;
            flex-flow: row wrap;
            gap: 1rem;
            padding-bottom: 0.6rem;
            padding-top: 1rem;
            
            .atribute-button{
                font-size: 1rem;
                padding: 8px 14px;
                border-radius: 20px;
                border: 1px solid #D9D9D9;
            }
    
        }
    
    
    }


</style>