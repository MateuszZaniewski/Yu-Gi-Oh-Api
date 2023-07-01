<template>

    <div class="atribute-filters atribute-container">
                        <div @click="openFilter" class="atribute-head">
                            <div class="atribute-name-count">
                                <span  class="atribute-name">Card Type</span>
                                <div v-if="store.state.selectedMainCardTypes.length > 0" class="atribute-count-clear">
                                    <span class="atribute-count">{{ store.state.selectedMainCardTypes.length }}</span>
                                    <img src="../assets/close.png" @click="clearThisFilter">
                                </div>
                                
                            </div>
                            
                            <img :src="store.state.mainCardTypeOpen ? NavigateOpen : NavigateClosed" />
                        </div>
                        <div v-if="store.state.mainCardTypeOpen" class="atribute-items">
                            <button class="atribute-button MainCardTypeButton" @click="AtributeArrayMethod" v-for="type in store.state.mainCardTypes" >{{ type }}</button>
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
    
    const openFilter = () => {
        store.commit('openAndCloseMainCardTypeFilter')
        const allButtons = document.querySelectorAll('.MainCardTypeButton')
        allButtons.forEach((el) => {
            if(store.state.selectedMainCardTypes.includes(el)){
                el.classList.toggle('active')
            }
        })
    };
    
    // function that remove selected level if it is present in levelArray
    
    
    // function that takes a button text and place it in levelArray, then
    // check if that level exist in levelArray (if not add it, if yes remove it)
    // then change color of button to indicate its pressed
    // then pass levelArray to its parent
    
    const AtributeArrayMethod = () => {
        const allButtons = document.querySelectorAll('.MainCardTypeButton')
        const button = event.target
        const buttonText = event.target.innerText


        allButtons.forEach((el) => el.classList.remove('active'))
        button.classList.toggle('active')
        store.commit('addMainCardType', buttonText)
    
    };

    const clearThisFilter = () => {
        store.commit('resetMainCardType')
    }
    
    
    </script>


    <style lang="scss" scoped>
    
    @import '@/assets/_variables.scss';
    
    .active {
        background-color: #2D61AF;
        border: 1px solid #2D61AF;
        color: white;
    }
    
    .atribute-filters {
        padding-top: 2.5rem;
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

                .atribute-count {
                    
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