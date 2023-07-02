<template>

    <div class="atribute-filters atribute-container">
                            <div @click="openFilter" class="atribute-head">
                                <div class="atribute-name-count">
                                    <span  class="atribute-name">Trap Type</span>
                                    <div v-if="store.state.selectedTrapTypes.length > 0" class="atribute-count-clear">
                                        <span class="atribute-count">{{ store.state.selectedTrapTypes.length }}</span>
                                        <img class="closeWhite" src="../assets/closeWhite.png" @click="clearThisFilter">
                                    </div>
                                    
                                </div>
                                
                                <img :src="store.state.trapOpen ? NavigateOpen : NavigateClosed" />
                            </div>
                            <div v-show="store.state.trapOpen" class="atribute-items">
                                <button class="atribute-button SpellButton" @click="AtributeArrayMethod" v-for="trap in store.state.trapTypes" :class="isButtonActive(trap)"  >{{ trap }}</button>
                            </div>
                        </div>
        
        
        </template>
        
        
        <script setup>
        
        import { defineEmits, ref } from 'vue'
        import { useStore } from 'vuex';
        const store = useStore();
        import NavigateClosed from '../assets/navigateClosed.png'
        import NavigateOpen from '../assets/navigateOpen.png'
        const emits = defineEmits(['pass-atribute-array'])
        
        const isButtonActive = (trap) => {
        return store.state.selectedTrapTypes.includes(trap) ? 'active' : '';
        };
    
    
        const openFilter = () => {
            if(!event.target.classList.contains('closeWhite')){
                store.commit('openAndCloseTrapFilter')
            }
            
            const allButtons = document.querySelectorAll('.TrapButton')
            allButtons.forEach((el) => {
                if(store.state.selectedTrapTypes.includes(el)){
                    el.classList.add('active')
                }
            })
        };
        
        const AtributeArrayMethod = () => {
            const allButtons = document.querySelectorAll('.TrapButton')
            const button = event.target
            const buttonText = event.target.innerText
    
            button.classList.toggle('active')
            store.commit('addTrap', buttonText)
        
        };
    
        const clearThisFilter = () => {
            store.commit('resetTraps')
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