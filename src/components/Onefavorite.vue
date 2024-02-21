<script setup>
import { defineProps } from 'vue';
import { favoritesStore } from '../stores/favorites.js';
const props = defineProps({
    favori: Object, 
    index: Number,  
})
</script>
<template>
    <div class="bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg p-4 flex justify-between items-center">
      <span>{{ favori.name }}  {{ index }}</span>
      <div class="flex space-x-4">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline destroy" @click="$emit('delete', index)">
          Supprimer
        </button>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" @click="$emit()">
          Afficher
        </button>
      </div>
    </div>
  </template>
  
  

