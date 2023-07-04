<template>

<div class="atribute-filters atribute-container">
                        <div @click="!isMonsterCardSelected && !isTrapCardSelected && openFilter()" class="atribute-head" 
                             :class="{'disabled' : isMonsterCardSelected,
                                     'enabled' : !isMonsterCardSelected,
                                     'disabled' : isTrapCardSelected,
                                     'enabled' : !isTrapCardSelected}">
                            <div class="atribute-name-count">
                                <span :class="{'disabled' : isMonsterCardSelected || isTrapCardSelected}"  class="atribute-name">Spell Type</span>
                                <div v-if="store.state.selectedSpellTypes.length > 0" class="atribute-count-clear">
                                    <span class="atribute-count">{{ store.state.selectedSpellTypes.length }}</span>
                                    <img class="closeWhite" src="../assets/closeWhite.png" @click="clearThisFilter">
                                </div>
                                
                            </div>
                            
                            <img :src="store.state.spellOpen && !isMonsterCardSelected && !isTrapCardSelected ? NavigateOpen : !store.state.spellOpen && !isMonsterCardSelected && !isTrapCardSelected ? NavigateClosed : NavigateClosedDisabled"/>
                        </div>
                        <div v-show="store.state.spellOpen" class="atribute-items">
                            <button class="atribute-button SpellButton" @click="AtributeArrayMethod" v-for="spell in store.state.spellTypes" :class="isButtonActive(spell)"  >{{ spell }}</button>
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
    
    const isButtonActive = (spell) => {
    return store.state.selectedSpellTypes.includes(spell) ? 'active' : '';
    };


    const openFilter = () => {
        if(!event.target.classList.contains('closeWhite')){
            store.commit('openAndCloseSpellFilter')
        }
        
        const allButtons = document.querySelectorAll('.SpellButton')
        allButtons.forEach((el) => {
            if(store.state.selectedSpellTypes.includes(el)){
                el.classList.add('active')
            }
        })
    };
    
    const AtributeArrayMethod = () => {
        const allButtons = document.querySelectorAll('.SpellButton')
        const button = event.target
        const buttonText = event.target.innerText

        button.classList.toggle('active')
        store.commit('addSpell', buttonText)
    
    };

    const clearThisFilter = () => {
        store.commit('resetSpells')
    };

    const isMonsterCardSelected = computed(() => {
            return store.state.selectedMainCardTypes.includes('Monster Cards');
        })

    const isTrapCardSelected = computed (() => {
            return store.state.selectedMainCardTypes.includes('Trap Cards')
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