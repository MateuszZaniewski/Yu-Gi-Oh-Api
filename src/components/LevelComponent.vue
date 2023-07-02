<template>

<div class="atribute-filters atribute-container">
                        <div @click="openFilter" class="atribute-head">
                            <div class="atribute-name-count">
                                <span  class="atribute-name">Level / Rank</span>
                                <div v-if="store.state.selectedLevels.length > 0" class="atribute-count-clear">
                                    <span class="atribute-count">{{ store.state.selectedLevels.length }}</span>
                                    <img class="closeWhite" src="../assets/closeWhite.png" @click="clearThisFilter">
                                </div>
                                
                            </div>
                            
                            <img :src="store.state.levelOpen ? NavigateOpen : NavigateClosed" />
                        </div>
                        <div v-show="store.state.levelOpen" class="atribute-items">
                            <button class="atribute-button LevelButton" @click="AtributeArrayMethod" v-for="level in store.state.levels" :class="isButtonActive(level)"  >{{ level }}</button>
                        </div>
                    </div>
    
    
    </template>
    
    
    <script setup>
    
    import { defineEmits} from 'vue'
    import { useStore } from 'vuex';
    const store = useStore();
    import NavigateClosed from '../assets/navigateClosed.png'
    import NavigateOpen from '../assets/navigateOpen.png'
    const emits = defineEmits(['pass-atribute-array'])
    
    const isButtonActive = (level) => {
    return store.state.selectedLevels.includes(level) ? 'active' : '';
    };


    const openFilter = () => {
        if(!event.target.classList.contains('closeWhite')){
            store.commit('openAndCloseLevelFilter')
        }
        
        const allButtons = document.querySelectorAll('.LevelButton')
        allButtons.forEach((el) => {
            if(store.state.selectedLevels.includes(el)){
                el.classList.add('active')
            }
        })
    };
    
    const AtributeArrayMethod = () => {
        const allButtons = document.querySelectorAll('.LevelButton')
        const button = event.target
        const buttonText = event.target.innerText

        button.classList.toggle('active')
        store.commit('addLevel', buttonText)
    
    };

    const clearThisFilter = () => {
        store.commit('resetLevels')
    };
    
    
    </script>
    
    
    <style lang="scss" scoped>
    
    @import '@/assets/_variables.scss';
    
    .active {
        background-color: #2D61AF;
        border: 1px solid #2D61AF;
        color: white;
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