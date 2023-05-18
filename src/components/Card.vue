<template>
    <div>
      <h1>Card Component</h1>
    </div>

    <ul>
      <li v-for="card in filtr">{{ card.name }}</li>
    </ul>
</template>

<script setup>

import {watch, ref, computed} from 'vue'

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
  }
});

const myProp = ref(props.allCardsVal);


const searchText = ref(props.searchText)
console.log(props.searchByWhat)

const textordesc = ref(props.searchByWhat)


watch( () => props.allCardsVal,(newValue, oldValue) => {
    myProp.value = newValue;
    console.log(`myProp changed to ${newValue}`)
    if(newValue){
      console.log('Its true')
    };
  },
  { deep: true }
);

watch( () => props.searchByWhat,(newValue, oldValue) => {
  textordesc.value = newValue;
    console.log(`myProp changed to ${newValue}`)
    console.log(typeof newValue)
    if(newValue){
      console.log('Its true')
    };
  },
  { deep: true }
);


const filtr = computed(() => {
  return props.preFilterProp.filter((card) =>
    textordesc == 'true'
      ? card.name.toLowerCase().includes(searchText.value.toLowerCase())
      : card.desc.toLowerCase().includes(searchText.value.toLowerCase())
  )
})


</script>

<style scoped>

@media screen and (max-width: 1023px) {

}


</style>