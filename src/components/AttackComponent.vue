<template>

    <div class="atribute-filters atribute-container">
                        <div @click="openFilter" class="atribute-head"><span>Attack</span><img :src="isOpen ? NavigateOpen : NavigateClosed" /></div>
                        <div v-if="isOpen" class="atribute-items">
                            <span>From</span><input class="from" placeholder="0" /><span>To</span><input class="to" placeholder="9999"/>
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
    const isOpen = ref(false)
    
    const openFilter = () => {
        isOpen.value = !isOpen.value
    }
    
    // function that remove selected level if it is present in levelArray
    
    
    // function that takes a button text and place it in levelArray, then
    // check if that level exist in levelArray (if not add it, if yes remove it)
    // then change color of button to indicate its pressed
    // then pass levelArray to its parent
    
    const AtributeArrayMethod = () => {
        const button = event.target
        const buttonText = event.target.innerText
    
        button.classList.toggle('active')
        
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
                
            }
        
            .atribute-items {
                display: flex;
                flex-flow: row nowrap;
                gap: 1rem;
                padding-bottom: 0.6rem;
                padding-top: 1rem;
                align-items: center;
                
                .atribute-button{
                    font-size: 1rem;
                    padding: 8px 14px;
                    border-radius: 20px;
                    border: 1px solid #D9D9D9;
                }

                span {
                    font-size: 1rem;
                }

                input {
                    width: 50%;
                    border: none;
                    border-bottom: 1px solid #4E4646;
                    padding: 0.3rem 0.2rem;
                    display: flex;
                    align-items: center;
                    text-align: center;
                }

        
            }
        
        
        }
    
    
    </style>