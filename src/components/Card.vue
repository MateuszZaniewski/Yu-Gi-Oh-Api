<template>
    <ul>
      <li v-for="card in searchByNameOrDescription.slice(0,30)" :key="card.id">
      <div class="uniqueCard">
        <div>{{ card.name }}</div>
        <div>{{ card.attribute }}</div>
        <div>{{ card.race }}</div>
      </div>
      </li>
    </ul>

    <button @click="show">SHow</button>
</template>

<script setup>

import {computed} from 'vue'
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
  }
});

const searchByNameOrDescription = computed(() => {
  if(store.state.allBox){
    return props.preFilterProp.filter(card => {
      if (props.searchByWhat === 'true') {
      return card.name.toLowerCase().includes(props.searchText.toLowerCase());
    } else if (props.searchByWhat === 'false') {
      return card.desc.toLowerCase().includes(props.searchText.toLowerCase());
    }
    })
  }
  else if(store.state.monstersBox){
    return props.preFilterProp.filter(card => {
    if (props.searchByWhat === 'true') {
      return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchByLevelOnly(card) && searchByAtributeOnly(card) && searchByMonsterTypeOnly(card) && searchByCardTypeOnly(card) && searchByAttackAndDefenceOnly(card);
    } else if (props.searchByWhat === 'false') {
      return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchByLevelOnly(card) && searchByAtributeOnly(card) && searchByMonsterTypeOnly(card) && searchByCardTypeOnly(card) && searchByAttackAndDefenceOnly(card);
    }
  });
  }
  else if(store.state.spellsBox){
    return props.preFilterProp.filter(card => {
      if(props.searchByWhat === 'true'){
        return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('spell')

      } else if(props.searchByWhat === 'false') {
        return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('spell')

      }
    });
  }
  else if(store.state.trapsBox){
    return props.preFilterProp.filter(card => {
      if(props.searchByWhat === 'true'){
        return card.name.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('trap')

      } else if(props.searchByWhat === 'false') {
        return card.desc.toLowerCase().includes(props.searchText.toLowerCase()) && searchBySpellOrTrapOnly(card) && card.type.toLowerCase().includes('trap')

      }
    });
  }
  
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
}

const show = () => {
  searchByLevelOnly()
};


// props.searchText - reaktywna zmienna przechowująca input
// props.searchByWhat - reaktywna zmienna text or desc


</script>

<style scoped>

@media screen and (max-width: 1023px) {

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }


  .uniqueCard {
    border: 1px solid black;
  }

}


</style>