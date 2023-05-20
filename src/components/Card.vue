<template>
    <div>
      <h1>Card Component</h1>
    </div>

    <ul>
      <li v-for="card in searchByNameOrDescription.slice(0,30)" :key="card.id">{{ card.name }}</li>
    </ul>

    <button @click="show">SHow</button>
</template>

<script setup>

import {watch, computed} from 'vue'

const props = defineProps({
  preFilterProp: {
    type: Array,
    required: true,
  },
  allCardsVal: {
    type: Boolean,
    required: true
  },
  searchByWhat: {
    type: String,
    required: true
  },
  searchText: {
    type: String,
    required: true
  },
  levelArray: {
    type: Array,
    required: true
  }
});

const searchByNameOrDescription = computed(() => {
  return props.preFilterProp.filter(card => {
    if(props.searchByWhat == 'true'){
      return card.name.toLowerCase().includes(props.searchText.toLowerCase())
    }
    else if(props.searchByWhat == 'false'){
      return card.desc.toLowerCase().includes(props.searchText.toLowerCase())
    }
  })
})

const show = () => {
  console.log(props.levelArray)
}



// props.searchText - reaktywna zmienna przechowująca input
// props.searchByWhat - reaktywna zmienna text or desc


</script>

<style scoped>

@media screen and (max-width: 1023px) {

}


</style>