<template>
    <div>
      <h1>Details Page</h1>
      <p>Name: {{ name }}</p>
      <!-- Rest of your component's content -->
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Define the props for the component
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  });
  
  // You can now use `props.name` in your component
  </script>
  
  <style scoped>
  /* Add your component's styles here */
  </style>