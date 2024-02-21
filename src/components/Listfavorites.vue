<script setup>
import { favoritesStore } from '../stores/favorites.js';
import Onefavorite from './Onefavorite.vue';
  const props = defineProps({
    favoris: Array 
  })
    function deleteFavorite(index){
    favoritesStore.favorites.splice(index, 1);
    }


</script>
<template>
  <section class="bg-white rounded-lg shadow p-5">
    <h2 class="font-bold text-xl mb-4">Vos Localisations Favorites</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Exemple de localisation favorite -->
          {{ favoritesStore }}
          <Onefavorite v-for="(favorite, index) in favoritesStore.favorites" :key="index" :favori="favorite" :index="index" @delete="deleteFavorite(index)"/>          
    </div>
  </section>
</template>