<template>

    <div @click="checkInputFrom(), checkInputTo() " v-if="store.state.selectedMainCardTypes.includes('Monster Cards')" class="atribute-filters atribute-container">
                        <div @click="openFilter" class="atribute-head"><span>Defence</span></div>
                        <div  class="atribute-items">
                            <span>From</span>
                            <input v-model="defenceFrom" class="from" placeholder="0"  type="number"/>
                            <span>To</span>
                            <input v-model="defenceTo" class="to" placeholder="9999" type="number"/>
                        </div>
                    </div>
    
    
    </template>
    
    
    <script setup>
    
    import { ref } from 'vue'
    import { useStore } from 'vuex';
    const store = useStore();
    const defenceFrom = ref(0)
    const defenceTo = ref(9999)
    
    const openFilter = () => {
        store.commit('openAndCloseDefenceFilter')
    }

    const checkInputFrom = () => {
        console.log(defenceFrom.value)
        store.commit('handleDefenceFrom', defenceFrom.value)
        
    }
    const checkInputTo = () => {
        console.log(defenceTo.value)
        store.commit('handleDefenceTo', defenceTo.value)
        
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