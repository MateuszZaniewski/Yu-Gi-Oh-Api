<template>
  <div>
    <h1>Details Page</h1>
    <p>Name: {{ name }}</p>
    <!-- Rest of your component's content -->
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import axios from 'axios';
const cards = ref([]);

// Define the props for the component
const props = defineProps({
  name: {
    type: String,
    required: true
  }
});


const fetchCards = async () => {
    try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const fetchedCards = response.data.data;


    cards.value = fetchedCards;
    console.log(cards.value)
    } catch (error) {
      console.log(error);
    }
  };
  
  onMounted(() => {
    fetchCards();
  });


// You can now use `props.name` in your component
</script>