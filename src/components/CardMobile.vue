<template>
      <ul class="card__wrapper">
        <li class="card__card" v-for="card in searchByNameOrDescription.slice(startPoint,currentPage)" :key="card.id">
        <div class="uniqueCard">
  
          <div class="uniqueCard__image--wrapper">
            <img :src="card.card_images[0].image_url" alt="cardImage"/>
          </div>
  
          <div class="uniqueCard__informations--wrapper">
            <div class="cardName">
                <h2>{{ card.name }}</h2>
            </div>
            <div class="favs">
                <img class="default"  :src="store.state.favList.includes(card.name) ? Fav : notFav" />
            </div>
            
        </div>
        </div>
        </li>
      </ul>

      <section class="pagination">
        <div 
        @click="pagesToStart" 
        class="firstPage moveFar">
            <img src="../assets/firstPage.png" />
        </div>
        <div 
        @click="prevPage" 
        class="Prev moveLess">
            <img src="../assets/prev.png" />
        </div>
        <div 
        class="currentPage pages activePage">
        {{ activePage }}</div>
        <div 
        v-if="pagesLength > 1 && activePage != pagesLength" 
        class="nextPage pages">{{ activePage +1 }}</div>
        <div 
        @click="nextPage" 
        class="Next moveLess">
            <img src="../assets/next.png" />
        </div>
        <div 
        @click="pagesToEnd" 
        class="lastPage moveFar">
            <img src="../assets/lastPage.png" />
        </div>
      </section>
  
  
  </template>
  
  <script setup>
  
  import {computed, ref, watch} from 'vue'
  import { useStore } from 'vuex';
  const store = useStore();
  
  const props = defineProps({
    preFilterProp: {
      type: Array,
      required: true,
    },
    searchByWhat: {
      type: String,
      required: true
    },
    searchText: {
      type: String,
      required: true
    },
    attackFrom: {
      type: Number,
      required: false,
    },
    attackTo: {
      type: Number,
      required: false,
    },
    defenceFrom: {
      type: Number,
      required: false,
    },
    defenceTo: {
      type: Number,
      required: false,
    },
    allCards: {
      type: Boolean,
      required: false,
    },
    monsters: {
      type: Boolean,
      required: false,
    },
    spells: {
      type: Boolean,
      required: false,
    },
    traps: {
      type: Boolean,
      required: false,
    },
  });
  
  const pagesLength = ref(null)
  const startPoint = ref(0)
  const currentPage = ref(10)
  const activePage = ref(1)
  const gotoPage = ref(1)
  import monsterCardPath from '../assets/Monster.jpg'
  import spellCardPath from '../assets/SpellCard.jpg'
  import trapCardPath from '../assets/TrapCard.jpg'
  import normal from '../assets/Normal.png'
  import continous from '../assets/Continuous.png'
  import counter from '../assets/Counter.png'
  import equip from '../assets/Equip.png'
  import field from '../assets/Field.png'
  import quickplay from '../assets/Quick-play.png'
  import ritual from '../assets/Ritual.png'
  import dark from '../assets/DARK.png'
  import light from '../assets/LIGHT.png'
  import divine from '../assets/DIVINE.png'
  import earth from '../assets/EARTH.png'
  import fire from '../assets/FIRE.png'
  import water from '../assets/WATER.png'
  import wind from '../assets/WIND.png'
  import attack from '../assets/swords.png'
  import defence from '../assets/shield.png'
  import notFav from "../assets/eyeNotStarred.png"
  import Fav from "../assets/eyeAdded.png"
  
  const nextPage = () => {
    if(activePage.value + 1 <= pagesLength.value){
      currentPage.value += 10
      startPoint.value += 10
      activePage.value++
      console.log(activePage.value)
      document.documentElement.scrollTop = 0
    }
      
  } 

  const prevPage = () => {
    if(currentPage.value !== 10){
      currentPage.value -= 10
      startPoint.value -= 10
      activePage.value--
      document.documentElement.scrollTop = 0
    }
    
  }
  
  const pagesToStart = () => {
    currentPage.value = 10
    startPoint.value = 0
    activePage.value = 1
    document.documentElement.scrollTop = 0
  }
  const pagesToEnd = () => {
    activePage.value = pagesLength.value
    startPoint.value = pagesLength.value * 10 - 10
    currentPage.value = pagesLength.value * 10
    document.documentElement.scrollTop = 0
  }
  
  
  
  const searchByNameOrDescription = computed(() => {
    let filteredArray = [];
    if(store.state.allBox){
      filteredArray = props.preFilterProp.filter(card => {
        if (props.searchByWhat === 'true') {
        return card.name.toLowerCase().includes(props.searchText.toLowerCase());
      } else if (props.searchByWhat === 'false') {
        return card.desc.toLowerCase().includes(props.searchText.toLowerCase());
      }
      })
    }
    else if(store.state.monstersBox){
      filteredArray = props.preFilterProp.filter(card => {
      if (props.searchByWhat === 'true') {
        return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchByLevelOnly(card) && searchByAtributeOnly(card) && searchByMonsterTypeOnly(card) && searchByCardTypeOnly(card) && searchByAttackAndDefenceOnly(card);
      } else if (props.searchByWhat === 'false') {
        return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchByLevelOnly(card) && searchByAtributeOnly(card) && searchByMonsterTypeOnly(card) && searchByCardTypeOnly(card) && searchByAttackAndDefenceOnly(card);
      }
    });
    }
    else if(store.state.spellsBox){
      filteredArray = props.preFilterProp.filter(card => {
        if(props.searchByWhat === 'true'){
          return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('spell')
  
        } else if(props.searchByWhat === 'false') {
          return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('spell')
  
        }
      });
    }
    else if(store.state.trapsBox){
      filteredArray = props.preFilterProp.filter(card => {
        if(props.searchByWhat === 'true'){
          return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('trap')
  
        } else if(props.searchByWhat === 'false') {
          return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('trap')
  
        }
      });
    }
  
    pagesLength.value = Math.ceil(filteredArray.length/10);
    console.log(pagesLength.value)
    console.log(filteredArray)
    return store.state.ByAttackAscending ? filteredArray.sort((cardA, cardB) => cardA.atk - cardB.atk) :
           store.state.ByAttackDescending ? filteredArray.sort((cardA, cardB) => cardA.atk - cardB.atk).reverse() :
           store.state.ByDefenceAscending ? filteredArray.sort((cardA, cardB) => cardA.def - cardB.def) :
           filteredArray.sort((cardA, cardB) => cardA.def - cardB.def).reverse() 
  
  });
  
  const searchByLevelOnly = (card) => {
    const selectedLevelsArray = Array.from(store.state.selectedLevels)
    const levelsArrayLength = selectedLevelsArray.length
    
    return levelsArrayLength === 0 ? 
      store.state.levels.some(level => card.level.toString().includes(level)) : 
      selectedLevelsArray.some(level => card.level.toString().includes(level))
  };
  
  const searchByAtributeOnly = (card) => {
    const selectedAtributesArray = Array.from(store.state.selectedAtributes)
    const atributesArrayLength = selectedAtributesArray.length
  
    return atributesArrayLength === 0 ?
    store.state.atributes.some(atribute => card.attribute.includes(atribute)) :
    selectedAtributesArray.some(atribute => card.attribute.includes(atribute))
  }
  
  const searchByMonsterTypeOnly = (card) => {
    const selectedMonstersArray = Array.from(store.state.selectedMonsters)
    const monstersArrayLength = selectedMonstersArray.length
  
    return monstersArrayLength === 0 ? 
    store.state.monsters.some(race => card.race.includes(race)) :
    selectedMonstersArray.some(race => card.race.includes(race))
  }
  
  const searchByCardTypeOnly = (card) => {
    const selectedCardTypesArray = Array.from(store.state.selectedCardTypes)
    const selectedCardTypesLength = selectedCardTypesArray.length
  
    return selectedCardTypesLength === 0 ?
    store.state.types.some(type => card.type.includes(type)) :
    selectedCardTypesArray.some(type => card.type.includes(type))
  }
  
  const searchBySpellOrTrapOnly = (card) => {
    const selectedRacesArray = Array.from(store.state.selectedRaces)
    const selectedRacesLength = selectedRacesArray.length
  
    return selectedRacesLength === 0 ?
    store.state.races.some(race => card.race.includes(race)) :
    selectedRacesArray.some(race => card.race.includes(race))
  }
  
  const searchByAttackAndDefenceOnly = (card) => {
    return card.atk >= props.attackFrom && card.atk <= props.attackTo &&
           card.def >= props.defenceFrom && card.def <= props.defenceTo
  };
  
  
  watch(() => props.searchText, () => {
        startPoint.value = 0
        currentPage.value = 10
        activePage.value = 1;
      });
  
  watch([() => props.monsters, () => props.spells, () => props.allCards, () => props.traps], () => {
    gotoPage.value = 1
    startPoint.value = 0
    currentPage.value = 10
    activePage.value = 1;
  
  });
  
  
  </script>
  
  <style lang="scss">
  
  @import '@/assets/_variables.scss';
  
  *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
      background-color: #ECECEC;
    }
    
    .card__wrapper {
        display: flex;
        flex-flow: row wrap;
        gap: 1.25rem;
        justify-content: center;
        padding-bottom: 1.25rem;


        .card__card {
            display: flex;
            width: 45%;
            justify-content: center;


            .uniqueCard {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: start;

                .uniqueCard__image--wrapper {
                    width: 100%;

                    img {
                        height: 100%;
                        width: 100%;
                    }
                }

                .uniqueCard__informations--wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;

                    .cardName {
                        width: fit-content;
                    h2 {
                        font-size: 1rem;
                        text-align: left;
                        padding: 1vh 0;
                        
                        }
                    }

                    .favs {
                        width: fit-content;
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: flex-end;
                        align-items: flex-start;

                        img {
                            width: 40px;
                            height: 40px;
                        }
                    }
                    
                    
                }
            }
        }

    }


    .pagination {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        gap: 0.38rem;
        padding-bottom: 1.25rem;

        .activePage {
            background-color: #2D61AF;
            color: white;
        }

        .moveFar {
            width: 3.6875rem;
            padding: 0.3125rem 0.9375rem;
            border: 1px solid #D1D0D0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
        }

        .moveLess {
            width: 3.6875rem;
            padding: 0.3125rem 0.9375rem;
            border: 1px solid #D1D0D0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
        }

        .pages {
            width: 2.625rem;
            padding: 0.3125rem 0.9375rem;
            border: 1px solid #D1D0D0;
            font-size: 1.125rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
        }
    }

  
  </style>